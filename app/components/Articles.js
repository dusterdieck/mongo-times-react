import React, { Component } from "react";
import Panel from "./common/Panel";
import API from "../utils/API";

class Articles extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
    // Binding scrapeArticles to this component since we'll be passing this method to 
    // other components to use
    this.scrapeArticles = this.scrapeArticles.bind(this);
    this.renderArticles = this.renderArticles.bind(this);
  }
  // Getting all articles once the component has mounted
  componentDidMount() {
    this.scrapeArticles();
  }
  scrapeArticles() {
    API.scrapeArticles().then((res) => {
      this.setState({ articles: res.data });
    });
  }
  //function for random unique id
  guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }
  // A helper method for rendering one panel for each article
  renderArticles() {
    return this.state.articles.map(article => (
      <Panel
        key={this.guidGenerator()}
        title={article.title}
        link={article.link}
        blurb={article.blurb}
      />
    ));
  }
  render() {
    return (
      <div className="container">
        <div className="row" id='articles'>
            {this.renderArticles()}
        </div>
      </div>
    );
  }
}

export default Articles;