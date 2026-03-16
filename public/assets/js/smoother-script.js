(function () {
  var isMobile = window.innerWidth < 768;

  gsap.registerPlugin(ScrollTrigger);

  if (!isMobile) {
    gsap.registerPlugin(ScrollSmoother);

    ScrollTrigger.normalizeScroll(true);

    // create the smooth scroller FIRST! (desktop only)
    var smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  }
})()