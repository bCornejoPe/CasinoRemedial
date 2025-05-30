
const gamesController = {};
import gamesModel from "../models/Games.js";

// READ: Select a todas las categorias
gamesController.getgames = async (req, res) => {
  const games = await gamesModel.find();
  res.json(games);
};

// READ: Select a una categoria en especifico
gamesController.getgames = async (req, res) => {
  const games = await gamesModel.findById(req.params.id);
  console.log(games);
  res.json(games);
};

// CREATE: crea una categoria nueva
gamesController.creategames= async (req, res) => {
  const { nameGame, categories, maxBet, minimumBet } = req.body;
  const newGame = new gamesModel({
    nameGame, categories, maxBet, minimumBet
  });
  await newGame.save();
  res.json({ message: ["games saved"] });
};

// UPDATE: actualiza una categoria
gamesController.updategames= async (req, res) => {
  const { nameGame, categories, maxBet, minimumBet } = req.body;
  await gamesModel.findByIdAndUpdate(req.params.id, {
    nameGame, categories, maxBet, minimumBet
  });
  res.json({ message: ["games updated"] });
};

// DELETE: Borra una categoria en         al id que me envien
gamesController.deletegames = async (req, res) => {
  await gamesModel.findByIdAndDelete(req.params.id);
  res.json({ message: ["games deleted"] });
};

export default gamesController;
