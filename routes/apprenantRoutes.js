import express from 'express';
// Import all functions from the apprenantController
import { getAllApprenants, getApprenantById, createApprenant, updateApprenant, deleteApprenant } from '../controllers/apprenantController.js';

const router = express.Router();

// Route to get all apprenants
router.get('/', getAllApprenants);

// Route to get an apprenant by ID
router.get('/:id', getApprenantById);

// Route to create a new apprenant
router.post('/', createApprenant);

// Route to update an apprenant by ID
router.put('/:id', updateApprenant);

// Route to delete an apprenant by ID
router.delete('/:id', deleteApprenant);

export default router;