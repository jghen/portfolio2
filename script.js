const links = document.querySelectorAll('.navlink');
const arrayOfLinks = Array.from(links);

const handleClick = (event)=>{
  arrayOfLinks.map(link => link.classList.remove('current'));
  event.target.classList.add('current');
}

links.forEach(item => {
  item.addEventListener('click', handleClick)
})