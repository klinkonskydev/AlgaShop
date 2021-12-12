import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomeView from "./views/Home.view";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistedStore } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore} />
      <HomeView />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
