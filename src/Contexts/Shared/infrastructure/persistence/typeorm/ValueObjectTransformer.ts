import { NewableClass } from '../../../domain/NewableClass';
import { Primitives, ValueObject } from '../../../domain/value-object/ValueObject';

export const ValueObjectTransformer = <T extends Primitives>(valueObject: NewableClass<ValueObject<any>>) =>
  ({
    to: (value: ValueObject<T>): T => value.value,
    from: (value: T): ValueObject<T> => new valueObject(value)
  });
