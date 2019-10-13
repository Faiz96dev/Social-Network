import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import StoreContext from "./StoreContext";
import Provider from './StoreContext'

let reranderTree = state => {

    ReactDOM.render(
        <Provider value={store}>
        <App />
        </Provider>,
        document.getElementById("root")
    );
};

reranderTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    reranderTree(state)
});

serviceWorker.unregister();

