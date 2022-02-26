import {cart} from "./cart.js";

export class ui {

    constructor() {
        this.cart = new cart();
    }

    #displayProduct(produit) {

        let container = document.createElement("div");
        container.className = "product";

        let container2 = document.createElement("div");
        container2.className = "photo";

        let span = document.createElement("img");
        span.src = `${produit.img}`;
        span.height = "250"
        span.width = "250"

        let a = document.createElement("a");
        a.className = "product-add2cart";

        let span2 = document.createElement("span");
        span2.className = "mdi mdi-cart";
        a.appendChild(span2);

        a.addEventListener("click", () => {
            this.cart.addToCart(produit);
            this.displayCart();
        });

        container2.appendChild(span);
        container2.appendChild(a);

        let container3 = document.createElement("div");
        container3.className = "details";

        let container4 = document.createElement("div");
        container4.className = "details-top";

        let strongRef = document.createElement("strong");
        strongRef.className = "bigger";
        strongRef.innerHTML = `${produit.ref}`;

        let strongPrice = document.createElement("strong");
        strongPrice.className = "bigger";
        strongPrice.innerHTML = `${produit.price}`;


        container4.appendChild(strongRef);
        container4.appendChild(strongPrice);

        let container5 = document.createElement("div");
        container5.className = "details-description";
        container5.innerHTML = `${produit.description}`;

        container3.appendChild(container4);
        container3.appendChild(container5);

        container.appendChild(container2);
        container.appendChild(container3);
        console.log(document.getElementById("product-list"));
        document.getElementById("product-list").appendChild(container);

    }

    buildProductList(prods) {
        document.getElementById("product-list").innerHTML = "";
        console.log(document.getElementById("product-list").innerHTML)
        let prodTab = prods.getTab();
        for (let aled = 0; aled < prodTab.length; aled++) {
            this.#displayProduct(prodTab[aled]);
        }
        this.displayCart();
    }

    displayCart() {
        //verification si existe cart-content
        let cart = document.getElementById("cart-content");
        let footer = document.getElementById("cart-footer");

        let foundCart = true;
        let foundFoot = true
        if (cart === null) {
            cart = document.createElement("table");
            cart.id = "cart-content";
            foundCart = false;
        }
        if (footer === null) {
            footer = document.createElement("div");
            footer.id = "cart-footer";
            foundFoot = false;
        }
        //creation du innerHTML du cart-content
        let html = "<tbody>";
        let tab = this.cart.panier;
        let nb = 0
        tab.forEach((produit) => {
            html += `<tr>
                      <td data-type="ref">${produit.ref}</td>  
                      <td data-type="qte"> x${produit.qtt} </td> 
                      <td data-type="amount"> ${produit.price}</td>
                      </tr>`;
            nb += produit.qtt;
        });
        html += "</tbody>";
        cart.innerHTML = html;

        //creation du innerHTML du cart-footer
        html = "<strong class = bigger>Total : &nbsp</strong> <span class='bigger' id='cart-total'>";

        html += `${this.cart.genericCalc()}</span>`;
         footer.innerHTML = html;

        if (!foundCart) {
            document.getElementById("cart-wrapper").appendChild(cart);
        }
        if (!foundFoot) {
            document.getElementById("cart-wrapper").appendChild(footer);
        }

        document.getElementById("total-products").innerHTML = nb;

        let reset = document.getElementById("empty-cart");
        reset.addEventListener("click", () => {
            this.cart.emptyCart();
            this.displayCart();
        });

    }
}