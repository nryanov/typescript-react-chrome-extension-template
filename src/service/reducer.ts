import {AppAction, State} from "./types";
import * as Type from "./actionType";
import {Reducer} from "redux";

export const reducer: Reducer<State, AppAction> = (state: State, action: AppAction): State => {
    if (action.type === Type.CLICK) {
        return {
            clickCount: state.clickCount + 1
        };
    } else {
        return state;
    }
};