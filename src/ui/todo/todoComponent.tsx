import styled from '@emotion/styled';
import { RoundedButton } from 'poc-ui-components';
import React from 'react';
import { Todo } from '../../entities';
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
  const todoRepository = TodoProvider.provide().TodoRepository;

  return (
    <StyledLi className={todo.isDone ? 'task--done' : ''}>
      <label  onClick={() => todoRepository.complete(todo)}>{todo.task}</label>
      <RoundedButton onClick={() => todoRepository.remove(todo)}>X</RoundedButton>
    </StyledLi>
  );
};
