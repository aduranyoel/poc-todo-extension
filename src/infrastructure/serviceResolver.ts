import { IBloC } from 'poc-core-system';
import { Todo, TodoRepository } from '../domain';
import { TodoRepositoryImpl } from './todoRepositoryImpl';

export class ServiceResolver {
  public TodoRepository: TodoRepository & IBloC<Todo[]>;

  private static instance: ServiceResolver;

  private constructor() {
    this.TodoRepository = new TodoRepositoryImpl();
  }

  public static resolve(): ServiceResolver {
    if (!ServiceResolver.instance) {
      ServiceResolver.instance = new ServiceResolver();
    }
    return ServiceResolver.instance;
  }
}
