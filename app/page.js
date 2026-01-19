import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Script from 'next/script';
import Header from '@/components/home-personal/Header';


import Blog from '@/components/home-personal/Blog';

import Testimonials from '@/components/home-personal/Testimonials';
import Marq from '@/components/home-personal/Marq';
import About from '@/components/home-personal/About';
import Services from '@/components/home-personal/Services';
import Skills from '@/components/home-personal/Skills';
import Portfolio from '@/components/home-personal/Portfolio';

export const metadata = {
  title: 'Dev.Shakib Personal Portfolio',
  description: 'Dev.Shakib Personal Portfolio',
  icons: {
    icon: '/assets/imgs/favicon.png',
    shortcut: '/assets/imgs/demos.png',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
    ]),
  },
};

import ScrollReveal from '@/components/common/ScrollReveal';

export default function Home() {
  return (
    <body className="home-personal">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <section id="home">
              {/* Header has its own complex animations, keeping it unwrapped or handled internally */}
              <Header />
            </section>

            <ScrollReveal delay={0.2}>
              <Marq />
            </ScrollReveal>

            <section id="about">
              <ScrollReveal>
                <About />
              </ScrollReveal>
            </section>

            <section id="services">
              <ScrollReveal>
                <Services />
              </ScrollReveal>
            </section>

            <section id="portfolio">
              {/* Portfolio has GSAP pinning which might conflict with transform, so we wrap the inner content if needed or leave as is if GSAP handles reveal */}
              <Portfolio />
            </section>

            <section id="skills">
              <ScrollReveal>
                <Skills />
              </ScrollReveal>
            </section>

            <section id="testimonials">
              <ScrollReveal>
                <Testimonials />
              </ScrollReveal>
            </section>

            <section id="blog">
              <ScrollReveal>
                <Blog />
              </ScrollReveal>
            </section>

            <ScrollReveal>
              <Marq2 />
            </ScrollReveal>

            <section id="contact">
              <ScrollReveal>
                <Footer />
              </ScrollReveal>
            </section>
          </main>
        </div>
      </div>
      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />

      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/countdown.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>

      {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}

      <Script src="/assets/js/scripts.js"></Script>
    </body>
  );
}
