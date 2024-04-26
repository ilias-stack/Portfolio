function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  }
);

const hiddenSections = document.querySelectorAll(".hidden");

hiddenSections.forEach((section) => observer.observe(section));

const modal = document.getElementById("modal");
var projectTitle = modal.querySelector("h2");
var projectDescription = modal.querySelector("p");

var closeBtn = document.getElementsByClassName("close")[0];

function openModal(btnIndex) {
  modal.style.display = "block";
  projectDescription.innerText = projectDetailsArray[btnIndex][1];
  projectTitle.innerText = projectDetailsArray[btnIndex][0];
}

function closeModal() {
  modal.style.display = "none";
}

const projectDetailsArray = [
  [
    "Madinaty",
    "Madinaty, a mobile application aimed at improving public infrastructure, enables users to report damages in roads, trash, and public property seamlessly. Built with Flutter for the frontend, the app provides a user-friendly interface for easy issue documentation and submission. Utilizing Firebase on the backend ensures efficient data management and real-time updates, facilitating swift response and resolution to reported issues. Madinaty promotes community engagement and collaboration, empowering citizens to contribute to the enhancement of their local environment while fostering a sense of civic responsibility and collective action.",
  ],
  [
    "Instagram clone",
    "The Instagram clone application, integrating Flutter for the frontend and Express.js for the backend, mirrors the popular social media platform's interface and functionality. Users can register, create profiles, and seamlessly share multimedia content with their network. Employing MySQL for data storage, the app ensures efficient data management and retrieval. With features like interactive posts, message exchange, and search functionalities, this clone offers users a familiar social media experience.",
  ],
  [
    "N7FLIX",
    "N7FLIX is a desktop application crafted with JavaFX, offering users personalized film recommendations through the innovative use of the cosine similarity algorithm. By analyzing user preferences and film attributes, N7FLIX provides tailored movie suggestions, ensuring an engaging and customized viewing experience. With its intuitive interface and advanced recommendation system, N7FLIX simplifies the process of discovering new films, making movie nights more enjoyable and fulfilling for users.",
  ],
];

const detailsButtons = document.getElementsByClassName("details-btn");

[...detailsButtons].forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    openModal(index);
  });
});
