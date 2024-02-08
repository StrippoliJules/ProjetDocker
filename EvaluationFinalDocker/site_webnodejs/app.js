const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// Importation des routes
const articleRoutes = require('./models/routes/articles');

// Utilisation des routes
app.use('/articles', articleRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));