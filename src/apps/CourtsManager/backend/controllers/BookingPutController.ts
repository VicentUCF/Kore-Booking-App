import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { CommandBus } from '../../../../Contexts/Shared/domain/CommandBus';
import { Controller } from './Controller';
import { CreateBookingCommand } from '../../../../Contexts/CourtsManager/Bookings/domain/CreateBookingCommand';

type CoursePutRequest = Request & {
  body: {
    id: string;
    courtId: string;
    date: Date;
  };
};
export class BookingPutController implements Controller {
  constructor(private commandBus: CommandBus) {}

  async run(req: CoursePutRequest, res: Response) {
    try {
      const { id, courtId, date } = req.body;
      const createCourseCommand = new CreateBookingCommand({ id, courtId, date });
      await this.commandBus.dispatch(createCourseCommand);

      res.status(httpStatus.CREATED).send();
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
