import { Actions, Appstate, observer } from "../types/store";
import storage, { PersistanceKeys } from "../Utils/storage";
import { reducer } from "./reducer";


const emptyFavorites: Appstate = {
favorites: [],
};

export let app = storage.get<Appstate>({
    key: PersistanceKeys.STORE,
    defaultValue: emptyFavorites
})

let Observers : observer[]=[];

const saveStore = (state:Appstate)=>{
    storage.set({key:PersistanceKeys.STORE, value: state});
    
}

const notifyObservers = () => {Observers.forEach((a)=>a.render())};

export const dispatch = (action:Actions) => {
    const copy = JSON.parse(JSON.stringify(app));
    const newApp = reducer(action, copy);
    app = newApp;


    saveStore(newApp);
    notifyObservers();
};

export const addObserver = (ref:observer) => {
    Observers = [...Observers,ref];
}

