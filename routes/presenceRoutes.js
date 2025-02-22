import express from 'express';
import { getAllPresences, getPresenceById, createPresence, updatePresence, deletePresence } from '../controllers/presenceController.js';

const router = express.Router();

// Route pour récupérer toutes les présences
router.get('/', getAllPresences);

// Route pour récupérer une présence par son ID
router.get('/:id', getPresenceById);

// Route pour créer une nouvelle présence
router.post('/', createPresence);

// Route pour mettre à jour une présence par son ID
router.put('/:id', updatePresence);

// Route pour supprimer une présence par son ID
router.delete('/:id', deletePresence);

export default router;
