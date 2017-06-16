const Note = require("../models/Note");
const Article = require("../models/Article");

module.exports = {
  // This method handles retrieving notes from the db
  // Not currently used in this app, but included for completeness
  index: function(req, res) {
    
    let query = req.params.id ? { _id: req.params.id } : {};

    console.log('QUERY', query)
    Note.find(query)
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  },
  // This method handles creating new notes
  create: function(req, res) {
    Note.create(req.body)
      .then(function(doc) {
      //add the id of the newly created note to the article to which it belongs
      Article.findOneAndUpdate({_id: req.params.articleId}, 
                               { $push: { "notes": doc._id } }, 
                               { new: true }, 
        function(err, newdoc) {
        //send the newdoc to the browser
          res.json(newdoc);
      });
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles updating notes
  // Not currently used in this app, but included for completeness
  update: function(req, res) {
    Note.update({
      _id: req.params.id
    },
      req.body
    ).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles deleting notes
  destroy: function(req, res) {
    Note.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
