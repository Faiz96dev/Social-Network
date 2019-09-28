import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/state";

let reranderTree = store => {
  ReactDOM.render(
    <App state={store} dispatch={store.dispatch} />,

    document.getElementById("root")
  );
};

reranderTree(store.getState());

store.subscribe(reranderTree);

serviceWorker.unregister();
