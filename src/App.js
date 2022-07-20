import React from 'react';
import ControlledInput from './components/ControlledInput/ControlledInput';
import TestForm from './components/TestForm/TestForm';
import UncontrolledInput from './components/UncontrolledInput/UncontrolledInput';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <ControlledInput />
      <UncontrolledInput />
      {/* <TestForm /> */}
      <Users />
    </div>
  );
}

export default App;
