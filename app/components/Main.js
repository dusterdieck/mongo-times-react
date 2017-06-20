import React, {Component} from "react";
import Navbar from "./common/Navbar";
import Jumbo from "./common/Jumbo";
import Articles from './Articles'
import API from "../utils/API";
import NotesModal from './common/NotesModal'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      notes: [],
      scraped: false,
      hideModal: true
    };
    this.renderChildren = this.renderChildren.bind(this);
    this.scrapeArticles = this.scrapeArticles.bind(this);
    this.displayNotes = this.displayNotes.bind(this);
  }
  //scrape method to be passed to Navbar for button
  scrapeArticles(event) {
    event.preventDefault();
    console.log('SCRAPE HIT');
    API.scrapeArticles().then((res) => {
      console.log('res', res.data);
      this.setState({ articles: res.data,
                      scraped: true });
    });
  }
  //displays notes, maybe
  displayNotes(_id) { 
    this.setState({hideModal: false})
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
      return React.cloneElement(this.props.children, { articles: this.state.articles, displayNotes: this.displayNotes }) 
    }
  }

  render() {
    return (
      <div>
        <Navbar scrapeArticles={this.scrapeArticles} scraped={this.state.scraped}/>
        <Jumbo />
        {this.renderChildren()}
        <NotesModal hidden={this.state.hideModal} />
      </div>
    )
  }

}

export default Main;
