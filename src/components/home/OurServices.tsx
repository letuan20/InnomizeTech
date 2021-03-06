import React from 'react';
import service1 from '../../assets/images/services/service1.png';
import service2 from '../../assets/images/services/service2.png';
import service3 from '../../assets/images/services/service3.png';
import service4 from '../../assets/images/services/service4.png';
import starIcon from '../../assets/images/star-icon.png';

const OurServices = () => {
  return (
    <React.Fragment>
      {/* Service Left Image Style */}
      <div className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img src={service1} alt="service" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="icon" /> Services
                  </span>

                  <h2>Cloud Computing</h2>
                  <p>
                    Our certified cloud architects/developers provide
                    cutting-edge designs to build cloud-based and hybrid
                    applications.
                  </p>
                  <ul className="about-list mb-0">
                    <li>
                      <i className="flaticon-tick"></i>
                      Serverless Computing
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Cloud Consulting
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Cloud Migration
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Cloud Optimization
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Cloud Integration
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      DevSecOps
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Left Image Style */}

      {/* Service Right Image Style */}
      <div className="our-mission-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="our-mission-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="icon" /> Services
                  </span>

                  <h2>Software Development</h2>
                  <p>
                    Full Software Development Life Cycle from requirement
                    analysis, design, coding, testing, deployment, maintenance
                    and supporting.
                  </p>

                  <ul className="our-mission-list mb-0">
                    <li>
                      <i className="flaticon-tick"></i>
                      Web Development
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Mobile Development
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Product Migration
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Platform Optimizing
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      UX/UI Design
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Software Integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="our-mission-image">
                <img src={service4} alt="service" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Right Image Style */}

      {/* Service Left Image Style */}
      <div className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img src={service2} alt="service" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="icon" /> Services
                  </span>

                  <h2>Dedicated Development Team</h2>
                  <p>
                    We offer you specific teams for your specific needs. We
                    assign a customise skill set to each client so that the
                    project gets complete dedication and required attention.
                  </p>
                  <ul className="about-list mb-0">
                    <li>
                      <i className="flaticon-tick"></i>
                      In-house control level resources
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Wide range of technology expertise
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      No recruitment costs
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Scalable resources
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Bring fresh ideas to you and your own in-house IT
                      department
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Free up your IT department to focus on critical tasks
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Left Image Style */}

      {/* Service Right Image Style */}
      <div className="our-mission-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="our-mission-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="icon" /> Services
                  </span>

                  <h2>Enterprise Solutions </h2>
                  <p>
                    We work toward your business objectives, help you move fast
                    and in the right direction. Our highly skilled engineers are
                    ready to consult, customize, integrate your existing
                    enterprise systems.
                  </p>

                  <ul className="our-mission-list mb-0">
                    <li>
                      <i className="flaticon-tick"></i>
                      Optimized Solutions: ERP, CRM, HRM
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Odoo Installation and Customization
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Enterprise Integration
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      E-commerce Integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="our-mission-image">
                <img src={service3} alt="service" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Right Image Style */}
    </React.Fragment>
  );
};

export default OurServices;
