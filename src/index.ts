import { getApi } from "./components/data";
import "./components/export"
import { Animes } from "./components/export";
import  { Attributes } from "./components/Favorites/favorites";

class AppContainer extends HTMLElement {
    animequote: Animes[] = []

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    async connectedCallback() {
        const data = await getApi();
        data?.forEach((anime: any) => {
            const quotesAnime = this.ownerDocument.createElement('anime-categorias') as Animes;
            quotesAnime.setAttribute(Attributes.anime, anime.anime);
            quotesAnime.setAttribute(Attributes.character, anime.character);
            quotesAnime.setAttribute(Attributes.quote, anime.quote);
            quotesAnime.setAttribute(Attributes.favorite, "normal");
            this.animequote.push(quotesAnime)
        

        })
        this.render()
    }

    addTofav(){
        console.log("wuwu")
    }

    render() {

        const array:any = []

        console.log("pasa super render")
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <h1 id="title"> Quotes </h1>
            `
            this.animequote.forEach((animequote) => {   
                    this.shadowRoot?.appendChild(animequote);  
            })

            this.shadowRoot.innerHTML += `
            <section class="favorites">
            <h1 id="title">Favorite Quotes </h1>
            ${array}
            </section>
            `
            
            
                
            
            
           
            
        
        }



    }
}

customElements.define('app-container', AppContainer)