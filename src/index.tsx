import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
// import { I18nextProvider } from "react-i18next";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css"

import Router from "./router";
// import i18n from "./translation";

import "bulma/css/bulma.css";
import axios from "axios";

import { Provider } from 'react-redux';
import { store } from './app/store';

axios.defaults.withCredentials = true;

const ExceptionPage = () => null;

const LabfisApp = () => (
  <BrowserRouter basename={'/labfis'}>
    <Provider store={store}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/">
          <Router />
        </Route>
      </Switch>
    </Provider>
  </BrowserRouter>
);

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ExceptionPage} />
      <Route path="/">
        <LabfisApp />
      </Route>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
