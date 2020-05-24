import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import styles from './Modal.module.css';
import BookingForm from '../BookingForm/BookingForm';

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const BookingsModal = (props) => {
  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onAfterOpen={props.afterOpenModal}
        onRequestClose={props.closeModal}
        style={customStyles}
        overlayClassName={styles.Modal}
        contentLabel='Example Modal'>
        <div className={styles.ModalBody}>{props.children}</div>
      </Modal>
    </div>
  );
};

export default BookingsModal;
