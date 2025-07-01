import React from 'react';

function Blog() {
  return (
    <section className="blog mt-20 style2">
      <div className="container">
        <div className="sec-head mt-20 mb-80">
          <div className="d-flex mt-20 align-items-center">
            <div className='mt-20 pt-50'>
              <span className="sub-title main-color mt-20 mb-5">My Blogs</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Latest <span className="fw-200">Articles</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="https://www.linkedin.com/in/sheikh-shamiul-834878206/recent-activity/articles/"
                target="_blank"
                rel="noopener noreferrer"
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
            <div className="item md-mb50">
              <div className="info sub-title p-color d-flex align-items-center mb-20">
                <div>
                  <a href="/blog-grid-sidebar">By : Shakib</a>
                </div>
                <div className="ml-30">
                  <a href="/blog-grid-sidebar">December 9, 2024</a>
                </div>
              </div>
              <div className="img fit-img">
                <img src="/assets/imgs/blog/1st.jpeg" alt="" />
              </div>
              <div className="cont pt-30">
                <h5>FastAPI vs. Express.js: A Future-Oriented Perspective</h5>
                <a
                  href="https://www.linkedin.com/pulse/fastapi-vs-expressjs-future-oriented-perspective-sheikh-shamiul-c0mpc/?trackingId=CS0R1ALkQlqB6Mn%2FOPP0HQ%3D%3D"
                  className="butn-crev d-flex align-items-center mt-30"
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  <span className="hover-this">
                    <span className="circle hover-anim">
                      <i className="ti-arrow-top-right"></i>
                    </span>
                  </span>
                  <span className="text">Read more</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="info sub-title p-color d-flex align-items-center mb-20">
                <div>
                  <a href="/blog-grid-sidebar">By : Shakib</a>
                </div>
                <div className="ml-30">
                  <a href="/blog-grid-sidebar">November 29, 2024</a>
                </div>
              </div>
              <div className="img fit-img">
                <img src="/assets/imgs/blog/1732821105546.png" alt="" />
              </div>
              <div className="cont pt-30">
                <h5>React + Django: The Power Duo Dominating Web Development</h5>
                <a
                  href="https://www.linkedin.com/pulse/react-django-power-duo-dominating-web-development-sheikh-shamiul-fdtrc/?trackingId=CS0R1ALkQlqB6Mn%2FOPP0HQ%3D%3D"
                  className="butn-crev d-flex align-items-center mt-30"
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  <span className="hover-this">
                    <span className="circle hover-anim">
                      <i className="ti-arrow-top-right"></i>
                    </span>
                  </span>
                  <span className="text">Read more</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="info sub-title p-color d-flex align-items-center mb-20">
                <div>
                  <a href="/blog-grid-sidebar">By : Shakib</a>
                </div>
                <div className="ml-30">
                  <a href="/blog-grid-sidebar">May 2, 2025</a>
                </div>
              </div>
              <div className="img fit-img">
                <img src="/assets/imgs/blog/1746206989253.png" alt="" />
              </div>
              <div className="cont pt-30">
                <h5>From Go to TypeScript: A Strategic Rewrite for the Modern Development Era</h5>
                <a
                  href="https://www.linkedin.com/pulse/from-go-typescript-strategic-rewrite-modern-era-sheikh-shamiul-ctu4c/?trackingId=CS0R1ALkQlqB6Mn%2FOPP0HQ%3D%3D"
                  className="butn-crev d-flex align-items-center mt-30"
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  <span className="hover-this">
                    <span className="circle hover-anim">
                      <i className="ti-arrow-top-right"></i>
                    </span>
                  </span>
                  <span className="text">Read more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
