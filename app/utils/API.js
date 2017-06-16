import axios from "axios";

const API = {
  // Retrieves scraped articles
  scrapeArticles: function() {
    return axios.get("/api/scraper");
  },
  // Retrieves all articles from the db
  getArticles: function(){
    return axios.get('/api/articles');
  },
  // Retrieves specified article from the db, with notes
  getArticlesWithNotes: function(id) {
    return axios.get(`/api/articles/${id}`);
  },
  // Saves a new article to the db, expects article to be an object
  saveArticle: function( article ) {
    return axios.post("/api/articles", article);
  },
  // Deletes specified article from the db
  deleteArticle: function(id) {
    return axios.delete(`/api/articles/${id}`);
  },
  // Updates specified article with info in body, exprect article to be an object
    //not actually used in this app, just included for completeness
  updateArticle: function(id, article) {
    return axios.patch(`/api/notes/${id}`, article);
  },
  // Retrieves all notes from the db
    //not actually used in this app, just included for completeness
  getNotes: function(id) {
    return axios.get(`/api/notes/${id}`);
  },
  // Saves a new note for a specified article to db, expects note to be an object
  saveNote: function( articleId, note ) {
    return axios.post(`/api/notes/${articleId}`, note);
  },
  // Deletes specified note from the db
  deleteNote: function(id) {
    return axios.delete(`/api/notes/${id}`);
  },
  // Updates specified note with info in body, exprect note to be an object
    //not actually used in this app, just included for completeness
  updateNote: function(id, note) {
    return axios.patch(`/api/notes/${id}`, note);
  }
};

export default API;
