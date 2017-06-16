import React, { Component } from "react";
import SaveWell from "./common/SaveWell";
import API from "../utils/API";

class Saved extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
    // Binding methods to this component since we'll be passing this method to 
    // other components to use
    this.getSavedArticles = this.getSavedArticles.bind(this);
    this.renderSavedArticles = this.renderSavedArticles.bind(this);
  }
  // Getting all articles once the component has mounted
  componentDidMount() {
    this.getSavedArticles();
  }
  getSavedArticles() {
    API.getArticles().then((res) => {
      console.log('res', res.data)
      this.setState({ articles: res.data });
    });
  }
  // A helper method for rendering one panel for each article
  renderSavedArticles() {
    return this.state.articles.map(article => (
      <SaveWell
        key={article._id}
        title={article.title}
        link={article.link}
        _id={article._id}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  }
  render() {
    return (
      <div className="container">
        <div className="row" id='articles'>
            {this.renderSavedArticles()}
        </div>
      </div>
    );
  }
}

export default Saved;