import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import StylesModal from './Modal.module.scss';

const Modal = ({ counter, clickHandler }) => {
  const [isOpenModal, setOpenModal] = useState(false);

  const openFunc = () => {
    if (counter < -5 || counter > 5) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  };

  useEffect(openFunc);

  return isOpenModal ? (
    <div className={StylesModal.modal} onClick={clickHandler}>
      <h2>I`m a modal window!</h2>
      <Button>CLOSE</Button>
    </div>
  ) : null;
};

export default Modal;
