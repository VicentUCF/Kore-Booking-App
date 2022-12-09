import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { CommandBus } from '../../../../../Contexts/Shared/domain/CommandBus';
import { Controller } from '../Controller';
import { CreateCourtCommand } from '../../../../../Contexts/CourtsManager/Courts/domain/CreateCourtCommand';

type CourtPutRequest = Request & {
  body: {
    id: string;
    name: string;
    schedule: string;
  };
};

export class CourtPutController implements Controller {
  constructor(private commandBus: CommandBus) {}

  async run(req: CourtPutRequest, res: Response): Promise<void> {
    try {
      const { id, name, schedule } = req.body;
      const createCourtCommand = new CreateCourtCommand({ id, name, schedule });
      await this.commandBus.dispatch(createCourtCommand);

      res.status(httpStatus.CREATED).send();
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
