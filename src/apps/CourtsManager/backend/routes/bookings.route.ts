import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { body } from 'express-validator';
import { validateReqSchema } from '.';
import { UserPrimitive } from '../../../../Contexts/CourtsManager/Users/domain/User';
import { CourtPrimitive } from '../../../../Contexts/CourtsManager/Courts/domain/Court';

export const register = (router: Router) => {
  const reqSchema = [
    body('id').exists().isString(),
    body('user')
      .exists()
      .custom((user: UserPrimitive) => {
        if (!user.id) {
          throw new Error('User id is required');
        }
        return true;
      }),
    body('court')
      .exists()
      .custom((court: CourtPrimitive) => {
        if (!court.id) {
          throw new Error('Court id is required');
        }
        return true;
      }),
    body('date').exists().isString()
  ];

  const BookingPutController = container.get('Apps.CourtsManager.controllers.BookingPutController');
  router.put('/bookings', reqSchema, validateReqSchema, (req: Request, res: Response) =>
    BookingPutController.run(req, res)
  );

  const BookingGetController = container.get('Apps.CourtsManager.controllers.BookingGetController');
  router.get('/bookings', (req: Request, res: Response) => BookingGetController.run(req, res));
};
