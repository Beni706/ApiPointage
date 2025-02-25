import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all enseignants
export const getAllEnseignants = async (req, res) => {
    try {
        const enseignants = await prisma.enseignant.findMany();
        res.json(enseignants);
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

// Get enseignant by ID
export const getEnseignantById = async (req, res) => {
    try {
        const { id } = req.params;
        const enseignant = await prisma.enseignant.findUnique({ where: { id_enseignant: parseInt(id) } });
        if (enseignant) {
            res.json(enseignant);
        } else {
            res.status(404).json({ error: 'Enseignant introuvable' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

// Create a new enseignant
export const createEnseignant = async (req, res) => {
    try {
        const { nom, prenom } = req.body;

        if (!nom || !prenom) {
            return res.status(400).json({ error: 'Tous les champs sont requis' });
        }

        const newEnseignant = await prisma.enseignant.create({
            data: { nom, prenom }
        });
        res.status(201).json(newEnseignant);
    } catch (error) {
        console.error('Error creating enseignant:', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

// Update an enseignant
export const updateEnseignant = async (req, res) => {
    try {
        const { id } = req.params;
        const { nom, prenom } = req.body;

        if (!nom || !prenom) {
            return res.status(400).json({ error: 'Tous les champs sont requis' });
        }

        const updatedEnseignant = await prisma.enseignant.update({
            where: { id_enseignant: parseInt(id) },
            data: { nom, prenom }
        });
        res.json(updatedEnseignant);
    } catch (error) {
        console.error('Error updating enseignant:', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

// Delete an enseignant
export const deleteEnseignant = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.enseignant.delete({ where: { id_enseignant: parseInt(id) } });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};