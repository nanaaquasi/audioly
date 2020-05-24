import React from 'react';

import { ReactComponent as AddIcon } from '../../assets/add.svg';
import styles from './Opener.module.css';
import BookingsModal from '../Modal/BookingsModal';
import BookingForm from '../BookingForm/BookingForm';
import FileUploader from '../../utils/Dropzone/Dropzone';

const UploadOpener = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className={styles.Button} onClick={openModal}>
        Add New
        <AddIcon />
      </button>
      <BookingsModal
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}>
        <FileUploader closeModal={closeModal} />
      </BookingsModal>
    </div>
  );
};

export default UploadOpener;
