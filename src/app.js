// ./src/app.js
import React, { createRef } from "react";
import { createRoot } from "react-dom/client";

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reducer as ghReducer } from "./modules/github";
import { reducer as soReducer } from "./modules/stackoverflow";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./components/App";

const store = createStore(
  combineReducers({
    github: ghReducer,
    stackoverflow: soReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
  
const root = createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
