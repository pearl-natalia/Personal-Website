document.addEventListener("DOMContentLoaded", function () {
    const lightModeToggle = document.getElementById('light-mode-toggle');
  if (localStorage.getItem('lightMode') === 'enabled') {
    document.body.classList.add('light-mode');
  }
  function applyTheme() {
    const lightModeEnabled = document.body.classList.contains('light-mode');
    const iframe = document.querySelector('#about-container iframe');
    if (iframe) {
      iframe.contentWindow.postMessage({ theme: lightModeEnabled ? 'light' : 'dark' }, '*');
    }
  }
  lightModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('lightMode', document.body.classList.contains('light-mode') ? 'enabled' : 'disabled');
    applyTheme();
  });
  applyTheme();
  
  // Height of project descriptions
  var project2Description = document.getElementById("project2-description");
  if (project2Description) {
    var height = project2Description.offsetHeight;
    var projectDescriptions = document.querySelectorAll(".project-description");
    projectDescriptions.forEach(function (div) {
      div.style.height = height + "px";
    });
  }

  const projectLink = document.getElementById("projects");
  const aboutLink = document.getElementById("about");
  function setInitialBold() {
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "" || currentPage === "index.html") {
      projectLink.classList.add("bold");
      aboutLink.classList.remove("bold");
    } else if (currentPage === "profile.html") {
      aboutLink.classList.add("bold");
      projectLink.classList.remove("bold");
    }
  }

  setInitialBold();

  // Define the aspect ratio (width / height)
  const aspectRatio = 1400 / 2000;
  const projectElements = document.querySelectorAll(".project-image-container");
  projectElements.forEach((element) => {
    const width = element.getBoundingClientRect().width;
    const newHeight = aspectRatio * width + 50;
    element.style.height = `${newHeight}px`;
  });

  // About me section
  const aboutContainerDiv = document.getElementById("#about-container");
  const menu = document.getElementById("#menu");
  const viewportWidth = window.innerWidth;
  const menuHeight = menu.offsetHeight;
  const viewportHeight = window.innerHeight;
  const divHeight = viewportHeight - menuHeight;

  if (viewportWidth < 768) divHeight %= 80;
  aboutContainerDiv.style.height = `${divHeight}px`;



});
