//scrolling - links must be active on scroll.

const pages = document.querySelectorAll('.page');
const pageArray = Array.from(pages);
const links = document.querySelectorAll('.navlink');
const linkArray = Array.from(links);

linkArray[0].classList.add('current');

headerHeight = document.querySelector('.main-header').offsetHeight;

document.querySelector('.wrapper').onscroll = (event) => {
  console.log(event);
  let scrollY = document.querySelector('.wrapper').scrollTop;
  let scrollX = document.querySelector('.wrapper').scrollLeft;
  pageArray.map((page,i)=>{
    const pageTop = page.offsetTop - headerHeight;
    const pageHeight = page.offsetHeight;
    const pageLeft = page.offsetLeft;
    const pageWidth = page.offsetWidth;

    const pageInViewX = (scrollX >= pageLeft && scrollX < pageLeft + pageWidth);
    const pageInViewY = (scrollY >= pageTop && scrollY < pageTop + pageHeight);
    
    if (!pageInViewY || !pageInViewX) {
        linkArray[i].classList.remove('current');
    } else {
    linkArray[i].classList.add('current');
    }
  })
}

//---------animation-----------
const page3 = document.querySelector('.page3');
const balls = document.querySelectorAll('.ball');
const ballsArray = Array.from(balls);

const finish = document.querySelector('.finish');

const removeAnimationClasses =() => {
  ballsArray.map(ball => ball.classList.remove('animate-balls'));
  finish.classList.remove('animate-finish');
}

const animation = () => {
  ballsArray.map(ball => ball.classList.add('animate-balls'));
  finish.classList.add('animate-finish');
}

const animate = () => {
  removeAnimationClasses();
  setTimeout(() => {
    animation();
  }, 300);
}

let page3observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) animate();
});

page3observer.observe(page3);

const resetBtn = document.querySelector('.restart-animation');
resetBtn.addEventListener('click', animate);