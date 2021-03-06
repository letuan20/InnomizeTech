import React from 'react';
import ReactWOW from 'react-wow';
import { Link } from 'gatsby';
import bannerImg from '../../assets/images/banner-img1.png';

const Banner = () => {
  return (
    <div className="seo-agency-banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="main-banner-content">
              <ReactWOW delay=".1s" animation="fadeInLeft">
                <h1>
                  We provide{' '}
                  <span style={{ color: '#ef3b24' }}>
                    optimized IT solutions
                  </span>{' '}
                  for your business!
                </h1>
              </ReactWOW>

              <ReactWOW delay=".1s" animation="fadeInLeft">
                <p>
                  We experts in Cloud computing, Full Lifecycle Software
                  Development, DevOps Engineering, and Software Integration
                  solutions
                </p>
              </ReactWOW>

              <ReactWOW delay=".1s" animation="fadeInRight">
                <div className="btn-box">
                  <Link to="/services" className="default-btn">
                    <i className="flaticon-right"></i>
                    Our Services <span></span>
                  </Link>
                </div>
              </ReactWOW>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <ReactWOW delay=".1s" animation="fadeInUp">
              <div className="main-banner-image">
                <img src={bannerImg} alt="banner" />
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
