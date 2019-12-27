import React from "react";
import classes from "./Repo.module.css";
const repo = props => {
  return (
    <div className={classes.Repo}>
      <h2 className={classes.RepoName}>{props.repoName}</h2>
      <p>{props.repoDescription}</p>
      <p className={classes.RepoFeatures}>{props.repoType}</p>
      <p className={classes.RepoFeatures}>{props.forkCount}</p>
      <p className={classes.RepoFeatures}>Updated {props.lastUpdated}</p>
    </div>
  );
};

export default repo;
