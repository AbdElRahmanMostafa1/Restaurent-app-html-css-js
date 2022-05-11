/* Start Top Menu Icon */
const menu = document.querySelector('.menu');
  menu.addEventListener('click', ()=> {
    document.querySelectorAll('.target').forEach((item)=> {
      item.classList.toggle('change');
    })
    
  })
/* End of Top Menu Icon */

/* Start Top Left Menu Icon in mobile*/
  const mobileMenuIcon = document.getElementById('menu-icon');
  const mobileMenu = document.querySelector('.navbar-mobile')
  mobileMenuIcon.addEventListener('click', ()=> {
    document.querySelector('.burger-icon span').classList.toggle('complete');
    mobileMenu.classList.toggle('left-50');
  })
/* End of Top Left Menu Icon in mobile*/

/* Start Food icons Animation */
  const icons = document.querySelectorAll('.section-1 .icons-wrapper svg');
  let i = 1;
  
  setInterval(() => {
    i++;
    const icon = document.querySelector('.appear');

    icon.classList.remove('appear');
    
    if (i > icons.length) {
      icons[0].classList.add('appear');
      i=1;
    } else {
      icon.nextElementSibling.classList.add('appear');
    }
  }, 3000);

/* End of Food icons Animation */