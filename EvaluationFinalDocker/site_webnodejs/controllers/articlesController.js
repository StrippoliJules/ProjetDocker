const { Article } = require('../models');

exports.index = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.render('articles/index', { articles });
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    res.status(500).send('Erreur lors de la récupération des articles');
  }
};
