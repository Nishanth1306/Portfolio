// Animation utility functions
export const initScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    },
    { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((el) => observer.observe(el));

  return observer;
};

export const addScrollListener = () => {
  const handleScroll = () => {
    const scrolled = window.scrollY > 50;
    const header = document.querySelector('.header');
    if (header) {
      if (scrolled) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}; 