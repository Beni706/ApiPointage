import express from 'express';
import bodyParser from 'body-parser';
import apprenantRoutes from '../routes/apprenantRoutes.js';
import enseignantRoutes from '../routes/enseignantRoutes.js';
import administrateurRoutes from '../routes/administrateurRoutes.js';
import presenceRoutes from '../routes/presenceRoutes.js';

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/apprenants', apprenantRoutes);
app.use('/api/enseignants', enseignantRoutes);
app.use('/api/administrateurs', administrateurRoutes);
app.use('/api/presences', presenceRoutes);

export default app;