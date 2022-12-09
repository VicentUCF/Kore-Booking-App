import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import container from '../dependency-injection/index';
import { validateReqSchema } from './index';
export const register = (router: Router) => {
  const reqSchema = [
    body('id').exists().isString(),
    body('name').exists().isString(),
    body('schedule').exists().isString(),
  ];

  const CourtPutController = container.get('Apps.CourtsManager.controllers.CourtPutController');
  router.put('/courts', reqSchema, validateReqSchema, (req: Request, res: Response) =>
    CourtPutController.run(req, res)
  );

  const CourtGetController = container.get('Apps.CourtsManager.controllers.CourtGetController');
  router.get('/courts', (req: Request, res: Response) => CourtGetController.run(req, res));

};
