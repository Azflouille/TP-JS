export class products {

    #tab;

    constructor() {
        this.#tab = [];
    }

    ajoutTab(prod) {
        this.#tab.push(prod);
    }

}

class product {

    constructor(r, p, d) {
        this.ref = r;
        this.price = p;
        this.description = d;
    }
}

let p1 = new products()
let p2 = new product("aled", "oskour", "autisme")
p1.ajoutTab(p2);



