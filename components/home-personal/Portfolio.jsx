'use client';
import React, { useEffect } from 'react';
import { FaGithub } from "react-icons/fa";

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Featured Projects</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Selected <span className="fw-200">Works.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/portfolio-grid"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                      Vanilla JS
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Django
                      </a>
                    </div>
                    <h4>ToyGalaxy</h4>
                  </div>
                  <div>
                    <p>
                    Developed a full-stack eCommerce platform using Django and JavaScript, enabling seamless product browsing, user
                    authentication, and order management.
                    </p>
                    <a target="_blank" href="https://github.com/shakib5560/ToyGalaxy" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <FaGithub className='text-white' />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        React.js
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Express.js
                      </a>
                    </div>
                    <h4>CarHub</h4>
                  </div>
                  <div>
                    <p>
                    Completed the frontend for CarHub multi-vendor website where users can submit, edit, and remove their products.
                    </p>
                    <a target="_blank" href="https://github.com/shakib5560/CarHub-Multi-Vendor-eCommerce-website-by-React-TS" className="underline mt-15">
                      <span className="text main-color sub-title">
                      View Details <FaGithub className='text-white' />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        FastAPI
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        MYSQL
                      </a>
                    </div>
                    <h4>MediTrack</h4>
                  </div>
                  <div>
                    <p>
                    Patients Management system API using FastAPI
                    </p>
                    <a target="_blank" href="https://github.com/shakib5560/MediTrack?tab=readme-ov-file#patients-management-system-api-using-fastapi" className="underline mt-15">
                      <span className="text main-color sub-title">
                      View Details <FaGithub className='text-white' />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Django
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Next.js
                      </a>
                    </div>
                    <h4>List-Live
                    </h4>
                  </div>
                  <div>
                    <p>
                    LIST & LIVE will be the most powerful and visually stunning real estate multi-vendor platform in Bangladesh.
                    </p>
                    <a target="_blank" href="https://github.com/shakib5560/List-Live" className="underline mt-15">
                      <span className="text main-color sub-title">
                      View Details <FaGithub className='text-white' />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        React.js
                      </a>
                      <a href="/portfolio-grid" className="tag">
                      CloudFlare
                      </a>
                    </div>
                    <h4>FoodSvaly</h4>
                  </div>
                  <div>
                    <p>
                    FoodSvaly – an intuitive, modern, and responsive food delivery platform where users can browse and order delicious dishes from various restaurants.
                    </p>
                    <a target="_blank" href="https://github.com/shakib5560/FoodSvaly" className="underline mt-15">
                      <span className="text main-color sub-title">
                      View Details <FaGithub className='text-white' />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/5.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            More than <span className="fw-600"> 10+ companies</span>
            trusted us worldwide
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
