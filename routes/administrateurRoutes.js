import express from 'express';
import { getAllAdministrateurs, getAdministrateurById, createAdministrateur, updateAdministrateur, deleteAdministrateur } from '../controllers/administrateurController.js';

const router = express.Router();

// Route pour récupérer tous les administrateurs
router.get('/', getAllAdministrateurs);

// Route pour récupérer un administrateur par son ID
router.get('/:id', getAdministrateurById);

// Route pour créer un nouvel administrateur
router.post('/', createAdministrateur);

// Route pour mettre à jour un administrateur par son ID
router.put('/:id', updateAdministrateur);

// Route pour supprimer un administrateur par son ID
router.delete('/:id', deleteAdministrateur);

export default router;
