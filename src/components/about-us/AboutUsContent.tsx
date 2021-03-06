import React from 'react';
import aboutImage from '../../assets/images/about/about-img5.png';
import starIcon from '../../assets/images/star-icon.png';
import icon4 from '../../assets/images/icons/icon4.png';
import icon5 from '../../assets/images/icons/icon5.png';
import icon6 from '../../assets/images/icons/icon6.png';
import icon7 from '../../assets/images/icons/icon7.png';
import shape1 from '../../assets/images/shape/circle-shape1.png';

const AboutUsContent = () => {
  return (
    <section className="about-area ptb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img src={aboutImage} alt="banner" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="content">
                <span className="sub-title">
                  <img src={starIcon} alt="banner" />
                  About Us
                </span>
                <h2>Your Business Success Starts With Us</h2>
                <p>
                  We are an offshore software development and IT consulting
                  company based in Vietnam, we create a workspace where value is
                  even more optimized.
                </p>

                <ul className="features-list">
                  <li>
                    <img src={icon4} alt="banner" />
                    <h3>15 Years</h3>
                    <p>Experiences</p>
                  </li>
                  <li>
                    <img src={icon5} alt="banner" />
                    <h3>15+ Years</h3>
                    <p>Cloud Computing</p>
                  </li>
                  <li>
                    <img src={icon6} alt="banner" />
                    <h3>100%</h3>
                    <p>Satisfaction rate</p>
                  </li>
                  <li>
                    <img src={icon7} alt="banner" />
                    <h3>80%</h3>
                    <p>Senior Engineers</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-shape1">
        <img src={shape1} alt="banner" />
      </div>

      <div className="container">
        <div className="about-inner-area">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our Working Styles</h3>
                <p>We are unique in every way</p>

                <ul className="features-list">
                  <li>
                    <i className="flaticon-tick"></i> Activate Listening
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Brilliant minds
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Better. Best. Wow!
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Branding it better!
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our Obsession</h3>
                <p>We are obsessed with our customer's success.</p>

                <ul className="features-list">
                  <li>
                    <i className="flaticon-tick"></i> Creating. Results.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Expect more
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Good thinking
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> In real we trust
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="about-text">
                <h3>Our Communication</h3>
                <p>We are the heart of successful communication.</p>

                <ul className="features-list">
                  <li>
                    <i className="flaticon-tick"></i> Stay real. Always.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> We have you covered
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> We turn heads
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Your brand, promoted
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-shape1">
        <img src={shape1} alt="banner" />
      </div>
    </section>
  );
};

export default AboutUsContent;
