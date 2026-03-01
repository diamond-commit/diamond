 let menubutton = document.getElementById("menubutton")
 let menu = document.getElementById("menu")
 let cancel = document.getElementById("cancel")
 let overlay = document.getElementById("overlay")
 
 // open menu
  menubutton.addEventListener("click", function(){
    menu.classList.remove("translate-x-full")
    overlay.classList.remove("hidden")
  })
  
  // close menu
  cancel.addEventListener("click", ()=> {
    menu.classList.add("translate-x-full")
    overlay.classList.add("hidden")
  } )

  //overlay close method
  overlay.addEventListener("click", ()=> {
    menu.classList.add("translate-x-full")
    overlay.classList.add("hidden")
  })



  document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add("translate-x-full");
      overlay.classList.add("hidden");
    });
  });

  
      // Scroll in animation using Intersection Observer
  const cards = document.querySelectorAll('.project-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-8');
        entry.target.classList.add('opacity-100', 'translate-y-0');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));


