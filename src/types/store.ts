import { Card } from "./card";


export type observer = ({render: ()=> void}& HTMLElement);

export type Appstate = {
    

    favorites : Card[]
}

export enum QuoteActions {
    "ADD" = "ADD",
    "GET" = "GET",

}

export interface AddQuoteActions {
    action: QuoteActions.ADD,
    payload: Card
}

export interface GetQuoteActions {
    action: QuoteActions.GET,
    payload: Card[];
}

export type Actions = AddQuoteActions | GetQuoteActions