const { drinksService } = require("../Services")

const getData = async (req, res) => {
  const result = await drinksService.getData();

  res.status(201).json({ drinks: result });
};

const listAllCategories = async (_req, res) => {
  const result = await drinksService.listAllCategories()
  res.status(200).json({ drinks: result });
}

const getDrinkByIngredient = async (req, res) => {
  const { q } = req.query;
  const result = await drinksService.getRecipeByIngredient(q);
  res.status(200).json({ drinks: result })
}

module.exports = {
  getData,
  listAllCategories,
  getDrinkByIngredient,
};
