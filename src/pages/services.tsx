import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/app/Layout';
import Navbar from '../components/app/Navbar';
import Footer from '../components/app/Footer';
import PageBanner from '../components/common/PageBanner';
import StartProject from '../components/common/StartProject';
import OurServices from '../components/home/OurServices';

const Services = () => {
  return (
    <Layout>
      <SEO />
      <Navbar />
      <PageBanner
        pageTitle="Services"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Services"
      />
      <OurServices />
      <StartProject />
      <Footer />
    </Layout>
  );
};

export default Services;
