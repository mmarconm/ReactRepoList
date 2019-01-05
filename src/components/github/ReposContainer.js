import React, { Component } from "react";
//
import { fetchRepos } from "../../services/repos-api";

class ReposContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  //
  componentDidMount() {
    fetchRepos("mmarconm").then(res => window.console.log(res.data));
  }

  //
  render() {
    return <h1>Repos Container</h1>;
  }
}

// Statefull Component
export default ReposContainer;
