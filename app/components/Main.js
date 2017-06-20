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
    for (let child in this.props.children){
      if(this.props.children[child]){
        if(this.props.children[child].type){
          console.log('check hit');
          console.log('type', this.props.children[child].type.name);
        }
      }
    }
    if (React.Children.type === Articles){
      console.log('articles yes')
    return React.cloneElement(this.props.children, { articles: this.state.articles })
    }
    else { 
      console.log('articles no'); 
      return React.cloneElement(this.props.children, { articles: this.state.articles }) 
    }
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
