import React, { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import CounterStyles from './Counter.module.scss';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const clickHandler = (event) => {
    if (event.target.textContent === 'INCREMENT') setCounter(counter + 1);
    if (event.target.textContent === 'DECREMENT') setCounter(counter - 1);
    if (event.target.textContent === 'CLOSE') setCounter(0);
  };

  return (
    <div className={CounterStyles.Counter} onClick={clickHandler}>
      <h1>{counter}</h1>
      <Button>INCREMENT</Button>
      <Button>DECREMENT</Button>
      <Modal counter={counter} clickHandler={clickHandler} />
    </div>
  );
};

export default Counter;
