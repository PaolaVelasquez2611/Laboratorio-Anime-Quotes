import { getApi } from "./components/data";
import "./components/export"
import { Animes } from "./components/export";
import  { Attributes } from "./components/Favorites/favorites";
import { app, dispatch } from "./store/index";

class AppContainer extends HTMLElement {
    animequote: Animes[] = []

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        
    }

    async connectedCallback() {
        const data = await getApi();
        

        if (app.favorites.length === 0) {
            const action:any = await getApi();
            dispatch(action);
        }
        else {
            this.render(data);
        }
    }

    addTofav(){
        console.log("wuwu")
    }

    render(data:any) {

            data.forEach((anime: any) => {
            const quotesAnime = this.ownerDocument.createElement('anime-categorias') as Animes;
            quotesAnime.setAttribute(Attributes.anime, anime.anime);
            quotesAnime.setAttribute(Attributes.character, anime.character);
            quotesAnime.setAttribute(Attributes.quote, anime.quote);
            quotesAnime.setAttribute(Attributes.favorite, "normal");
            this.animequote.push(quotesAnime)})
        
        if (this.shadowRoot) 
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/index.css">
            <h1 id="title">  -- Random Anime Quotes -- </h1>
            <p id="title"> Choose the ones you like </p>
            `
            this.animequote.forEach((animequote) => {   
                    this.shadowRoot?.appendChild(animequote);  
            })

            const section = this.ownerDocument.createElement("section")
            const Title2 = this.ownerDocument.createElement("h1")
            Title2.innerText = "-- Your Favorites --"
            Title2.id = "title"
            section.appendChild(Title2);

            app.favorites.forEach((card, i)=>{
                const favquotesAnime = this.ownerDocument.createElement('anime-categorias') as Animes;
            favquotesAnime.setAttribute(Attributes.anime, card.anime);
            favquotesAnime.setAttribute(Attributes.character, card.character);
            favquotesAnime.setAttribute(Attributes.quote, card.quote);
            section.appendChild(favquotesAnime)
            })
            this.shadowRoot?.appendChild(section)
            
            
            
            
        
        }



    }


customElements.define('app-container', AppContainer)