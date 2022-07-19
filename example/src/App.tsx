import React from 'react'
import 'poc-ui-components/dist/styles/theme.scss';

import { CoreAppShell, MenuItem, Content, RegisterMenu, ServiceResolver } from 'poc-core-system';
import { TodoContainer } from 'poc-todo-extension';

const App = () => {
  const registerMenu = new RegisterMenu(ServiceResolver.resolve().MenuRepository);
  registerMenu.invoke(new MenuItem('menu1', 'Todo list'));
  const contentRepository = ServiceResolver.resolve().ContentRepository;
  const content = new Content('section1', TodoContainer);
  contentRepository.activate(content)

  return <CoreAppShell />
}

export default App
