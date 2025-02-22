import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//Afficher toutes les présences
export const getAllPresences = async (req, res) => {
    try {
        const presences = await prisma.presence.findMany();
        res.json(presences);
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

//Afficher une présence par son ID
export const getPresenceById = async (req, res) => {
    try {
        const { id } = req.params;
        const presence = await prisma.presence.findUnique({ where: { id_presence: parseInt(id) } });
        if (presence) {
            res.json(presence);
        } else {
            res.status(404).json({ error: 'Présence introuvable' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

//Créer une nouvelle présence
export const createPresence = async (req, res) => {
    try {
        const { date_jour, heure_arrivé, heure_depart, statut_presence, id_apprenant } = req.body;
        
        // Log the received data
        console.log('Received data:', req.body);

        // Check if all required fields are present
        if (!date_jour || !heure_arrivé || !id_apprenant) {
            return res.status(400).json({ error: 'Tous les champs obligatoires sont requis' });
        }

        const newPresence = await prisma.presence.create({
            data: { date_jour, heure_arrivé, heure_depart, statut_presence, id_apprenant }
        });
        res.status(201).json(newPresence);
    } catch (error) {
        console.error('Error creating presence:', error); // Log the error details
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

//Mettre à jour une présence
export const updatePresence = async (req, res) => {
    try {
        const { id } = req.params;
        const { date_jour, heure_arrivé, heure_depart, statut_presence, id_apprenant } = req.body;
        
        // Log the received data
        console.log('Received data for update:', req.body);

        // Check if all required fields are present
        if (!date_jour || !heure_arrivé || !id_apprenant) {
            return res.status(400).json({ error: 'Tous les champs obligatoires sont requis' });
        }

        const updatedPresence = await prisma.presence.update({
            where: { id_presence: parseInt(id) },
            data: { date_jour, heure_arrivé, heure_depart, statut_presence, id_apprenant }
        });
        res.json(updatedPresence);
    } catch (error) {
        console.error('Error updating presence:', error); // Log the error details
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

//Supprimer une présence
export const deletePresence = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.presence.delete({ where: { id_presence: parseInt(id) } });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};
