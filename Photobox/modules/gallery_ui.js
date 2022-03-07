import {gallery} from "./gallery.js";

export class gallery_ui {

    constructor() {
        this.gallery = new gallery();
    }

    async display_Gallery() {
        let data = await this.gallery.load()
        for (let i = 0; i < data.length; i++) {
            let tmp = document.getElementById("a"+i)
            tmp.src = "https://webetu.iutnc.univ-lorraine.fr/" + data[i];
        }
        let tmp2 = document.querySelector("img");
        tmp2.forEach(function(img) {
            img.addEventListener("click", event => {
            console.log("zebi la mouche");
        })
        })
    }
}