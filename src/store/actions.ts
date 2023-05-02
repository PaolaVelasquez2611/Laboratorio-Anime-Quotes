import { AddQuoteActions, QuoteActions } from "../types/store";


export const addFavorite = ({payload}: Pick<AddQuoteActions, "payload">): AddQuoteActions => {
    return {
        action: QuoteActions.ADD,
        payload
    }
}