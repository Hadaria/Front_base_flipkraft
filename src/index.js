import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";

import App from "./App";
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <BrowserRouter basename={"/tf-jsx-demo/rosy/"}>
        <Route path="/" component={App} />
    </BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();
