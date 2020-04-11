import {CLICK} from "./actionType";

export interface State {
    clickCount: number
}

interface ClickAction {
    type: typeof CLICK
}

export type AppAction = ClickAction;
