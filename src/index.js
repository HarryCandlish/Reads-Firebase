import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers";

import App from "./components/App/index";
import Firebase, { FirebaseContext } from "./components/Firebase";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
      <App />
    </Provider>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
