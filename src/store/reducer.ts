import { Actions, Appstate, QuoteActions } from "../types/store";


export const reducer = (currentAction:Actions, currentState:Appstate): Appstate => {
    const {action, payload} = currentAction;

    switch (action) {
        case QuoteActions.ADD:
            return {
                ...currentState,
                favorites : [
                    payload,
                    ...currentState.favorites,
                ]
            }

            case QuoteActions.GET:
            return {
                ...currentState,
                favorites: payload
        
            }

            default:
                return currentState;


    }
}