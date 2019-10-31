const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//nav bar

let navBar = document.getElementsByTagName("a");
navBar[0].textContent = siteContent.nav["nav-item-1"];
navBar[1].textContent = siteContent.nav["nav-item-2"];
navBar[2].textContent = siteContent.nav["nav-item-3"];
navBar[3].textContent = siteContent.nav["nav-item-4"];
navBar[4].textContent = siteContent.nav["nav-item-5"];
navBar[5].textContent = siteContent.nav["nav-item-6"];

//CTA

//image

const domImg = document.getElementById("cta-img");
domImg.setAttribute("src", ["img/header-img.png"]);

//button

const buttnn = document.querySelector("button");
buttnn.textContent = siteContent["cta"]["button"];

//header

const ctaHead = document.querySelector(".cta h1");
ctaHead.innerHTML = siteContent["cta"]["h1"];

//Middle Content

//image

const middleImg = document.querySelector(".middle-img");
middleImg.setAttribute("src", ["img/mid-page-accent.jpg"]);

// Headers

const middleHeaders = document.querySelectorAll("h4");
middleHeaders[0].textContent = siteContent["main-content"]["features-h4"];
middleHeaders[1].textContent = siteContent["main-content"]["about-h4"];
middleHeaders[2].textContent = siteContent["main-content"]["services-h4"];
middleHeaders[3].textContent = siteContent["main-content"]["product-h4"];
middleHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

const middleContent = document.querySelectorAll("p");
middleContent[0].textContent = siteContent["main-content"]["features-content"];
middleContent[1].textContent = siteContent["main-content"]["about-content"];
middleContent[2].textContent = siteContent["main-content"]["services-content"];
middleContent[3].textContent = siteContent["main-content"]["product-content"];
middleContent[4].textContent = siteContent["main-content"]["vision-content"];

// Contact and Footer
//Contact Header
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];
//Contact Content

const contactContent = document.querySelectorAll(".contact p");
contactContent[0].textContent = siteContent["contact"]["address"];
contactContent[1].textContent = siteContent["contact"]["phone"];
contactContent[2].textContent = siteContent["contact"]["email"];

//footer

const foooter = document.querySelector("footer p");
foooter.textContent = siteContent["footer"]["copyright"];

// STRETCH

const coloring = document.querySelectorAll(" h4");
coloring.forEach(element => {
  element.style.color = "limegreen";
  element.style.backgroundColor = "black";
});

const domChange = document.querySelector(".cta h1");
domChange.textContent = "DOM IS GREAT";

const coloring1 = document.querySelectorAll(" nav a");
coloring1.forEach(element => {
  element.style.color = "limegreen";
  element.style.backgroundColor = "yellow";
});
