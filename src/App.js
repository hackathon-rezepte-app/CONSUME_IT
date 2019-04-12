import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Start from "./pages/Recipes";
import Correct from "./pages/Correct";
import Recipes from "./pages/Recipes";

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={Start} />
      <Route path="/correct/" component={Correct} />
      <Route path="/recipes/" component={Recipes} />
    </Router>
  );
}
