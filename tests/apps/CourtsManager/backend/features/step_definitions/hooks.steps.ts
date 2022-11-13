import { AfterAll, BeforeAll } from 'cucumber';
import { EventBus } from '../../../../../../src/Contexts/Shared/domain/EventBus';
import { EnvironmentArranger } from '../../../../../Contexts/Shared/infrastructure/arranger/EnvironmentArranger';
import { CourtsManagerApp } from '../../../../../../src/apps/CourtsManager/backend/CourtsManagerApp';
import { ConfigureRabbitMQCommand } from '../../../../../../src/apps/CourtsManager/backend/command/ConfigureRabbitMQCommand';
import container from '../../../../../../src/apps/CourtsManager/backend/dependency-injection/index';

let application: CourtsManagerApp;
let environmentArranger: EnvironmentArranger;
let eventBus: EventBus;

BeforeAll(async () => {
  await ConfigureRabbitMQCommand.run();

  environmentArranger = await container.get<Promise<EnvironmentArranger>>('CourtsManager.EnvironmentArranger');
  eventBus = container.get<EventBus>('CourtsManager.Shared.domain.EventBus');
  await environmentArranger.arrange();

  application = new CourtsManagerApp();
  await application.start();
});

AfterAll(async () => {
  await environmentArranger.arrange();
  await environmentArranger.close();

  await application.stop();
});

export { application, environmentArranger, eventBus };
