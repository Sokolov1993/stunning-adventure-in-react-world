import React from 'react';

import ButtonStyles from './Button.module.scss';

const Button = ({ children, onClick }) => {
  let styleName;

  switch (children) {
    case 'INCREMENT':
      styleName = 'redButton';
      break;
    case 'DECREMENT':
      styleName = 'blueButton';
      break;
    case 'CLOSE':
      styleName = 'purpleButton';
      break;
  }

  return (
    <button onClick={onClick} className={ButtonStyles[styleName]}>
      {children}
    </button>
  );
};

export default Button;
