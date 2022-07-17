import { BloC } from 'poc-core-system';
import { Todo, TodoRepository } from '../domain';

export class TodoRepositoryImpl extends BloC<Todo[]> implements TodoRepository {
  private static instance: TodoRepositoryImpl;

  private constructor() {
    super([]);
  }

  public static getInstance(): TodoRepositoryImpl {
    if (!TodoRepositoryImpl.instance) {
      TodoRepositoryImpl.instance = new TodoRepositoryImpl();
    }
    return TodoRepositoryImpl.instance;
  }

  add(todo: Todo): void {
    if (!this.state.some((t: Todo) => t.id === todo.id)) {
      this.setState([...this.state, todo]);
    }
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
