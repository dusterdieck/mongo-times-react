import React, { Component } from "react";
import Panel from "./common/Panel";

class Articles extends Component {
  constructor() {
    super();
    // Binding scrapeArticles to this component since we'll be passing this method to 
    // other components to use
    this.renderArticles = this.renderArticles.bind(this);
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
    return (!this.props.articles ? 
      this.props.articles.map(article => (
        <Panel
          key={this.guidGenerator()}
          title={article.title}
          link={article.link}
          blurb={article.blurb}
        />))
        : 
        (<div className="well well-lg" id={this.guidGenerator()}>
          <h2>Uh-Oh. No articles have been scraped yet! Press above button to retrieve MLB News!</h2>   
        </div>) );
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