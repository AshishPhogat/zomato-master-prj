import React from "react";
import classnames from "classnames";

const MenuCategory = (props) => {
  return (
    <>
      <div id={props.name} className={classnames({"text-zomato-400 bg-zomato-50 py-4 rounded-l-lg px-1 border-r-4 border-zomato-400":props.isActive})} onClick={props.onClickHandler}>
          <h3 id={props.name} onClick={props.onClickHandler}>{props.name} ({props.items.length})</h3>
      </div>
    </>
  );
};

export default MenuCategory;