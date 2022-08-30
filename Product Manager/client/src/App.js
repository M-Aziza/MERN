import React from "react";
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Details from "./views/Details";
import Main from './views/Main';
import ProductUpdate from "./views/ProductUpdate";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
        <Route exact path="/product/">
          <Main />
        </Route>
        <Route  path="/product/update/:id">
          <ProductUpdate />
        </Route>
        <Route path="/product/:id">
          <Details />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
