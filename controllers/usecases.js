const usecases = require('../models/usecases');

// GET AUTHORS
// =========================
exports.getUsecases = async (req, res, next) => {
  try {
    const usecasesList = await usecases.find().sort('createdon');
    res.json(usecasesList);
  } catch (error) {
    console.log(error);
  }
};
