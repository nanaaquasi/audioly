import React from 'react';

import styles from './Sample.module.css';
import { audioSamples } from '../../mock';
import ReactAudioPlayer from 'react-audio-player';

const SampleSection = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.SampleHeading}>
        <h2>Our Works</h2>
      </div>
      <div className={styles.SampleContent}>
        <h3>Here are some of audio samples.</h3>
        <div className={styles.SampleLayout}>
          {audioSamples
            .map((audio) => {
              return (
                <AudioPlayer
                  title={audio.title}
                  description={audio.description}
                  image={audio.image}
                  audio={audio.audioFile}
                  key={audio.id}
                />
              );
            })
            .slice(0, 2)}
        </div>
      </div>
    </div>
  );
};

const audioPlayerStyles = {
  width: '70%',
  boxShadow: '0px 4px 0px #c79e57 !important',
};

export const AudioPlayer = (props) => {
  return (
    <div className={styles.AudioSection}>
      <div className={styles.AudioImage}>
        <img src={props.image} />
      </div>
      <div className={styles.AudioPlayer}>
        <h2>
          <span>Advertiser:</span> {props.title}
        </h2>
        <p>{props.description}</p>
        <ReactAudioPlayer
          src={props.audio}
          controls
          style={audioPlayerStyles}
        />
      </div>
    </div>
  );
};

export default SampleSection;
