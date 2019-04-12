import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";
import Start from "./pages/Start";
import Correct from "./pages/Correct";
import Recipes from "./pages/Recipes";

export default function App() {
  const [items, setItems] = useState([]);
  const [recipes, setRecipes] = useState([]);

  function getItems(picture) {
    Axios.post("", picture).then(data => {
      setItems(data);
    });
    setItems(null);
    setRecipes(null);
  }

  function getRecipes() {
    Axios.post("", items).then(data => {
      setRecipes(data);
    });
    setRecipes(null);
  }

  return (
    <Router>
      <Route path="/" exact render={() => <Start queryItems={getItems} />} />
      <Route
        path="/correct"
        render={() => <Correct queryRecipes={getRecipes} items={items} />}
      />
      <Route path="/recipes" render={() => <Recipes recipes={recipes} />} />
    </Router>
  );
}
