import styles from "./favorites.css"


export enum Attributes {
    "anime"="anime",
    "character"="character",
    "quote"="quote",
    "favorite"="favorite"
}

class Animes extends HTMLElement {
    public anime?:string;
    public character?:string;
    public quote?:string
    public favorite?:string

static get observedAttributes (){
    const attributes : Record <Attributes,null> = {
        anime:null,
        character:null,
        quote:null,
        favorite:null,
    }
    return Object.keys(attributes);
}

constructor(){
    super();
    this.attachShadow({mode:"open"});
}

connectedCallback(){
    this.render();
   
}

attributeChangedCallback(
    propName:Attributes,
    oldValue:string|undefined,
    newValue:string|undefined,
){ switch(propName){
    default:
        this[propName]=newValue;
        break;
}
this.render();

}

render(){
    if(this.shadowRoot){
        this.shadowRoot.innerHTML=``
        
        this.shadowRoot.innerHTML+=`
        <style>${styles.toString()}</style>
        <section class="section">
        <h3 id="quote">${this.quote}</h3>
        <p id="character"> by ${this.character}</p>
        <p id="title">${this.anime}</p>
        <p> ${this.favorite}</p>
        <button id="${this.quote}">Add Favorite</button>
        </section>
        
        `
        const button = this.shadowRoot?.querySelector("button");
        button?.addEventListener("click",()=>{
            this.favorite="Favorite"
            this.render()
        })
            

    }

}

}
customElements.define("anime-categorias", Animes)
export default Animes;