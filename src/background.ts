import {initialState, storeFactory} from "./service/store";
import {wrapStore} from "webext-redux";

const store = storeFactory(initialState);
wrapStore(store);

store.subscribe(() => {
    console.log("State changed!");
});
