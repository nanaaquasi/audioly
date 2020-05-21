import React from 'react';
import NavLarge from '../../components/Navbar_Large/NavLarge';
import Footer from '../../layouts/Footer/Footer';
import NewsLetter from '../../layouts/NewsLetter/Newsletter';
import { AudioPlayer } from '../../layouts/Sample/SampleSection';
import IntroText from '../../components/IntroText/IntroText';

import { audioSamples } from '../../mock';

import styles from './Portfolio.module.css';
import sampleStyles from '../../layouts/Sample/Sample.module.css';

import hyperLoopCase from '../../assets/case_study_1.jpg';
import pirchCase from '../../assets/pirch_Case_Study_3.jpg';
import gainSightCase from '../../assets/case_study_4.jpeg';
import hersheyCase from '../../assets/case_study_2.jpg';
import Layout from '../../layouts/Layout';

const PortfolioPage = () => {
  return (
    <Layout>
      <NavLarge title='Our Works.' />
      <IntroText body='We’re fortunate to have worked with the biggest brands and leaders in the industry. From life-changing technologies to philanthropists improving the public good, world leaders who, well, lead the world—we have had the privilege of helping some of the most talented people spread their ideas. Our projects are often confidential so we can’t show you everything, but take a look at some of our favorite projects.' />
      <div className={styles.Divider}>
        <div className={styles.Heading}>
          <h1>Some of What We Made.</h1>
        </div>
      </div>
      <div className={styles.FilterSection}>
        <div className={styles.filter}></div>
      </div>
      <section className={styles.Portfolio}>
        <div className={styles.PortfolioImage}>
          <img src={hyperLoopCase} alt='HyperLoop Case Study' />
        </div>
        <div className={styles.PortfolioContent}>
          <h2>Case Study</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            atque minus asperiores, odio velit et nobis ex aut nisi quia, animi
            incidunt similique omnis fugit officia dignissimos consequatur.
            <br />
            <br />
            Inventore at iste, facilis voluptatum aspernatur voluptatibus ipsum
            provident accusantium tempore harum corporis explicabo esse
            exercitationem magnam qui possimus nulla nihil sit?
          </p>
          <button className={styles.CaseButton}>View Case Study</button>
        </div>
      </section>
      <section className={styles.Portfolio}>
        <div className={styles.PortfolioContent}>
          <h2>Case Study</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            atque minus asperiores, odio velit et nobis ex aut nisi quia, animi
            incidunt similique omnis fugit officia dignissimos consequatur.
            <br />
            <br />
            Inventore at iste, facilis voluptatum aspernatur voluptatibus ipsum
            provident accusantium tempore harum corporis explicabo esse
            exercitationem magnam qui possimus nulla nihil sit?
          </p>
          <button className={styles.CaseButton}>View Case Study</button>
        </div>
        <div className={styles.PortfolioImage}>
          <img src={pirchCase} alt='Pirch Case Study' />
        </div>
      </section>
      <section className={styles.Portfolio}>
        <div className={styles.PortfolioImage}>
          <img src={hersheyCase} alt='Hershey Case Study' />
        </div>
        <div className={styles.PortfolioContent}>
          <h2>Case Study</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            atque minus asperiores, odio velit et nobis ex aut nisi quia, animi
            incidunt similique omnis fugit officia dignissimos consequatur.
            <br />
            <br />
            Inventore at iste, facilis voluptatum aspernatur voluptatibus ipsum
            provident accusantium tempore harum corporis explicabo esse
            exercitationem magnam qui possimus nulla nihil sit?
          </p>
          <button className={styles.CaseButton}>View Case Study</button>
        </div>
      </section>
      <section className={styles.Portfolio}>
        <div className={styles.PortfolioContent}>
          <h2>Case Study</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            atque minus asperiores, odio velit et nobis ex aut nisi quia, animi
            incidunt similique omnis fugit officia dignissimos consequatur.
            Inventore at iste
            <br />
            <br />
            Inventore at iste, facilis voluptatum aspernatur voluptatibus ipsum
            provident accusantium tempore harum corporis explicabo esse
            exercitationem magnam qui possimus nulla nihil sit?
          </p>
          <button className={styles.CaseButton}>View Case Study</button>
        </div>
        <div className={styles.PortfolioImage}>
          <img src={gainSightCase} alt='Gainsight Case Study' />
        </div>
      </section>
      <div className={sampleStyles.Container}>
        <div className={sampleStyles.SampleContent}>
          <h1
            style={{
              textAlign: 'center',
              fontSize: '6rem',
              fontWeight: '900',
            }}>
            Audio Samples from Case Studies.
          </h1>
          <div className={sampleStyles.SampleLayout}>
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
              .reverse()}
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </Layout>
  );
};

export default PortfolioPage;
