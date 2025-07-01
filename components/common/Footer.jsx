import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <img src="/assets/imgs/logo-light.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <h6 className="p-color fw-400">
                Mirpur <br /> Dhaka, Bangladesh
              </h6>
              <h6 className="mt-30 mb-15">
  <a
    href="mailto:dev.shakib@outlook.com"
    className="text-blue-500 underline"
  >
    dev.shakib@outlook.com
  </a>
</h6>

              
              <a
  href="https://wa.me/8801771659336"
  target="_blank"
  rel="noopener noreferrer"
  className="underline flex items-center gap-2"
>
  <span className="fz-22 main-color">
    +8801771659336
  </span>
  <i className="fab fa-whatsapp text-green-500 text-xl"></i>
</a>

            </div>
          </div>
          {/* <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/page-about">About</a>
                </li>
                <li className="mb-15">
                  <a href="/page-services">Services</a>
                </li>
                <li className="mb-15">
                  <a href="/blog-grid-sidebar">Blog</a>
                </li>
                <li>
                  <a href="/page-contact">Contact</a>
                </li>
              </ul>
            </div>
          </div> */}
<div className="col-lg-3">
  <div className="column subscribe-minimal">
    <h6 className="sub-title mb-30">ReachOut</h6>

    {/* <div className="form-group mb-40">
      <input type="text" name="subscrib" placeholder="Your Email" />
      <button>
        <span className="ti-location-arrow"></span>
      </button>
    </div> */}

    <ul className="rest social-icon d-flex align-items-center">
      <li className="hover-this cursor-pointer">
        <a
          href="https://www.facebook.com/shamiul.shakib.7"
          className="hover-anim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>

      <li className="hover-this cursor-pointer ml-10">
        <a
          href="https://x.com/DevShakib6"
          className="hover-anim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
      </li>

      <li className="hover-this cursor-pointer ml-10">
        <a
          href="https://www.linkedin.com/in/sheikh-shamiul-834878206/"
          className="hover-anim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </li>

      <li className="hover-this cursor-pointer ml-10">
        <a
          href="https://github.com/shakib5560"
          className="hover-anim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </li>
    </ul>
  </div>
</div>

        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © 2025 by Eng.{' '}
              <span className="underline main-color">
                <a href="https://www.linkedin.com/in/sheikh-shamiul-834878206/" target="_blank">
                  Sheikh Shamiul Shakib
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/map.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
