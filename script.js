// ==============================
// FITUR: DARK MODE TOGGLE
// ==============================

const darkToggleBtn = document.querySelector('#dark-btn');
const body = document.body;

darkToggleBtn.addEventListener('click', function () {

  // aktif / nonaktifkan dark mode
  body.classList.toggle('dark-mode');

  // cek apakah dark mode aktif
  const isDarkMode = body.classList.contains('dark-mode');

  // ubah teks tombol
  if (isDarkMode) {
    darkToggleBtn.textContent = "☀️ Light Mode";
  } else {
    darkToggleBtn.textContent = "🌙 Dark Mode";
  }

});

// ==============================
// FITUR 2: SMOOTH SCROLL SECTION
// ==============================

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', function(e){

    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if(targetSection){
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }

  });
});

// ==============================
// FITUR 3: STICKY NAVBAR SCROLL
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});
