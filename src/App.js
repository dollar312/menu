import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const showThisCategory = (categoryToShow) => {
    setMenuItems((prevMenu) => {
      return (prevMenu = items.filter(
        (itemElement) => itemElement.category == categoryToShow
      ));
    });
  };
  const allCategories = [];
  items.forEach((element) => {
    allCategories.push(element.category);
  });
  const uniqueCategory = [...new Set(allCategories)];
  const menuItemsToShow = menuItems.map((item) => (
    <Menu key={item.id} food={item} />
  ));
  const categories = uniqueCategory.map((item) => (
    <Categories key={item} food={item} showCategory={showThisCategory} />
  ));
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
        </div>
        <div className="underline"> </div>
        <div className="btn-container">
          <button
            className="filter-btn"
            onClick={() => {
              setMenuItems(items);
            }}
          >
            All
          </button>
          {categories}
        </div>
        <div className="section-center">{menuItemsToShow}</div>
      </section>
    </main>
  );
}

export default App;
