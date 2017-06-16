import React, { Component } from "react";
import API from "../../utils/API";

class SaveWell extends Component {
  constructor(){
    super();

    this.deleteArticle = this.deleteArticle.bind(this);
    this.displayNotes = this.displayNotes.bind(this);
  }

  // favoriteQuote toggles a quote's favorite status in the db and then
  // reloads all quotes in our app
  deleteArticle() {
    API.deleteArticle( this.props._id )
      .then(this.props.getSavedArticles);
  }
  displayNotes() { 
  {/* Some kind of Modal thing to follow */}
  }
  render() {
    return (
      <div className="well well-lg" id={this.props._id}>
        <div className="row">
          <div className="col-sm-9">
            <a href={this.props.link}>
              <h2>{this.props.title}</h2>
            </a>
          </div>
          <div className="col-sm-3">
            <button className="btn btn-danger delete pull-right" onClick={this.deleteArticle}>Delete</button>
            <button className="btn btn-info notes pull-right" onClick={this.displayNotes}>Notes</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SaveWell;
