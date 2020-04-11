import {createStore, applyMiddleware, Store} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer"
import {AppAction, State} from "./types";

export const initialState: State = {
    clickCount: 0
};

export const storeFactory = (state: State): Store<State, AppAction> => applyMiddleware(thunk)(createStore)(
    reducer,
    state
);
