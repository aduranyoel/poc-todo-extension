import { Content, ContentService, Extension, MenuItem, MenuService, } from 'poc-core-system';
import { SystemProvider } from 'poc-core-system/dist/infrastructure/systemProvider';
import { TodoContainer } from './ui';

const TODO_EXTENSION_ID = 'Todo extension';
const CONTENT_ID = 'Todo content';
const MENU_ID = 'Todo menuItem';

export class TodoExtension implements Extension {
  id: string = TODO_EXTENSION_ID;
  private menuItem = new MenuItem(MENU_ID, 'Todo list', this.openExtension.bind(this));
  private todoContent: Content = new Content(CONTENT_ID, TodoContainer);

  constructor(
    private menuService: MenuService = SystemProvider.provide().MenuService,
    private contentService: ContentService = SystemProvider.provide().ContentService,
  ) {}

  async init(): Promise<void> {
    this.registerMenu();
  }

  async destroy(): Promise<void> {
  }

  private openExtension(): void {
    this.contentService.activate(this.todoContent);
  }

  private registerMenu(): void {
    this.menuService.register(this.menuItem);
  }

}

