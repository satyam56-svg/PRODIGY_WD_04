const navToggleBtn = document.getElementById("navToggleBtn");
const navMenu = document.getElementById("navMenu");

if (navToggleBtn && navMenu) {
  navToggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

const themeToggleBtn = document.getElementById("themeToggleBtn");
const body = document.body;
const icon = themeToggleBtn.querySelector("i");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  if (icon) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");

    if (isDark) {
      localStorage.setItem("theme", "dark");
      if (icon) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      }
    } else {
      localStorage.setItem("theme", "light");
      if (icon) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      }
    }
  });
}

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const progressBars = document.querySelectorAll(".progress span");
const skillsSection = document.getElementById("skills");
let skillsAnimated = false;

window.addEventListener("scroll", () => {
  if (!skillsSection || skillsAnimated) return;

  const sectionTop = skillsSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 150) {
    progressBars.forEach(bar => {
      const width = bar.style.width; 
      bar.style.width = "0"; 

      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
    skillsAnimated = true;
  }
});

const scrollBtn = document.getElementById("scrollToTopBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
    contactForm.reset();
  });
}
