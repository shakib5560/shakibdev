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
                href="https://github.com/shakib5560"
                className="butn butn-sm butn-bord radius-30"
                target="_blank"
                rel="noopener noreferrer"
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
                      JavaScript
                      </a>
                      <a href="/portfolio-grid" className="tag">
                      Express JS
                      </a>
                    </div>
                    <h4>tubeX</h4>
                  </div>
                  <div>
                    <p>
                  An open-source backend REST API for a video sharing platform, built with Node.js, Express, and MongoDB.
                    </p>
                    <a target="_blank" href="https://github.com/shakib5560/tubeX" className="underline mt-15">
                      <span className="text main-color sub-title">
                       View Source Code <FaGithub className='text-white' />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/tubex-min.png" alt="" />
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
                        View Source Code <FaGithub className='text-white' />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/1-min.jpg" alt="" />
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
                      Next Js Full Stack
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        MongoDB
                      </a>
                        <a href="/portfolio-grid" className="tag">
                        Node Js
                      </a>
                    </div>
                    <h4>Rinors.com</h4>
                  </div>
                  <div>
                    <p>
                    A full-stack application built with the Next.js T3 stack. It’s a multi-vendor e-commerce website that handles over 10,000 active users every month.
                    </p>
                    <a target="_blank" href="https://rinors.com/" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Live Website
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/ringo-min.png" alt="" />
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
                      View Source Code <FaGithub className='text-white' />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/2-min.jpg" alt="" />
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
                    <h4>MediTrack (on Construction)</h4>
                  </div>
                  <div>
                    <p>
                    Patients Management system API using FastAPI
                    </p>
                    <a target="_blank" href="https://github.com/shakib5560/MediTrack?tab=readme-ov-file#patients-management-system-api-using-fastapi" className="underline mt-15">
                      <span className="text main-color sub-title">
                      View Source Code<FaGithub className='text-white' />
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
                        FastAPI
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Next JS
                      </a>
                              <a href="/portfolio-grid" className="tag">
                        MongoDB
                      </a>
                    </div>
                    <h4>servicoBD (on Going)</h4>
                  </div>
                  <div>
                    <p>
                   AI-Powered Service Finder
                    </p>
                    <a target="_blank" href="https://github.com/shakib5560/servicoBD_frontend" className="underline mt-15">
                      <span className="text main-color sub-title">
                      View Source Code - Frontend <FaGithub className='text-white' />
                      </span>
                    </a>

                           <a target="_blank" href="https://github.com/shakib5560/servicoBD_backend" className="underline mt-15">
                      <span className="text main-color sub-title">
                      View Source Code - Backend<FaGithub className='text-white' />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/u-min.png" alt="" />
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
                      View Source Code <FaGithub className='text-white' />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/4-min.jpg" alt="" />
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
                      View Source Code <FaGithub className='text-white' />
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


                    <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        C++
                      </a>
                      <a href="/portfolio-grid" className="tag">
                      OPEN AI LLM
                      </a>
                    </div>
                    <h4>career_z</h4>
                  </div>
                  <div>
                    <p>
                    Career_Z is a terminal-based career recommendation system built with C++, powered by the Groq LLM API for generating personalized career suggestions, and integrated with a Neon PostgreSQL database for storing user responses.
                    </p>
                    <a target="_blank" href="https://github.com/shakib5560/career_z" className="underline mt-15">
                      <span className="text main-color sub-title">
                      View Source Code <FaGithub className='text-white' />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/cz-min.png" alt="" />
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
