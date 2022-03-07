import {photoloader} from "./photoloader.js";

export class gallery {

    constructor() {
        this.photo = new photoloader;
    }

    async load() {
        let data = [];
        for (let i = 0; i < 10; i++) {
            data[i] = await this.photo.geturl(i);
        }
        return data;
    }

}