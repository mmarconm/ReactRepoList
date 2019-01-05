import React, { Component } from "react";
//
import { fetchRepos } from "../../services/repos-api";
import ReposList from "./ReposList";

class ReposContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      username: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    fetchRepos("mmarconm").then(res => this.setState({ repos: res.data }));
  }

  //
  changeHandler(event) {
    this.setState({ username: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    fetchRepos(this.state.username).then(res =>
      this.setState({ repos: res.data })
    );
  }

  //
  render() {
    return (
      <div className="container">
        <br />
        <div className="jumbotron">
          <h3>Github Repo Search</h3>
          <p>Pesquise por repositorios de outros colaboradores é Facil :D</p>
        </div>
        <div className="form-group">
          <form className="" onSubmit={this.submitHandler}>
            <input
              onChange={this.changeHandler}
              className="form-control"
              type="search"
              placeholder="Informe Usuario e Tecle enter... Ex: mmarconm"
            />
          </form>
        </div>

        <ReposList repos={this.state.repos} />
      </div>
    );
  }
}

// Statefull Component
export default ReposContainer;
