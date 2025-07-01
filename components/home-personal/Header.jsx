'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import { FaGithub } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      className="header header-personal valign bg-img"
      data-background="/assets/imgs/header/p0.jpg"
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
                Available for work
              </h6>
              <h1 className="fw-700 mb-10">
                I&apos;m Shamiul <span className="main-color">Shakib</span>
              </h1>
              <h3>Software Engineer</h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p class="main-color text-md">
                      Crafting intuitive digital experiences, building innovative SaaS solutions, and empowering businesses to stand out—through the power of code.
                    </p>
                  </div>
                  <div className="d-flex gap-2 align-items-center mt-60">
                    <a
                      href="https://drive.google.com/file/d/1vR03EPZxzrd2GBHSK_smDaOXRAhVBOmt/view?usp=drive_link"
                      className="butn butn-md butn-bord radius-30"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text flex gap-2"> <span>Resume </span> <span> < FaGoogleDrive /> </span> </span>
                    </a>
                    <a
                      href="https://github.com/shakib5560"
                      className="butn butn-md butn-bord main-colorbg radius-30"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text flex gap-2"><span className='text-black'>GitHub</span><span className='text-black'><FaGithub /></span></span>
                    </a>
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
        </div>
        <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email :</h6>
            <span className="p-color">dev.shakib@outlook.com</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Phone :</h6>
            <span className="p-color">+8801771659336</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Address :</h6>
            <span className="p-color">Mirpur, Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
