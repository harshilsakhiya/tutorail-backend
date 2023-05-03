const tutorialModel = require("../models/tutorialModel");

exports.tutorials = async (req, res) => {
  try {
    const query = {};
    const { title } = req.query;
    if (title) {
      query["title"] = { $regex: title, $options: "i" };
    }
    const tutorial = await tutorialModel.find(query);
    return res.status(200).json({ status: true, tutorial });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

exports.getTutorialById = async (req, res) => {
  try {
    const { id } = req.params;

    const tutorial = await tutorialModel.find({
      _id: id,
    });
    return res.status(200).json({ status: true, tutorial });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

exports.newTutorials = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    console.log({ title, description, status });

    const tutorial = new tutorialModel({
      description,
      title,
      status,
    });
    await tutorial.save();
    return res.json({ status: true, tutorial });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

exports.updateTutorials = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const updateTutorial = await tutorialModel.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        status,
      },
      {
        new: true,
      }
    );

    return res.status(200).json({ status: true });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

exports.deleteTutorials = async (req, res) => {
  try {
    const { id } = req.params;

    await tutorialModel.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

exports.deleteAllTutorials = async (req, res) => {
  try {
    await tutorialModel.deleteMany();

    res.json({ message: "All Post deleted successfully." });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
