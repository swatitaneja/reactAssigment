import React, { Component } from "react";
import Profile from "../Profile/Profile";
import RepoList from "../ReposList/ReposList";
import axios from "axios";
import classes from "./GitHubPage.module.css";
import Header from "../Header/Header";
import SearchHeader from "../Search/SearchHeader";
class GitHubPage extends Component {
  state = {
    profile: {},
    repoList: []
  };
  componentDidMount = () => {
    this.fetchData();
  };
  searchRepo = event => {
    let searchTerm = event.target.value;
    let repoList = [...this.state.repoList];
    let updateRepoList = [];
    for (var i = 0; i < repoList.length; i++) {
      if (repoList[i].repoName.search(searchTerm) > 1) {
        updateRepoList.push(repoList[i]);
      }
    }

    this.setState({
      repoList: updateRepoList
    });
  };
  fetchData = () => {
    axios.get("https://api.github.com/users/supreetsingh247").then(response => {
      const profile = {
        imgUrl: response.data.avatar_url,
        name: response.data.name,
        id: response.data.login,
        description: response.data.bio
      };
      this.setState({
        profile: profile
      });
    });

    axios
      .get("https://api.github.com/users/supreetsingh247/repos")
      .then(response => {
        const repoList = [];

        for (var i = 0; i < response.data.length; i++) {
          let repo = response.data[i];
          let repoDetails = {
            repoName: repo.name,
            repoDescription: repo.description,
            repoType: repo.language,
            forkCount: repo.size,
            lastUpdated: repo.updated_at
          };
          repoList.push(repoDetails);
        }
        this.setState({
          repoList: repoList
        });
      });
  };
  render() {
    return (
      <div className={classes.Main}>
        <div className={classes.GitHubPage}>
          <Profile {...this.state.profile}></Profile>
        </div>
        <div className={classes.GitHubPage}>
          <Header></Header>
          <SearchHeader search={event => this.searchRepo(event)}></SearchHeader>
          <RepoList repoList={this.state.repoList}></RepoList>
        </div>
      </div>
    );
  }
}

export default GitHubPage;
