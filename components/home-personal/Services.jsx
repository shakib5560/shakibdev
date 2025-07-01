import React from 'react';

function Services() {
  return (
    <section className="services-clas">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">My Specialize</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="https://www.linkedin.com/in/sheikh-shamiul-834878206/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View All Services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/22.png" alt="" />
              </div>
              <h5>Backend Development</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Django</span>
                  <span className="tag">FastAPI</span>
                  <span className="tag">Express</span>
                </div>
                <p>
                Python backend development involves building the server-side logic of web applications using Python frameworks like Django or FastAPI to handle requests, manage databases, and serve dynamic content.
                </p>
              </div>
              <a href="https://www.geeksforgeeks.org/backend-development/" target="_blank" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-100 opacity-5 mb-55">
                <img src="/assets/imgs/serv-icons/yy.png" alt="" />
              </div>
              <h5>Frontend Development</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Next.js</span>
                  <span className="tag">React.js</span>
                  <span className="tag">Redux.js</span>
                </div>
                <p>
                Next.js is a React-based framework for building fast, scalable, and SEO-friendly web applications with features like server-side rendering, static site generation, and API routes.
                </p>
              </div>
              <a href="https://www.geeksforgeeks.org/blogs/front-end-development/" target="_blank" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="icon-img-80 opacity-5 mb-50">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <h5>API Development</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">FastAPI</span>
                  <span className="tag">Django Rest Framework</span>
                </div>
                <p>
                REST API development is the process of building web services that allow systems to communicate over HTTP using standard methods like GET, POST, PUT, and DELETE.
                </p>
              </div>
              <a href="https://www.tealhq.com/career-paths/api-developer" target="_blank" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
