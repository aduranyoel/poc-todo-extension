import {
  ActivateContent,
  Content,
  ContentRepository,
  ContentRepositoryImpl,
  Extension,
  MenuItem,
  MenuRepository,
  MenuRepositoryImpl,
  RegisterMenu
} from 'poc-core-system';
import { TodoComponent } from '../ui';

const TODO_EXTENSION_ID = 'Todo extension';
const CONTENT_ID = 'Todo content';

export class TodoExtension implements Extension {
  id: string = TODO_EXTENSION_ID;
  private menuItem = new MenuItem('todo-list', 'Todo list', this.openExtension.bind(this));
  private todoContent: Content = new Content(CONTENT_ID, TodoComponent);

  constructor(
    private menuRepository: MenuRepository = MenuRepositoryImpl.getInstance(),
    private contentRepository: ContentRepository = ContentRepositoryImpl.getInstance(),
  ) {}

  async init(): Promise<void> {
    this.registerMenu();
  }

  async destroy(): Promise<void> {
  }

  openExtension(): void {
    const activateContent = new ActivateContent(this.contentRepository);
    activateContent.invoke(this.todoContent);
  }

  private registerMenu(): void {
    const registerMenu = new RegisterMenu(this.menuRepository);
    registerMenu.invoke(this.menuItem);
  }

}

