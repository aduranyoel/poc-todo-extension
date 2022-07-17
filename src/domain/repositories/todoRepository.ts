import { State } from 'poc-core-system';
import { Todo } from '../entities';

export interface TodoRepository extends State<Todo[]> {
  add(todo: Todo): void;

  remove(todo: Todo): void;

  complete(todo: Todo): void;
}
