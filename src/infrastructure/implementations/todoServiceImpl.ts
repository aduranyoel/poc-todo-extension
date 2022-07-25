import { TodoService } from '../abstracts';
import { Todo } from '../../domain';

export class TodoServiceImpl extends TodoService {

  constructor() {
    super([]);
  }

  add(todo: Todo): void {
    if (this.value.some((t: Todo) => t.id === todo.id)) return;
    this.next([...this.value, todo]);
  }

  complete(todo: Todo): void {
    const idx = this.value.findIndex(t => t.id === todo.id);
    todo.isDone = true;
    const newValue = [...this.value];
    newValue.splice(idx, 1, todo);
    this.next(newValue);
  }

  remove(todo: Todo): void {
    this.next(this.value.filter(t => t.id !== todo.id));
  }
}
