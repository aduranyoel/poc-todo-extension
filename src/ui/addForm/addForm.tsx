import { RoundedForm } from 'poc-ui-components';
import React, { FormEvent, FormEventHandler, useRef } from 'react';

interface AddFormProps {
  onSubmit: (value: string) => void;
}

export const AddForm = ({ onSubmit }: AddFormProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  const _onSubmit: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!inputRef.current) return
    onSubmit(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <RoundedForm onSubmit={_onSubmit}>
      <input style={{ width: '100%' }} placeholder="value goes here" ref={inputRef} type="text"/>
      <button type="submit">Add</button>
    </RoundedForm>
  );
};

AddForm.defaultProps = {
  onSubmit: () => undefined,
};
