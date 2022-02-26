import {ui} from "./ui.js";
import {product, products} from "./product.js";
const enter = document.getElementById('product-search');


export class app {

    constructor() {
        this.ui = new ui();
        this.products = new products();
        this.products.ajoutTab(new product("UnParaplui", 8, "c waterproof"))
        this.products.ajoutTab(new product("UnParasoleil", 12, "c soleilproof"))
        this.products.ajoutTab(new product("Glaudel", 1, "il est pas cher"))
        this.products.ajoutTab(new product("ifon13", 1200, "pigeon"))
        this.products.ajoutTab(new product("gifi", 9, "evoidéondujéni"))
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