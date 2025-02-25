import express from 'express';
// Import all functions from the administrateurController
import { getAllAdministrateurs, getAdministrateurById, createAdministrateur, updateAdministrateur, deleteAdministrateur } from '../controllers/administrateurController.js';

const router = express.Router();

// Route to display all administrators
router.get('/', getAllAdministrateurs);

// Route to display an administrator by ID
router.get('/:id', getAdministrateurById);

// Route to create a new administrator
router.post('/', createAdministrateur);

// Route to update an administrator by ID
router.put('/:id', updateAdministrateur);

// Route to delete an administrator by ID
router.delete('/:id', deleteAdministrateur);

export default router;