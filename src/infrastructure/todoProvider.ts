import { TodoService } from './abstracts';
import { TodoServiceImpl } from './implementations';

export class TodoProvider {
  public TodoRepository: TodoService;

  private static instance: TodoProvider;

  private constructor() {
    this.TodoRepository = new TodoServiceImpl();
  }

  public static provide(): TodoProvider {
    if (!TodoProvider.instance) {
      TodoProvider.instance = new TodoProvider();
    }
    return TodoProvider.instance;
  }
}
