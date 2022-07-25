import styled from '@emotion/styled';
import { RoundedButton } from 'poc-ui-components';
import React from 'react';
import { Todo } from '../../domain';
import { TodoProvider } from '../../infrastructure';

const StyledLi = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;

  &.task--done {
    text-decoration: line-through;
  }
`;

interface TodoProps {
  todo: Todo,
}

export const TodoComponent = ({ todo }: TodoProps) => {
  const todoService = TodoProvider.provide().TodoService;

  return (
    <StyledLi className={todo.isDone ? 'task--done' : ''}>
      <label  onClick={() => todoService.complete(todo)}>{todo.task}</label>
      <RoundedButton onClick={() => todoService.remove(todo)}>X</RoundedButton>
    </StyledLi>
  );
};
