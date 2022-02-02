export class ui {

    #displayPorduct(prod) {
        let produit = (<p>prod.ref + prod.price + prod.description </p>);
        let product = document.createElement("div");
        product.innerHTML=produit;
        document.body.appendChild(produit);
    }

    buildProductList(prods) {
        for (let aled = prods.length; aled > 0; aled--) {
            this.#displayPorduct(prods[aled]);
        }
    }

}