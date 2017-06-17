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
  scrapeArticles(event) {
    event.preventDefault();
    console.log('SCRAPE HIT');
    API.scrapeArticles().then((res) => {
      console.log('res', res.data);
      this.setState({ articles: res.data });
    });
  }
  //render children method to add props to children that are Articles
  renderChildren() {
    console.log('type 1', React.Children.type);
    console.log('type 2', this.props.children.type);
    if (React.Children.type === Articles){
    return 
      React.cloneElement(this.props.children, { articles: this.state.articles })
    }
    else return this.props.children
  }

  render() {
    return (
      <div>
        <Navbar scrapeArticles={this.scrapeArticles} />
        <Jumbo />
        {React.cloneElement(this.props.children, { articles: this.state.articles })}
      </div>
    )
  }

}

export default Main;
