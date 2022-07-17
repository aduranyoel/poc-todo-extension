import styled from '@emotion/styled';
import React from 'react';
import { Todo } from '../../domain';
import { TodoComponent } from '../todo/todoComponent';

const StyledUl = styled.ul`
  display: grid;
  gap: 0.5rem;
`;

interface TodosProps {
  todos: Todo[],
}

export const Todos = ({ todos }: TodosProps): JSX.Element => {
  return (
    <StyledUl>
      {todos.map((todo: Todo) => <TodoComponent key={todo.id.toISOString()} todo={todo}/>)}
    </StyledUl>
  );
};

Todos.defaultProps = {
  todos: [],
};
