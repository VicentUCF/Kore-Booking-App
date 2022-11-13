import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { body } from 'express-validator';
import { validateReqSchema } from '.';
import StatusGetController from '../controllers/StatusGetController';

export const register = (router: Router) => {
  const reqSchema = [
    body('id').exists().isString(),
    body('courtId').exists().isString(),
    body('date').exists().isString(),
  ];

  const BookingPutController = container.get('Apps.CourtsManager.controllers.BookingPutController');
  router.put('/bookings/:id', reqSchema, validateReqSchema, (req: Request, res: Response) =>
    BookingPutController.run(req, res)
  );

  const controller: StatusGetController = container.get('Apps.CourtsManager.controllers.StatusGetController');
  router.get('/bookings', (req: Request, res: Response) => controller.run(req, res));
};
