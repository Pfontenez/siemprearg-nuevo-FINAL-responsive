document.addEventListener("DOMContentLoaded", function () {

  const whatsappLinks = document.querySelectorAll(
    'a[href*="wa.me"], a[href*="whatsapp"]'
  );

  whatsappLinks.forEach(function(link){
    link.setAttribute("target","_blank");
    link.setAttribute("rel","noopener noreferrer");
  });

  const nav = document.getElementById("mainNav");

  if (!nav) return;

  nav.querySelectorAll(".nav-links a").forEach(function(link){
    link.addEventListener("click", function(e){

      if (
        window.innerWidth <= 980 &&
        link.parentElement.classList.contains("nav-dropdown")
      ) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
        return;
      }

      nav.classList.remove("open");

    });
  });

  document.addEventListener("click", function(e){
    if (!nav.contains(e.target)) {
      nav.classList.remove("open");
    }
  });

});
