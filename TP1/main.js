class Document {

    constructor(ref, t, desc = null) {
        this.reference = ref;
        this.titre = t;
        this.description = desc;
    }

    setTitre(t) {
        this.titre = t;
    }

    setDesc(desc){
        this.description = desc;
    }
}

class documentView {

    constructor(doc) {
        this.documentv = doc;
    }

    short() {
      return (`<span> ${this.documentv.reference} ${this.documentv.titre} </span>`);
    }
    detail() {
      return (`<div><h1>${this.documentv.reference}</h1><p>${this.documentv.titre}</p><p>${this.documentv.description}</p></div>`)
    }
    render(type) {
        if (type === "short") {
            return this.short();
        }
        else if (type === "detail") {
            return this.detail();
        }
    }
}

class Collection {

    constructor(nom) {
        this.nom = nom;
        this.documents = [];
    }

    addDocument(doc) {
        this.documents.push(doc);
    }

    setDocumentList(docs) {
        for (let aled = docs.length; aled > 0; aled--) {
            this.documents.push(docs[aled]);
        }
    }

    lookup(ref) {
        for (let i = 0; i < this.documents.length; i++) {
            if (this.documents[i].reference === ref) {
                return this.documents[i];
            }
        }
    }
}

class CollectionView {

    constructor(col) {
        this.coll = coll;
    }

    render(){
        let rendouille = "<ol>"
        for (let aled = this.coll.documents.length; aled > 0; aled--) {
            rendouille = rendouille + "<li>" + this.coll.documents[aled].reference + "</li>";
        }
        rendouille = rendouille + "</ol>";
        return rendouille;
    }
}

let d = new Document("aled", "oskour", "autisme");
let dV = new documentView(d);
document.body.innerHTML = dV.render("detail");
