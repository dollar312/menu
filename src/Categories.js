import React from "react";

const Categories = (props) => {
  return (

      <button className="filter-btn"
      onClick={() => {
        props.showCategory(props.food);
      }}
    >
      {props.food}
    </button>
    
  );
};

export default Categories;
