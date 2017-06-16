import express from 'express';
import articlesController from "../controllers/articlesController";
import notesController from "../controllers/notesController";
import scraper from "../controllers/scraper";

const router = new express.Router();

//scraper
router.get("/scraper", scraper)

//articles
// Get all articles (or optionally a specific quote with an id)
router.get("/articles/:id?", articlesController.index);
// Create a new quote using data passed in req.body
router.post("/articles", articlesController.create);
// Update an existing quote with a speicified id param, using data in req.body
  // Not currently used in this app, but included for completeness
router.patch("/articles/:id", articlesController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/articles/:id", articlesController.destroy);

//notes
// Get all articles (or optionally a specific quote with an id)
  // Not currently used in this app, but included for completeness
router.get("/notes/:id?", notesController.index);
// Create a new quote using data passed in req.body
router.post("/notes/:articleId", notesController.create);
// Update an existing quote with a speicified id param, using data in req.body
  // Not currently used in this app, but included for completeness
router.patch("/notes/:id", notesController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/notes/:id", notesController.destroy);

module.exports = router;
