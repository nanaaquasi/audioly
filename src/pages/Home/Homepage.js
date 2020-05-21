import React from 'react';

import Showcase from '../../layouts/what-we-offer/Showcase';
import HeroSection from '../../layouts/Hero/HeroSection';
import Testimony from '../../layouts/Testimony/Testimony';
import Newsletter from '../../layouts/NewsLetter/Newsletter';
import Footer from '../../layouts/Footer/Footer';
import SampleSection from '../../layouts/Sample/SampleSection';
import ClientSection from '../../layouts/Clients/ClientSection';
import Layout from '../../layouts/Layout';

const Homepage = () => {
  return (
    <Layout>
      <HeroSection />
      <Showcase />
      <SampleSection />
      <Testimony />
      <ClientSection />
      <Newsletter />
      <Footer />
    </Layout>
  );
};

export default Homepage;
