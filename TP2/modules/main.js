import {app} from "./app.js";


let a = new app();

window.addEventListener("load", function(event) {
    console.log("main");
    a.init();
});