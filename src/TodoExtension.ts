import {
  ActivateContent,
  Content,
  ContentRepository,
  Extension,
  MenuItem,
  MenuRepository,
  RegisterMenu,
  ServiceResolver,
} from 'poc-core-system';
import { TodoContainer } from './ui';

const TODO_EXTENSION_ID = 'Todo extension';
const CONTENT_ID = 'Todo content';
const MENU_ID = 'Todo menuItem';

export class TodoExtension implements Extension {
  id: string = TODO_EXTENSION_ID;
  private menuItem = new MenuItem(MENU_ID, 'Todo list', this.openExtension.bind(this));
  private todoContent: Content = new Content(CONTENT_ID, TodoContainer);

  constructor(
    private menuRepository: MenuRepository = ServiceResolver.resolve().MenuRepository,
    private contentRepository: ContentRepository = ServiceResolver.resolve().ContentRepository,
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

