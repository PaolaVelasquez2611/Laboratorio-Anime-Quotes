import { getApi } from "../components/data";
import { AddQuoteActions, GetQuoteActions, QuoteActions } from "../types/store";


export const addFavorite = ({payload}: Pick<AddQuoteActions, "payload">): AddQuoteActions => {
    return {
        action: QuoteActions.ADD,
        payload
    }
}

export const Get = async (): Promise<GetQuoteActions >  => {
    const cards = getApi();
    return {
        action: QuoteActions.GET,
        payload: []
        
    }
}