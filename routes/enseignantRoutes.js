import express from 'express';
// Import all functions from the enseignantController
import { getAllEnseignants, getEnseignantById, createEnseignant, updateEnseignant, deleteEnseignant } from '../controllers/enseignantController.js';

const router = express.Router();

// Route to get all enseignants
router.get('/', getAllEnseignants);

// Route to get an enseignant by ID
router.get('/:id', getEnseignantById);

// Route to create a new enseignant
router.post('/', createEnseignant);

// Route to update an enseignant by ID
router.put('/:id', updateEnseignant);

// Route to delete an enseignant by ID
router.delete('/:id', deleteEnseignant);

export default router;