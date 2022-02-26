export class products {

    #tab;

    constructor() {
        this.#tab = [];
    }

    ajoutTab(prod) {
        this.#tab.push(prod);
    }

    getTab() {
        return this.#tab;
    }

    setTab(t){
        this.#tab = t;
    }

    search(serch) {
        let tabf = this.#tab.filter(function(recherche) {
            return (recherche.ref.toLowerCase().includes(serch.toLowerCase()) || recherche.description.toLowerCase().includes(serch.toLowerCase()));
        });
        return tabf;
    }

}

export class product {

    constructor(r, p, d, i) {
        this.ref = r;
        this.price = p;
        this.description = d;
        this.qtt = 1;
        this.img = i;
    }

    ajoutQtt() {
        this.qtt++;
    }

}



