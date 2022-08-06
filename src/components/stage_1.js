import React, { useState, useContext, useRef } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

import { MyContext } from '../context';

const Stage1 = () => {
  const textInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, '']);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);

    if (validate) {
      setError([false, '']);
      context.addPlayer(value);
      textInput.current.value = '';
    }
  };

  const validateInput = (value) => {
    if (value === '') {
      setError([true, 'Sorry you need to type a name in']);
      return false;
    }

    if (value.length <= 2) {
      setError([true, 'Sorry we need a longer name']);
      return false;
    }

    return true;
  };

  console.log(context);

  return (
    <Form onSubmit={handleSubmit} className='mt-4'>
      <Form.Group>
        <Form.Control
          type='text'
          placeholder='Add player name'
          name='player'
          ref={textInput}
        />
        <Button className='miami' variant='primary' type='submit'>
          Add player
        </Button>
      </Form.Group>
      {error[0] ? <Alert>{error[1]}</Alert> : null}
    </Form>
  );
};

export default Stage1;
