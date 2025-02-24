import express from 'express';
import apprenantRoutes from './routes/apprenantRoutes.js';
import enseignantRoutes from './routes/enseignantRoutes.js';
import administrateurRoutes from './routes/administrateurRoutes.js';
import presenceRoutes from './routes/presenceRoutes.js';

const app = express();
const port = 3000;

app.use(express.json()); // Middleware pour analyser les corps JSON
app.use(express.urlencoded({ extended: true })); // Middleware pour analyser les corps x-www-form-urlencoded

// Route principale de notre API
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Utilisation des routes
app.use('/apprenant', apprenantRoutes);
app.use('/enseignant', enseignantRoutes);
app.use('/administrateur', administrateurRoutes);
app.use('/presence', presenceRoutes);

// Le serveur écoute sur le port défini
app.listen(port, () => {
  console.log(`Serveur en écoute sur : http://localhost:${port}`);
});
