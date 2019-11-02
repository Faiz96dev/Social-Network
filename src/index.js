import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import {Provider} from 'react-redux'

let reranderTree = ()=> {

    ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>,
        document.getElementById("root")
    );
};

reranderTree(store.getState());


serviceWorker.unregister();

