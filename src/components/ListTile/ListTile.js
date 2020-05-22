import React from 'react';

import ReactAudioPlayer from 'react-audio-player';
import styles from './ListTile.module.css';

const audioPlayerStyles = {
  width: '85%',

  boxShadow: 'none',
};

const ListTile = (props) => {
  let statusStyle;
  switch (props.status) {
    case 'Active':
      statusStyle = styles.Green;
      break;
    case 'Waiting for Verification':
      statusStyle = styles.Yellow;
      break;
    case 'Completed':
      statusStyle = styles.DefaultColor;
      break;
    default:
      statusStyle = styles.Black;
      break;
  }

  return (
    <>
      <div className={styles.Tile}>
        <div className={styles.project}>
          <div className={styles.Preview}>
            <img src={props.image} alt={props.title} />
          </div>
          <p>{props.title}</p>
        </div>
        <div className={styles.audio}>
          <ReactAudioPlayer
            src={props.audio}
            controls
            style={audioPlayerStyles}
          />
        </div>
        <div className={styles.date}>
          <p>{props.date}</p>
        </div>
        <div className={styles.status}>
          <p className={statusStyle}>{props.status}</p>
        </div>
      </div>
    </>
  );
};

export default ListTile;
