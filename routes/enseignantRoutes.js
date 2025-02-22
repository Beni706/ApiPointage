import express from 'express';
import { getAllEnseignants, getEnseignantById, createEnseignant, updateEnseignant, deleteEnseignant } from '../controllers/enseignantController.js';

const router = express.Router();

// Route pour récupérer tous les enseignants
router.get('/', getAllEnseignants);

// Route pour récupérer un enseignant par son ID
router.get('/:id', getEnseignantById);

// Route pour créer un nouvel enseignant
router.post('/', createEnseignant);

// Route pour mettre à jour un enseignant par son ID
router.put('/:id', updateEnseignant);

// Route pour supprimer un enseignant par son ID
router.delete('/:id', deleteEnseignant);

export default router;
