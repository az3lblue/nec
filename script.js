const stickyHeader = document.querySelector('.sticky-header');
const scrollPoint = 200; 

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollPoint) {
    stickyHeader.classList.add('header-faded');
  } else {
    stickyHeader.classList.remove('header-faded');
  }
});

const sections = document.querySelectorAll('section');

sections.forEach(section => {
  section.addEventListener('mouseover', () => {
    section.classList.add('focus');
  });

  section.addEventListener('mouseout', () => {
    section.classList.remove('focus');
  });
});