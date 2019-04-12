import React from "react";

function Correct({ items, setItems, queryRecipes }) {
  return (
    <div>
      Erkannte Lebensmittel:
      <ul>
        {items.map(item => (
          <ul>{item.name}</ul>
        ))}
      </ul>
      <button onClick={queryRecipes} />
    </div>
  );
}

export default Correct;
