import React from "react";
import classes from "./Header.module.css";

const header = props => {
  return (
    <div className={classes.Header}>
      <ui></ui>
      <li>Overview</li>
      <li>Repositories</li>
      <li>Star</li>
      <li>Followers</li>
      <li>Following</li>
    </div>
  );
};

export default header;
