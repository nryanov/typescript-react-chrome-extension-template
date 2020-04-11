import {ActionCreator} from "redux";
import {AppAction} from "./types";
import {CLICK} from "./actionType";

export const click: ActionCreator<AppAction> = (): AppAction => {
    return {
        type: CLICK
    }
};
