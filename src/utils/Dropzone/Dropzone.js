import React, { useCallback, useMemo, useState, useEffect } from 'react';

import { useDropzone } from 'react-dropzone';

import styles from './Dropzone.module.css';
import Preview from '../../components/Upload/UploadPreview/Preview';
import { ReactComponent as Icon } from '../../assets/upload.svg';

import { useToasts } from 'react-toast-notifications';

const FileUploader = (props) => {
  const [files, setFiles] = useState();

  const { addToast } = useToasts();

  const onDropHandler = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  useEffect(
    () => () => {
      if (files) {
        files.forEach((file) => URL.revokeObjectURL(file.preview));
      }
    },
    [files]
  );

  const {
    getInputProps,
    getRootProps,
    isDragActive,
    isDragReject,
    isDragAccept,
  } = useDropzone({
    onDrop: onDropHandler,
    multiple: true,
  });

  let style;

  if (isDragAccept) {
    style = styles.AcceptStyles;
  } else if (isDragActive) {
    style = styles.ActiveStyles;
  } else if (isDragReject) {
    style = styles.RejectStyles;
  } else {
    style = styles.Input;
  }

  const onclickHandler = () => {
    props.closeModal();
    addToast('Uploaded Succesfully', {
      appearance: 'success',
    });
  };

  return (
    <section className={styles.Container}>
      <div {...getRootProps({ className: style })}>
        <input {...getInputProps({ className: style })} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <div className={styles.Layout}>
            <Icon className={styles.Icon} />
            <span>Drag and drop files here or click to select files</span>
          </div>
        )}
      </div>
      <Preview files={files} />
      <button className={styles.UploadButton} onClick={onclickHandler}>
        Upload
      </button>
    </section>
  );
};

export default FileUploader;
