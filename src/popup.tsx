import React from "react"
import ReactDOM from "react-dom"
import {Store} from 'webext-redux';
import SampleComponent from "./components/SampleComponent";
import {Provider} from "react-redux";

const store = new Store();

if (chrome.tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, tab => {
        store.ready().then(() => {
            ReactDOM.render((
                <Provider store={store}>
                    <SampleComponent name="options"/>
                </Provider>
            ), document.getElementById("app"));
        });
    });
}