'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import { FaGithub } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import MagneticButton from '@/components/common/MagneticButton';

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    if (!mobile) {
      const tl = gsap.timeline();
      tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
      tl.fromTo(
        '.header .container',
        { opacity: 0, translateY: 40 },
        { opacity: 1, translateY: 0 },
        '-=0'
      );
      return () => tl.kill();
    }
  }, []);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <>
      <div
        className="header header-personal valign bg-img"
        data-background="/assets/imgs/header/p0-min.jpg"
        data-overlay-dark="2"
      >
        <div className="container ontop">
          <div className="row">
            <div className="col-lg-7">
              <div className="caption">
                <h6 className="mb-15">
                  <span className="icon-img-30 mr-10">
                    <img src="/assets/imgs/header/hi.png" alt="" />
                  </span>{' '}
                  Available ...!
                </h6>
                <h1 className="fw-700 mb-10 flex items-center responsive-h1">
                  I&apos;m{' '}
                  {isMobile ? (
                    // Plain text on mobile — no per-character animation overhead
                    <span className="inline-block ml-2">
                      {" Shamiul Shakib".split("").map((char, index) => (
                        <span
                          key={index}
                          className={`inline-block ${index >= 8 ? "main-color" : ""}`}
                        >
                          {char === " " ? "\u00A0" : char}
                        </span>
                      ))}
                    </span>
                  ) : (
                    <motion.span
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 2 } }
                      }}
                      className="inline-block ml-2"
                    >
                      {" Shamiul Shakib".split("").map((char, index) => (
                        <motion.span
                          key={index}
                          variants={{
                            hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
                            visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                          }}
                          className={`inline-block ${index >= 8 ? "main-color" : ""}`}
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </motion.span>
                  )}
                </h1>
                <h3 className="responsive-h3">Software Engineer</h3>
                <div className="row">
                  <div className="col-lg-9">
                    <div className="text mt-30">
                      <p className="main-color text-[20px] text-600 responsive-p">
                        BSC (BTech) in CSE | Full Stack Web Developer | Cloud Engineering Enthusiast | Quick Learner | Fluent communicator | Empowering Businesses to Stand Out—Through the Power of Code.
                      </p>
                    </div>
                    <div className="d-flex gap-2 align-items-center mt-60 flex-wrap">
                      <MagneticButton
                        href="https://drive.google.com/file/d/1vR03EPZxzrd2GBHSK_smDaOXRAhVBOmt/view?usp=sharing"
                        className="butn butn-md butn-bord radius-30"
                      >
                        <span className="text flex gap-2"> <span>Resume </span> <span> <FaGoogleDrive /> </span> </span>
                      </MagneticButton>
                      <MagneticButton
                        href="https://github.com/shakib5560"
                        className="butn butn-md butn-bord main-colorbg radius-30"
                      >
                        <span className="text flex gap-2"><span className='text-black'>GitHub</span><span className='text-black'><FaGithub /></span></span>
                      </MagneticButton>
                      <div className="icon-img-60 ml-20">
                        <img
                          src="/assets/imgs/icon-img/arrow-down-big.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="info d-flex align-items-center justify-content-end mt-100 flex-wrap gap-4 responsive-info">
              <div className="item">
                <h6 className="sub-title mb-10">Email :</h6>
                <span className="p-color">dev.shakib@outlook.com</span>
              </div>
              <div className="item">
                <h6 className="sub-title mb-10">Phone :</h6>
                <span className="p-color">+8801990668674</span>
              </div>
              <div className="item">
                <h6 className="sub-title mb-10">Address :</h6>
                <span className="p-color">Mirpur, Dhaka, Bangladesh</span>
              </div>
            </div>

            <style jsx>{`
          @media (max-width: 768px) {
            .responsive-h1 {
              font-size: 28px !important;
              flex-wrap: wrap;
            }
            .responsive-h3 {
              font-size: 20px !important;
            }
            .responsive-p {
              font-size: 16px !important;
            }
            .responsive-info {
              justify-content: flex-start !important;
              margin-top: 50px !important;
            }
            .responsive-info .item {
              width: 100%;
              margin-bottom: 20px;
            }
          }
        `}</style>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
