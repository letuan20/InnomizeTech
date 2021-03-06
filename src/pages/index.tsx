import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Navbar from '../components/app/Navbar';
import Footer from '../components/app/Footer';
import Layout from '../components/app/Layout';
import Banner from '../components/home/Banner';
import Partner from '../components/common/Partner';
import OurSolutions from '../components/home/OurSolutions';
import OurServices from '../components/home/OurServices';
import TeamMember from '../components/common/TeamMember';
import Testimonials from '../components/common/Testimonials';
import RecentProjects from '../components/home/RecentProjects';
import ProjectStartArea from '../components/home/ProjectStartArea';
import OurBlog from '../components/home/OurBlog';

const Home = () => {
  return (
    <Layout>
      <SEO />
      <Navbar />
      <Banner />
      <OurSolutions />
      <OurServices />
      <TeamMember />
      <RecentProjects />
      <Testimonials />
      <Partner />
      <OurBlog />
      <ProjectStartArea />
      <Footer />
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
