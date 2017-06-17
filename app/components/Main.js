import React, {Component} from "react";
import Navbar from "./common/Navbar";
import Jumbo from "./common/Jumbo";
import Articles from './Articles'
import API from "../utils/API";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
    this.renderChildren = this.renderChildren.bind(this);
    this.scrapeArticles = this.scrapeArticles.bind(this);
  }
  //scrape method to be passed to Navbar for button
  scrapeArticles() {
    console.log('SCRAPE HIT');
    API.scrapeArticles().then((res) => {
      console.log('res', res.data);
      this.setState({ articles: res.data });
    });
  }
  //render children method to add props to children that are Articles
  renderChildren() {
    return 
      React.Children.map(this.props.children, (child) => 
        (child.type === Articles) ? React.cloneElement(child, { articles: this.state.articles }) : child
    );
  }

  render() {
    return (
      <div>
        <Navbar scrapeArticles={this.scrapeArticles} />
        <Jumbo />
        {this.renderChildren()}
      </div>
    )
  }

}

export default Main;
