import { Router } from 'express';
import { GamesController } from '../controllers/GamesController';

const gamesRoutes = Router();

const gamesController = new GamesController();

gamesRoutes.get('/', gamesController.listAll);

export { gamesRoutes };