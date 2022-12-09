import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { body } from 'express-validator';
import { validateReqSchema } from '.';

export const register = (router: Router) => {
  const reqSchema = [
    body('id').exists().isString(),
    body('courtId').exists().isString(),
    body('date').exists().isString(),
  ];

  const BookingPutController = container.get('Apps.CourtsManager.controllers.BookingPutController');
  router.put('/bookings', reqSchema, validateReqSchema, (req: Request, res: Response) =>
    BookingPutController.run(req, res)
  );

  const BookingGetController = container.get('Apps.CourtsManager.controllers.BookingGetController');
  router.get('/bookings', (req: Request, res: Response) => BookingGetController.run(req, res));
};
