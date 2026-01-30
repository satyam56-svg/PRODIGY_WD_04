/* ================= NAVBAR TOGGLE (Mobile me menu kholne ke liye) ================= */

const navToggleBtn = document.getElementById("navToggleBtn");
const navMenu = document.getElementById("navMenu");

navToggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* Jab link click ho to menu band kr do */
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


/* ================= DARK MODE TOGGLE (Dark mode on/off krne ka logic) ================= */

const themeToggleBtn = document.getElementById("themeToggleBtn");
const body = document.body;

/* Pehle se saved theme check krne ke liye */
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggleBtn.textContent = "☀️";
}

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});


/* ================= SCROLL REVEAL ANIMATION (Scroll krne pe elements reveal honge) ================= */

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
revealOnScroll(); // load hone pe chalao


/* ================= SKILL PROGRESS ANIMATION (Skills bar animation) ================= */

const progressBars = document.querySelectorAll(".progress span");

const animateSkills = () => {
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = "0";

    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
};

/* Jab skills section dikhe tabhi animation chalega */
let skillsAnimated = false;

window.addEventListener("scroll", () => {
  const skillsSection = document.getElementById("skills");

  if (!skillsSection) return;

  const sectionTop = skillsSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 150 && !skillsAnimated) {
    animateSkills();
    skillsAnimated = true;
  }
});


/* ================= FAQ ACCORDION (FAQ section ka logic) ================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    question.classList.toggle("active");

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});


/* ================= SCROLL TO TOP BUTTON (Upar wapas jane wala button) ================= */

const scrollBtn = document.getElementById("scrollToTopBtn");

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


/* ================= CONTACT FORM (Basic Handling) ================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thanks for reaching out! I’ll get back to you soon 😊");

    contactForm.reset();
  });
}