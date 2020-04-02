import React from "react"
import ReactDOM from "react-dom"
import "jquery/dist/jquery.min.js"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

chrome.tabs.query({ active: true, currentWindow: true }, tab => {
    ReactDOM.render((
        <div className="container">
            <div className="row">
                <div className="col">
                    <p>Options page</p>
                </div>
            </div>
        </div>
    ), document.getElementById("app"));
});