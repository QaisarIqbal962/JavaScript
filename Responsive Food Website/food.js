let loader = document.querySelector(".loadPage");
let container = document.querySelector(".container");
let cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    console.log(card);

    document.querySelector("body").innerHTML = "";
    let div = document.createElement("div");
    div.classList.add("foodDetail");
    div.innerHTML = `
     <img src=${card.firstElementChild.src} alt="">
       <div class="detailText">
           <h1>Foods You Like</h1>
           <h2>Upto 40% OFF</h2>
           <p>Pay on delivery might be available</p>
           <p>Pay on delivery might be available</p>
           <p>Pay on delivery might be available</p>
           <p>Pay on delivery might be available</p>
           <button>Buy Now</button>
           <button>Add To Cart</button>
           <a href="">Back</a>
       </div>
     `;
    document.querySelector("body").appendChild(div);
  });
});


const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const section = document.querySelector(targetId);
    if (!section) return;
    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});


const sections = ["#home", "#food", "#gallery", "#blog"]
  .map(function (sel) {
    return document.querySelector(sel);
  })
  .filter(function (el) {
    return !!el;
  });

const linkById = {};
navLinks.forEach(function (a) {
  const href = a.getAttribute("href");
  if (href) linkById[href.replace("#", "")] = a;
});

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      const id = entry.target.id;
      const link = linkById[id];
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(function (a) {
          a.classList.remove("active");
        });
        link.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px", threshold: 0.1 }
);

sections.forEach(function (sec) {
  observer.observe(sec);
});

const menuButton = document.getElementById("bar");
const nav = document.querySelector("nav");
const navList = document.querySelector("nav ul");
if (menuButton && nav && navList) {
  menuButton.setAttribute("aria-label", "Toggle navigation menu");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.addEventListener("click", function () {
    const opening = !nav.classList.contains("mobile-open");
    nav.classList.toggle("mobile-open");
    this.setAttribute("aria-expanded", opening ? "true" : "false");
  });

  navList.addEventListener("click", function (e) {
    const target = e.target;
    if (target && target.matches("a[href^='#']")) {
      nav.classList.remove("mobile-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}
