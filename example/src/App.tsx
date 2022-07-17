import React from 'react'
import 'poc-core-system/dist/styles/theme.scss';

import { CoreAppShell, MenuItem, MenuRepositoryImpl, ContentRepositoryImpl, Content, RegisterMenu } from 'poc-core-system';
import { TodoContainer } from 'poc-todo-extension';

const App = () => {
  const registerMenu = new RegisterMenu(MenuRepositoryImpl.getInstance());
  registerMenu.invoke(new MenuItem('menu1', 'Todo list'));
  const contentRepository = ContentRepositoryImpl.getInstance();
  const content = new Content('section1', TodoContainer);
  contentRepository.activate(content)

  return <CoreAppShell />
}

export default App
