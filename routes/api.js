const express = require("express");
const tutorialController = require("../controller/tutorialController");
const router = express.Router();

router
  .route("/tutorials")
  .get(tutorialController.tutorials)
  .post(tutorialController.newTutorials)
  .delete(tutorialController.deleteAllTutorials);
router
  .route("/tutorials/:id")
  .get(tutorialController.getTutorialById)
  .put(tutorialController.updateTutorials)
  .delete(tutorialController.deleteTutorials);

module.exports = router;
