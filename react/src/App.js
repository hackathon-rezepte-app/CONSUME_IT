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
    setItems(null);
    setRecipes(null);

    Axios.post(
      "https://fooddetectionfunction.azurewebsites.net/api/HttpTrigger1?code=DhJiN9OpE3bNuxkdvCPIKgB4/80pTxQLDOvchiUwziNTEJ8fjZf6xw==",
      picture
    ).then(response => {
      if (response.headers.contentType == "appilcation/json") {
        setItems(response.data);
      } else {
        setItems([{ name: "banana" }, { name: "apple" }]);
      }
    });
  }

  function getRecipes() {
    setRecipes(null);
    Axios.post(
      "https://foodrecipesearch2.azurewebsites.net/api/HttpTrigger1?code=NhQM5XrZtyruksuhZ8CVxMSLxxekeZoQa7qvkB1MNTMcgBnzXCgpOg==",
      {
        ingredients: items
      }
    ).then(response => {
      setRecipes(response.data.recipes);
    });
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
