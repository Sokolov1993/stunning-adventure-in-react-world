import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef();

  const onClickHandler = () => {
    console.log(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onClickHandler}>Click</button>
    </div>
  );
};

export default UncontrolledInput;
