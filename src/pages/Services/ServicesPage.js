import React from 'react';
import NavLarge from '../../components/Navbar_Large/NavLarge';
import Footer from '../../layouts/Footer/Footer';

import NewsLetter from '../../layouts/NewsLetter/Newsletter';

import styles from './Services.module.css';

const ServicesPage = () => {
  return (
    <div>
      <NavLarge title='Our Services.' />
      <div className={styles.MainSection}>
        <div className={styles.IntroText}>
          <p>
            The finest presentations have a strong point of view. They distill
            complex information and grab our attention with effective visuals.
            Yet, after working with thousands of clients, we’ve learned that
            above all, persuasive presenters deliver messages that matter to
            their audiences. Let us help you resonate.
          </p>
        </div>
        <div className={styles.AudioDev}>
          <div className={styles.Content}>
            <div className={styles.ContentHeading}>
              <h1>Audio Development.</h1>
            </div>
            <div className={styles.ContentBody}>
              <p>
                This is your big moment. Whether you’re preparing for a keynote,
                a TED-style talk, a launch event, or a breakout session, we’ll
                help you create a story-driven, cinematic presentation that’ll
                amaze your audience and move them to spread your message.
              </p>
            </div>
            <button className={styles.Button}>Book Service</button>
          </div>
          <div className={styles.Image}>
            <img src='https://thenextscoop.com/wp-content/uploads/2019/06/audio-1280x720.jpg' />
          </div>
        </div>
        <div className={styles.AudioDev}>
          <div className={styles.Image}>
            <img src='https://mastertcloc.unistra.fr/wp-content/uploads/2017/12/alphacolor-13-181701-1080x675.jpg' />
          </div>
          <div className={styles.Content}>
            <div className={styles.ContentHeading}>
              <h1>Audio Branding.</h1>
            </div>
            <div className={styles.ContentBody}>
              <p>
                Whether you’re announcing a bold new vision or building momentum
                for an existing one, you’ll need to rally people to make your
                dream a reality. Our strategy team will help your movement
                succeed with clear, compelling messages, and practical yet
                clever communication plans.
              </p>
            </div>
            <button className={styles.Button}>Book Service</button>
          </div>
        </div>

        <div className={styles.AudioDev}>
          <div className={styles.Content}>
            <div className={styles.ContentHeading}>
              <h1>Media and Entertainment.</h1>
            </div>
            <div className={styles.ContentBody}>
              <p>
                Make it easy for every presenter in your company to make an
                impression. If you’re obsessed with projecting a consistent
                brand identity (like we are), you know your employees need more
                than a single template to make that happen. Help your team
                convey their ideas without breaking your brand by giving them a
                set of templates for every presentation type.
              </p>
            </div>
            <button className={styles.Button}>Book Service</button>
          </div>
          <div className={styles.Image}>
            <img src='https://www.musictech.net/wp-content/uploads/2019/01/creative-sound-design-tips-header@1400x1050.jpg' />
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ServicesPage;
