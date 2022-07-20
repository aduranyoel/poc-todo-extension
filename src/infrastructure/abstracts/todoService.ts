import { BloC } from 'poc-core-system';
import { Todo } from '../../entities';

export abstract class TodoService extends BloC<Todo[]> {
  abstract add(todo: Todo): void;

  abstract remove(todo: Todo): void;

  abstract complete(todo: Todo): void;
}
