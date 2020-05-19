import React from 'react';
import heroStyles from './Hero.module.css';

import { useHistory } from 'react-router';

import { useSelector } from 'react-redux';

const HeroSection = () => {
  const history = useHistory();

  const isAuth = useSelector((state) => state.tokenID !== null);

  const onClickHandler = () => {
    isAuth ? history.push('/dashboard') : history.push('/auth');
  };

  return (
    <section className={heroStyles.Hero}>
      <div className={heroStyles.Container}>
        <div className={heroStyles.HeroWrapper}>
          <div className={heroStyles.HeroContent}>
            <div className={heroStyles.HeroHeading}>
              <div className='pattern-dots-md red text-pattern max-w-20pc overflow-visible'>
                <h1>Ignite Your Presentation Ideas.</h1>
              </div>

              <p>
                Awesome audio Services for your next project. We offer
                voice-overs, audio development and more!
              </p>
            </div>
            <button
              className={heroStyles.HeroCtaButton}
              onClick={onClickHandler}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
