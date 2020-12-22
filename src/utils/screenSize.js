export default () => {
  const windowW = window.innerWidth,
    windowH = window.innerHeight;

  let isDesktop = windowW >= 1000,
    isTablet = windowW >= 764 && windowW < 1000,
    isMobile = windowW < 764;

  return {
    windowW: windowW,
    windowH: windowH,
    isDesktop: isDesktop,
    isTablet: isTablet,
    isMobile: isMobile,
  };
};
