import { BehaviorSubject } from 'poc-core-system';
import { Todo } from '../../domain';

export abstract class TodoService extends BehaviorSubject<Todo[]> {
  abstract add(todo: Todo): void;

  abstract remove(todo: Todo): void;

  abstract complete(todo: Todo): void;
}
