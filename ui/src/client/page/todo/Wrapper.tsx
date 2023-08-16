'use client';
import { useLocalStorage } from '@org/common';
import { useTodo } from '@org/store';
import { Fragment, useEffect } from 'react';
import { Form } from './form';
import { List } from './list';

export const Wrapper = () => {
  const { list, initialTodo } = useTodo((s) => s);
  const [value, setValue] = useLocalStorage('todo-list', []);
  useEffect(() => {
    setValue(list)
  }, [list]);

  useEffect(() => {
    if (value.length > 0) {
      initialTodo(value);
    }
  }, []);
  return (
    <Fragment>
      <Form />
      <List />
    </Fragment>
  );
};
