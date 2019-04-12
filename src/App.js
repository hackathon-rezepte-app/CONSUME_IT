import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";
import { createBrowserHistory } from "history";
import "./App.css";
import Start from "./pages/Start";
import Correct from "./pages/Correct";
import Recipes from "./pages/Recipes";

const history = createBrowserHistory();

export default function App() {
  const [items, setItems] = useState([]);
  const [recipes, setRecipes] = useState([]);

  function getItems(picture) {
    Axios.post("", picture).then(data => {
      setItems(data);
    });
    setItems(null);
    setRecipes(null);
    history.push("/correct");
  }

  function getRecipes() {
    Axios.post("", items).then(data => {
      setRecipes(data);
    });
    setRecipes(null);
    history.push("/recipes");
  }

  return (
    <Router history={history}>
      <Route path="/" exact render={() => <Start queryItems={getItems} />} />
      <Route
        path="/correct/"
        render={() => <Correct queryRecipes={getRecipes} items={items} />}
      />
      <Route path="/recipes/" render={() => <Recipes recipes={recipes} />} />
    </Router>
  );
}
