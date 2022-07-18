import styled from '@emotion/styled';
import React from 'react';
import { Todo } from '../../domain';
import { ServiceResolver } from '../../infrastructure';

const StyledLi = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;

  &.done {
    text-decoration: line-through;
  }
`;

const StyledButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: transparent;
  color: wheat;
  border: 1px dashed rgb(255, 246, 230);
`;

interface TodoProps {
  todo: Todo,
}

export const TodoComponent = ({ todo }: TodoProps) => {
  const todoRepository = ServiceResolver.resolve().TodoRepository;

  return (
    <StyledLi className={todo.isDone ? 'done' : ''}>
      <label  onClick={() => todoRepository.complete(todo)}>{todo.task}</label>
      <StyledButton onClick={() => todoRepository.remove(todo)}>X</StyledButton>
    </StyledLi>
  );
};
