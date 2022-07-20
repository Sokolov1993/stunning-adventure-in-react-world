import React, { useState } from 'react';

const TestForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [learnsReact, setLearnsReact] = useState(false);

  const nameOnChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageOnChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const learnsReactOnChangeHandler = (event) => {
    setLearnsReact(event.target.checked);
  };

  const data = {
    name,
    age,
    learnsReact,
  };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={formOnSubmitHandler}>
      <label>
        <span>Name:</span>{' '}
        <input type="text" value={name} onChange={nameOnChangeHandler} />
      </label>

      <label>
        <span>Age:</span>{' '}
        <input type="number" value={age} onChange={ageOnChangeHandler} />
      </label>

      <label>
        <span>Learn React</span>{' '}
        <input
          type="checkbox"
          checked={learnsReact}
          onChange={learnsReactOnChangeHandler}
        />
      </label>

      <button type="submit">Click</button>
    </form>
  );
};

export default TestForm;
