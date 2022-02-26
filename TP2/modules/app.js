import {ui} from "./ui.js";
import {product, products} from "./product.js";
const enter = document.getElementById('product-search');


export class app {

    constructor() {
        this.ui = new ui();
        this.products = new products();
        this.products.ajoutTab(new product("Paresse", 143, "Intelligence is the ability to avoid doing work, yet getting the work done.", "https://www.tropical-hamac.com/blog/wp-content/uploads/2020/02/INSTALLER-HAMAC-COURBE.jpg"))
        this.products.ajoutTab(new product("Logiciels", 1569, "Software is like sexe, it's better when it's free.", "https://www.tomsguide.fr/content/uploads/sites/2/2008/07/linus-torvalds.jpg"))
        this.products.ajoutTab(new product("Alpha", 1337, "Backups are for wimps. Real men upload their data to an FTP site and have everyone else mirror it.", "https://yt3.ggpht.com/ytc/AKedOLTaJV87ngYEW-xPsUO58ugfS3jdOx3VODW6Z3ygPA=s900-c-k-c0x00ffffff-no-rj"))
        this.products.ajoutTab(new product("Vers l'infini et au delà", 1845, "My name is Linus, and I am your God.", "https://cdn.deguisetoi.fr/images/rep_art/gra/219/2/219202/deguisement-miss-buzz-l-eclair-toy-story-femme_219202.jpg"))
        this.products.ajoutTab(new product("Fenetre", 11, "A computer is like air conditioning, it becomes useless when you open Windows.", "https://img.generation-nt.com/windows-7-torvalds_0320021600470741.jpg"))
        this.products.ajoutTab(new product("Nvidia", 3090, "Fuck you Nvidia !", "https://img.generation-nt.com/0001266041.jpg"))
        this.products.ajoutTab(new product("Cidre", 2.5, "Ca n'a rien à voir mais je voulais juste le mettre.", "https://www.lamordue.fr/shop/media/catalog/product/cache/5399fa225dda294ec271097ec8347178/l/a/la_mordue_-_original.png"))
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