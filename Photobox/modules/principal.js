import {gallery_ui} from "./gallery_ui.js";

let g = new gallery_ui();

window.addEventListener("load", function(event) {
    document.getElementById("load_gallery").addEventListener('click', async event => {
        await g.display_Gallery();
    });
});