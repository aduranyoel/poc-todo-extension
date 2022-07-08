import { Extension, MenuRepository, MenuRepositoryImpl, MenuItem } from 'poc-core-system';

const TODO_EXTENSION_ID = 'Todo extension';

export class TodoExtension implements Extension {
  id: string = TODO_EXTENSION_ID;
  private menuRepository: MenuRepository;

  constructor() {
    this.menuRepository = MenuRepositoryImpl.getInstance();
  }

  async init(): Promise<void> {
    this.menuRepository.register(new MenuItem('todo-list', 'Todo list', this.openExtension.bind(this)));
  }

  async destroy(): Promise<void> {
  }

  openExtension(): void {
    alert('from Toto extension');
  }

}

