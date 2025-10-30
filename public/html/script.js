// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle")

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const nav = document.querySelector(".nav")
    const headerButtons = document.querySelector(".header-buttons")

    if (nav) {
      nav.style.display = nav.style.display === "flex" ? "none" : "flex"
    }
    if (headerButtons) {
      headerButtons.style.display = headerButtons.style.display === "flex" ? "none" : "flex"
    }
  })
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// Button click handlers
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    const text = this.textContent.trim()

    // Handle navigation buttons
    if (text === "Start Free Trial" || text === "Book a Demo") {
      console.log("Redirecting to trial/demo page")
      // window.location.href = "/trial"
    } else if (text === "Login") {
      console.log("Redirecting to login page")
      // window.location.href = "/login"
    } else if (text === "Explore API Documentation") {
      console.log("Redirecting to API docs")
      // window.location.href = "/api-docs"
    } else if (text === "Subscribe") {
      const email = document.querySelector(".newsletter input")
      if (email && email.value) {
        console.log("Subscribing email:", email.value)
        email.value = ""
      }
    }
  })
})

function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  document.querySelectorAll(".nav a").forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })
}

// Call on page load
document.addEventListener("DOMContentLoaded", setActiveNavLink)

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe feature cards and other elements
document.querySelectorAll(".feature-card, .result-card, .automation-card, .why-card, .industry-card").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})
