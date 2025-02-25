import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Afficher tous les administrateurs
export const getAllAdministrateurs = async (req, res) => {
    try {
        const administrateurs = await prisma.administrateur.findMany();
        res.json(administrateurs);
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

// Afficher un administrateur par son ID
export const getAdministrateurById = async (req, res) => {
    try {
        const { id } = req.params;
        const administrateur = await prisma.administrateur.findUnique({ where: { id_administrateur: parseInt(id) } });
        if (administrateur) {
            res.json(administrateur);
        } else {
            res.status(404).json({ error: 'Administrateur introuvable' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

// Créer un nouvel administrateur
export const createAdministrateur = async (req, res) => {
    try {
        const { nom, prenom, email, password } = req.body;

        if (!nom || !prenom || !email || !password) {
            return res.status(400).json({ error: 'Tous les champs sont requis' });
        }

        const newAdministrateur = await prisma.administrateur.create({
            data: { nom, prenom, email, password }
        });
        res.status(201).json(newAdministrateur);
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

// Mettre à jour un administrateur
export const updateAdministrateur = async (req, res) => {
    try {
        const { id } = req.params;
        const { nom, prenom, email, password } = req.body;

        if (!nom || !prenom || !email || !password) {
            return res.status(400).json({ error: 'Tous les champs sont requis' });
        }

        const existingAdministrateur = await prisma.administrateur.findUnique({ where: { email } });
        if (existingAdministrateur && existingAdministrateur.id_administrateur !== parseInt(id)) {
            return res.status(400).json({ error: 'L\'email existe déjà' });
        }

        const updatedAdministrateur = await prisma.administrateur.update({
            where: { id_administrateur: parseInt(id) },
            data: { nom, prenom, email, password }
        });
        res.json(updatedAdministrateur);
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

// Supprimer un administrateur
export const deleteAdministrateur = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.administrateur.delete({ where: { id_administrateur: parseInt(id) } });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};