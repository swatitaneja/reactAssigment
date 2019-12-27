import React from "react";

import classes from "./Profile.module.css";
const profile = props => {
  return (
    <div className={classes.Profile}>
      <img src={props.imgUrl}></img>
      <h1>{props.name}</h1>
      <p>{props.id}</p>
      <br></br>
      <p>{props.description}</p>
      <button className={classes.Button}>Edit Bio</button>
    </div>
  );
};

export default profile;
