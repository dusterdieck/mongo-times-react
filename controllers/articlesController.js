let Article = require("../models/Article");

module.exports = {
  // This method handles retrieving articles from the db
  index: function(req, res) {
    let query, notes;
    if (req.params.id) {
      Article.findOne({ '_id': req.params.id })
      .populate('notes')
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
    } else {
      Article.find({})
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
    }
    
  },
  // This method handles creating new articles
  create: function(req, res) {

    Article.create(req.body).then(function(doc) {
      console.log("%%%%%% NEW DOC %%%%%%%", doc);
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles updating articles
  // Not currently used in this app, but included for completeness
  update: function(req, res) {
    Article.update({
      _id: req.params.id
    },
      req.body
    ).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles deleting articles
  destroy: function(req, res) {
    Article.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
