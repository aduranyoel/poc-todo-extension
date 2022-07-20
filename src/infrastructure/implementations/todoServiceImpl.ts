import { TodoService } from '../abstracts';
import { Todo } from '../../entities';

export class TodoServiceImpl extends TodoService {

  constructor() {
    super([]);
  }

  add(todo: Todo): void {
    if (this.state.some((t: Todo) => t.id === todo.id)) return;
    this.setState([...this.state, todo]);
  }

  complete(todo: Todo): void {
    const idx = this.state.findIndex(t => t.id === todo.id);
    todo.isDone = true;
    const newState = [...this.state];
    newState.splice(idx, 1, todo);
    this.setState(newState);
  }

  remove(todo: Todo): void {
    this.setState(this.state.filter(t => t.id !== todo.id));
  }
}
