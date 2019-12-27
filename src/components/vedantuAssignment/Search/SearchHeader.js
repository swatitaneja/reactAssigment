import React from "react";
import classes from "./SearchHeader.module.css";

const searchHeader = props => {
  return (
    <div className={classes.SearchHeader}>
      <input
        placeholder="Seach Repositories ..."
        onChange={props.search}
      ></input>
      <select>
        <option>Type All</option>
        <option>Type owned</option>
      </select>
      <select>
        <option>Language All</option>
        <option>Language JS</option>
        <option>Language Java</option>
      </select>
    </div>
  );
};

export default searchHeader;
