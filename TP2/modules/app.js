import {ui} from "./ui.js";
import {product} from "./product.js";


export class app {

    init(prods) {
        ui.buildProductList(prods)
    }

}