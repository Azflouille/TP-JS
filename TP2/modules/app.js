import {ui} from "./ui.js";
import {product} from "./product.js";


export class app {

    constructor() {
        this.ui = new ui();
        this.products = new products();
        this.products.ajoutTab(new product("aled", "oskour", "autisme"))
    }

    init() {
        this.ui.buildProductList(this.products);
    }

}