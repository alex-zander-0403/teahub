const teaRouter = require('express').Router();
const { Tea } = require('../../db/models');

teaRouter.route('/')
.get(async (req, res) => {
  try {
    const allTeas = await Tea.findAll();
    console.log(allTeas);
    
    res.json(allTeas);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'ошибка сервера 1' });
  }
});

module.exports = teaRouter;
