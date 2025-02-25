import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Afficher tous les enregistrements de présence
export const getAllPresences = async (req, res) => {
    try {
        const presences = await prisma.presence.findMany({
            include: {
                Apprenant: true, // Inclure les détails de l'apprenant
            },
        });
        res.json(presences);
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

// Afficher un enregistrement de présence par son ID
export const getPresenceById = async (req, res) => {
    try {
        const { id } = req.params;
        const presence = await prisma.presence.findUnique({
            where: { id_presence: parseInt(id) },
            include: {
                Apprenant: true, // Inclure les détails de l'apprenant
            },
        });
        if (presence) {
            res.json(presence);
        } else {
            res.status(404).json({ error: 'Enregistrement de présence introuvable' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

// Créer un nouvel enregistrement de présence
export const createPresence = async (req, res) => {
    try {
        const { date_jour, heure_arrivé, heure_depart, statut_presence, id_apprenant } = req.body;

        if (!date_jour || !heure_arrivé || !id_apprenant) {
            return res.status(400).json({ error: 'Date, heure d\'arrivée et ID de l\'apprenant sont requis' });
        }

        const newPresence = await prisma.presence.create({
            data: { date_jour, heure_arrivé, heure_depart, statut_presence, id_apprenant },
        });
        res.status(201).json(newPresence);
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

// Mettre à jour un enregistrement de présence
export const updatePresence = async (req, res) => {
    try {
        const { id } = req.params;
        const { date_jour, heure_arrivé, heure_depart, statut_presence, id_apprenant } = req.body;

        const updatedPresence = await prisma.presence.update({
            where: { id_presence: parseInt(id) },
            data: { date_jour, heure_arrivé, heure_depart, statut_presence, id_apprenant },
        });
        res.json(updatedPresence);
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

// Supprimer un enregistrement de présence
export const deletePresence = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.presence.delete({ where: { id_presence: parseInt(id) } });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};