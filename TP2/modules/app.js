import {ui} from "./ui.js";
import {product, products} from "./product.js";
const enter = document.getElementById('product-search');


export class app {

    constructor() {
        this.ui = new ui();
        this.products = new products();
        this.products.ajoutTab(new product("aled", 10, "autisme"))
        this.products.ajoutTab(new product("Aled2", 20, "autisme2"))
        this.products.ajoutTab(new product("aled3", 30, "autisme3"))
        this.products2 = new products();
    }

    init() {
        this.ui.buildProductList(this.products);

        //tentative local storage mais le panier ne log pas les qtt, donc multiplications des produits
        /**this.ui.cart.setTab(JSON.parse(localStorage.getItem('cart')));
        this.ui.displayCart();**/
        enter.addEventListener('keyup',(e) =>{
            e.preventDefault();
            if(e.keyCode==13){
            this.products2.setTab(this.products.search(enter.value));
            this.ui.buildProductList(this.products2)
            console.log(this.products.search(enter.value));
            }
    })
}
}