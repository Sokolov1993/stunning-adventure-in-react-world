import React, { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import CounterStyles from './Counter.module.scss';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onClickCloseHandler = () => {
    setCounter(0);
  };

  const onClickIncrementHandler = () => {
    setCounter(counter + 1);
  };

  const onClickDecrementHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <div className={CounterStyles.Counter}>
      <h1>{counter}</h1>
      <Button onClick={onClickIncrementHandler}>INCREMENT</Button>
      <Button onClick={onClickDecrementHandler}>DECREMENT</Button>
      <Modal counter={counter} clickHandler={onClickCloseHandler} />
    </div>
  );
};

export default Counter;
