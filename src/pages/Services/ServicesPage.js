import React from 'react';
import { useToasts } from 'react-toast-notifications';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import NavLarge from '../../components/Navbar_Large/NavLarge';
import Footer from '../../layouts/Footer/Footer';
import NewsLetter from '../../layouts/NewsLetter/Newsletter';
import BookingsModal from '../../components/Modal/BookingsModal';
import styles from './Services.module.css';
import IntroText from '../../components/IntroText/IntroText';
import Layout from '../../layouts/Layout';
import BookingForm from '../../components/BookingForm/BookingForm';

const ServicesPage = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const { addToast } = useToasts();
  const history = useHistory();

  const isAuth = useSelector((state) => state.tokenID);

  function openModal() {
    if (isAuth) {
      setIsOpen(true);
    } else {
      addToast('You need to login to continue', {
        appearance: 'error',
      });

      history.push('/auth');
    }
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Layout>
      <NavLarge title='Our Services.' />
      <div className={styles.MainSection}>
        <IntroText
          body='The finest presentations have a strong point of view. They distill
          complex information and grab our attention with effective visuals.
          Yet, after working with thousands of clients, we’ve learned that above
          all, persuasive presenters deliver messages that matter to their
          audiences. Let us help you resonate.'
        />
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
            <button onClick={openModal} className={styles.Button}>
              Book Service
            </button>
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
            <button onClick={openModal} className={styles.Button}>
              Book Service
            </button>
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
            <button onClick={openModal} className={styles.Button}>
              Book Service
            </button>
          </div>
          <div className={styles.Image}>
            <img src='https://www.musictech.net/wp-content/uploads/2019/01/creative-sound-design-tips-header@1400x1050.jpg' />
          </div>
        </div>
      </div>
      <BookingsModal
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
      >
        <BookingForm closeModal={closeModal} />
        </BookingsModal>
      <NewsLetter />
      <Footer />
    </Layout>
  );
};

export default ServicesPage;
