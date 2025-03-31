// Preloader
window.addEventListener("load", () => {
    document.getElementById("preloader").style.display = "none";
  });
  
  // Dark Mode Toggle
  document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  // Typing Effect
  const text = "Hi, I'm Mukhtar Emiola, a web developer and cybersecurity analyst.";
  let index = 0;
  function typeEffect() {
    if (index < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 50);
    }
  }
  window.onload = typeEffect;
  
  // Scroll Animations
  AOS.init();
  
  // Particles.js
  particlesJS("particles-js", {
    particles: {
      number: { value: 100 },
      color: { value: "#ff6600" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { speed: 2 }
    }
  });
  