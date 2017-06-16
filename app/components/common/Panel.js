import React, { Component } from "react";
import API from "../../utils/API";

class Panel extends Component {
  constructor(){
    super();

    this.saveArticle = this.saveArticle.bind(this);
  }
  //function for random unique id
  guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }
  // favoriteQuote toggles a quote's favorite status in the db and then
  // reloads all quotes in our app
  saveArticle() {
    let article = {title: this.props.title,
                   link: this.props.link}
    API.saveArticle( article );
  }
  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.title}</h3>
        </div>
        <div className="panel-body row">
          <div className="col-sm-9">
            {this.props.blurb.map(section => <p key={this.guidGenerator()}>{section}</p> )}
            <a href={this.props.link} className="btn btn-primary">Continue Reading</a>
          </div>
          <div className="col-sm-3">
            <button className="btn btn-success save pull-right" onClick={this.saveArticle}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
