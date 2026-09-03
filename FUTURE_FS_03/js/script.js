// ============================================
// Nomad Coffee House — site interactions
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  initNavToggle();
  initTestimonials();
  initReserveForm();
  setMinDateToToday();
});

/* Mobile nav toggle */
function initNavToggle() {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* Testimonial rotator with dot navigation */
function initTestimonials() {
  var quotes = document.querySelectorAll(".quote");
  var dotsWrap = document.getElementById("quoteDots");
  if (!quotes.length || !dotsWrap) return;

  var current = 0;
  var timer;

  quotes.forEach(function (_, i) {
    var dot = document.createElement("button");
    dot.setAttribute("aria-label", "Show testimonial " + (i + 1));
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", function () {
      goTo(i);
      restartTimer();
    });
    dotsWrap.appendChild(dot);
  });

  var dots = dotsWrap.querySelectorAll("button");

  function goTo(index) {
    quotes[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = index;
    quotes[current].classList.add("active");
    dots[current].classList.add("active");
  }

  function next() {
    goTo((current + 1) % quotes.length);
  }

  function restartTimer() {
    clearInterval(timer);
    timer = setInterval(next, 6000);
  }

  restartTimer();
}

/* Reservation form: client-side validation + confirmation message (demo only, no backend) */
function initReserveForm() {
  var form = document.getElementById("reserveForm");
  var status = document.getElementById("formStatus");
  if (!form || !status) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var date = form.date.value;
    var time = form.time.value;

    if (!name || !email || !date || !time) {
      status.textContent = "Please fill in your name, email, date, and time.";
      status.classList.remove("success");
      return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      status.textContent = "Please enter a valid email address.";
      status.classList.remove("success");
      return;
    }

    // In production, this would POST to a booking API or email service.
    status.textContent = "Thanks, " + name.split(" ")[0] + " — we'll confirm your table by email shortly.";
    status.classList.add("success");
    form.reset();
  });
}

/* Prevent picking a reservation date in the past */
function setMinDateToToday() {
  var dateInput = document.getElementById("date");
  if (!dateInput) return;
  var today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);
}
