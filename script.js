// navlink stay bold - scrolling not included
const links = document.querySelectorAll('.navlink');
const arrayOfLinks = Array.from(links);

const handleClick = (event)=>{
  arrayOfLinks.map(link => link.classList.remove('current'));
  event.target.classList.add('current');
}

links.forEach(item => {
  item.addEventListener('click', handleClick)
})

// animation

const page3 = document.querySelector('.page3');
const balls = document.querySelectorAll('.ball');
const ballsArray = Array.from(balls);

const finish = document.querySelector('.finish');

const removeAnimationClasses =() => {
  ballsArray.map(ball => ball.classList.remove('animate-balls'));
  finish.classList.remove('animate-finish');
}

const animate = () => {
  removeAnimationClasses();
  ballsArray.map(ball => ball.classList.add('animate-balls'));
  finish.classList.add('animate-finish');
}

const resetAnimate = () => {
  removeAnimationClasses();
  setTimeout(() => {
    animate();
  }, 500);
}

let observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) animate();
});

observer.observe(page3);

document.querySelector('.restart-animation').addEventListener('click', resetAnimate);