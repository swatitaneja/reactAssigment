import React from "react";
import Repo from "../Repo/Repo";
import classes from "./RepoList.module.css";
const repoList = props => {
  const repos = props.repoList.map(repo => {
    return (
      <li>
        <Repo
          repoName={repo.repoName}
          repoType={repo.repoType}
          forkCount={repo.forkCount}
          lastUpdated={repo.lastUpdated}
          repoDescription={repo.repoDescription}
        ></Repo>
      </li>
    );
  });
  return (
    <div className={classes.RepoList}>
      <ul>{repos}</ul>
    </div>
  );
};

export default repoList;
