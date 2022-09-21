import { Router } from 'express';

import { adsRoutes } from './ads.routes';
import { gamesRoutes } from './games.routes';

const routes = Router();

routes.use('/ads', adsRoutes);
routes.use('/games', gamesRoutes);

export { routes };