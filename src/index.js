import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/state";

let reranderTree = state => {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} />,

    document.getElementById("root")
  );
};

reranderTree(store.getState());

store.subscribe(reranderTree);

serviceWorker.unregister();
