import {product, products} from "./product.js";
export class cart {

    constructor() {
        this.panier = [];
    }

    addToCart(prod) {
        if (this.panier.includes(prod)) {
            let nb = this.panier.indexOf(prod);
            this.panier[nb].ajoutQtt();
        } else {
            this.panier.push(prod);
        }
        //localStorage.setItem('cart', JSON.stringify(this.panier));
    }

    genericCalc() {
        console.log(this.panier)
        let prix = 0;
        this.panier.forEach((prod)=>{
            prix = prix + prod.price*prod.qtt;
        })
        return prix;
    }

    emptyCart() {
        this.panier = [];
        console.log(this.panier)
    }

    setTab(tab) {
        tab.forEach((prod) => {
            this.addToCart(new product(prod.ref, prod.price, prod.description, prod.qtt));
        })
    }

}