import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import App from "./components/App";
import reducer from "./reducers/notes";
import { Provider } from "react-redux";

const store = createStore(reducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root")
);
