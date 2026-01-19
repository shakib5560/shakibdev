"use client";
import React from 'react';
import { GlowingEffect } from "@/components/ui/GlowingEffect";

const SpotlightItem = ({ children, className = "" }) => {
  return (
    <div className={`relative h-full rounded-2xl p-0.5 md:rounded-3xl ${className}`}>
      <GlowingEffect
        blur={0}
        borderWidth={3}
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="relative h-full flex flex-col justify-between overflow-hidden rounded-xl bg-[#0E0E0E] p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
        {children}
      </div>
    </div>
  );
};

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

          <div className="col-lg-4 mb-30">
            <SpotlightItem className="">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/22.png" alt="" />
              </div>
              <h5>Backend Development</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Django</span>
                  <span className="tag">Express.js</span>
                  <span className="tag">FastAPI</span>
                  <span className="tag">T3-Stack</span>
                </div>
                <p>
                  I design and build secure backend systems that power modern web applications. From authentication and business logic to database design and performance optimization, I focus on clean architecture, scalability, and maintainability—so your app works flawlessly as it grows.
                </p>
              </div>
              <a href="https://www.geeksforgeeks.org/backend-development/" target="_blank" className="mt-40 block">
                <span className="ti-arrow-top-right"></span>
              </a>
            </SpotlightItem>
          </div>

          <div className="col-lg-4 mb-30">
            <SpotlightItem className="">
              <div className="icon-img-100 opacity-5 mb-55">
                <img src="/assets/imgs/serv-icons/yy.png" alt="" />
              </div>
              <h5>Frontend Development</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Next.js</span>
                  <span className="tag">React.js</span>
                  <span className="tag">Redux.js</span>
                  <span className="tag">Tailwind</span>
                </div>
                <p>
                  I create high-performance, SEO-friendly frontends with smooth user experiences. Using modern React and Next.js features like server-side rendering and static generation, I turn ideas into responsive, pixel-perfect interfaces that users love to interact with.
                </p>
              </div>
              <a href="https://www.geeksforgeeks.org/blogs/front-end-development/" target="_blank" className="mt-40 block">
                <span className="ti-arrow-top-right"></span>
              </a>
            </SpotlightItem>
          </div>

          <div className="col-lg-4 mb-30">
            <SpotlightItem className="">
              <div className="icon-img-80 opacity-5 mb-50">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <h5>REST API Development</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">FastAPI</span>
                  <span className="tag">Express.js</span>
                  <span className="tag">Django Rest Framework</span>
                </div>
                <p>
                  I build RESTful APIs that are easy to integrate, scalable, and secure. With proper validation, authentication, and documentation, my APIs ensure seamless communication between frontend, backend, and third-party services—built for real-world production use.
                </p>
              </div>
              <a href="https://www.tealhq.com/career-paths/api-developer" target="_blank" className="mt-40 block">
                <span className="ti-arrow-top-right"></span>
              </a>
            </SpotlightItem>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;