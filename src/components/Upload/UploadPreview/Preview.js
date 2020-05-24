import React from 'react';

import ReactAudioPlayer from 'react-audio-player';
import styles from './Preview.module.css';

const Preview = (props) => {
  const { files } = props;
  return (
    <div className={files ? styles.PreviewContainer : styles.HidePreview}>
      {props.files &&
        files.map((file) => {
          return (
            <div className={styles.Preview}>
              <p>{file.name}</p>
              <ReactAudioPlayer src={file.preview} controls />
            </div>
          );
        })}
    </div>
  );
};

export default Preview;
