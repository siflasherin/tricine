////navbar plus hamburger menu

// Function to toggle the hamburger menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Close the menu when clicking outside of it
document.addEventListener('click', function (event) {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.querySelector('.hamburger');

  // Check if the click is outside the menu or hamburger icon
  if (
      !navLinks.contains(event.target) && 
      !hamburger.contains(event.target)
  ) {
      navLinks.classList.remove("active");
  }
});

// Toggle dropdown on click for small screens
document.querySelector('.dropdown-toggle').addEventListener('click', function (e) {
  e.preventDefault();
  this.parentElement.classList.toggle('active');
});


////Get the button or goto top button id
let topBtn = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


//// download pdf button
window.addEventListener('scroll', function() {
    const downloadButton = document.getElementById('download-button');
    if (window.scrollY > 0) {
        downloadButton.style.display = 'block';
    } else {
        downloadButton.style.display = 'none';
    }
});


//// preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    preloader.style.display = 'none';
    content.style.display = 'block';
});



//// emailjs
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_pjsd8ue", "template_cfoz1po", parms)

}



//// landing image about_us 
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}


////projects section filtering


document.addEventListener("DOMContentLoaded", function () {
  showProjects("completed"); // Show completed projects by default
});

function showProjects(category) {
  let completedProjects = document.querySelectorAll(".project-card[data-category='completed']");
  let ongoingProjects = document.querySelectorAll(".project-card[data-category='ongoing']");

  if (category === "completed") {
    completedProjects.forEach(project => project.style.display = "flex");
    ongoingProjects.forEach(project => project.style.display = "none");
  } else if (category === "ongoing") {
    completedProjects.forEach(project => project.style.display = "none");
    ongoingProjects.forEach(project => project.style.display = "flex");
  }
}



////// for removing # from url

// 1️ Remove #id from URL after navigating from another page
window.onload = function () {
  if (window.location.hash) { // Check if URL has a #
      let target = document.querySelector(window.location.hash);
      if (target) {
          target.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
      }
      history.replaceState(null, null, window.location.pathname); // Remove # from URL
  }
};

// 2️ Remove #id after clicking a link on the same page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (event) {
      event.preventDefault(); // Stop default jump

      let target = document.querySelector(this.getAttribute("href"));
      if (target) {
          target.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
      }

      history.replaceState(null, null, window.location.pathname); // Remove # from URL
  });
});


