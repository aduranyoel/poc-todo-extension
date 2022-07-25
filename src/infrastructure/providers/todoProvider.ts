import { TodoService } from '../abstracts';
import { TodoServiceImpl } from '../implementations';

export class TodoProvider {
  public TodoService: TodoService;

  private static instance: TodoProvider;

  private constructor() {
    this.TodoService = new TodoServiceImpl();
  }

  public static provide(): TodoProvider {
    if (!TodoProvider.instance) {
      TodoProvider.instance = new TodoProvider();
    }
    return TodoProvider.instance;
  }
}
