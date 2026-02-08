const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); 

    const linkText = link.innerText.toLowerCase(); 
    

    const targetSection = document.getElementById(linkText);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
