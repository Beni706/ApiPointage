import express from 'express';
// Import all functions from the presence controller
import { getAllPresences, getPresenceById, createPresence, updatePresence, deletePresence } from '../controllers/presenceController.js';

const router = express.Router();

// Route to get all presence records
router.get('/', getAllPresences);

// Route to get a presence record by its ID
router.get('/:id', getPresenceById);

// Route to create a new presence record
router.post('/', createPresence);

// Route to update a presence record by its ID
router.put('/:id', updatePresence);

// Route to delete a presence record by its ID
router.delete('/:id', deletePresence);

export default router;