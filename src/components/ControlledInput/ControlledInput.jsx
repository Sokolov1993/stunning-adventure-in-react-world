import React, { useState } from 'react';

const ControlledInput = () => {
  const [value, setValue] = useState('');

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  const onSubmitHandler = () => {
    console.log(value);
    setValue('');
  };

  return (
    <div>
      <input type="text" onChange={onChangeHandler} value={value} />

      <button onClick={onSubmitHandler}>Click</button>
    </div>
  );
};

export default ControlledInput;
