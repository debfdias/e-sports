import { Router } from 'express';
import { AdsController } from '../controllers/AdsController';

const adsRoutes = Router();

const adsController = new AdsController();

adsRoutes.get('/', adsController.listAll);
adsRoutes.get('/game/:game_id', adsController.listByGame);
adsRoutes.get('/:ad_id', adsController.listByDiscord);
adsRoutes.post('/game/:game_id', adsController.create);

export { adsRoutes };