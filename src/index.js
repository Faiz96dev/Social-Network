import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";

let reranderTree = state => {

    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>,

        document.getElementById("root")
    );
};

reranderTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    reranderTree(state)
});

serviceWorker.unregister();

