import styled from '@emotion/styled';
import React, { FormEvent, FormEventHandler, useRef } from 'react';

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4px;

  & > * {
    color: white;
    border: 1px dashed rgb(255, 246, 230);
    padding: 8px;
    background: transparent;
  }

  & > .value {
    border-radius: 1rem 0 0 1rem;
  }

  & > .action {
    border-radius: 0 1rem 1rem 0;
  }
`;

interface AddFormProps {
  onSubmit: (value: string) => void;
}

export const AddForm = ({ onSubmit }: AddFormProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  const _onSubmit: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      onSubmit(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <StyledForm onSubmit={_onSubmit}>
      <input placeholder="value goes here" className="value" ref={inputRef} type="text"/>
      <button className="action" type="submit">Add</button>
    </StyledForm>
  );
};

AddForm.defaultProps = {
  onSubmit: () => undefined,
};
