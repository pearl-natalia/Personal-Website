document.addEventListener("DOMContentLoaded", function () {
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
  const projectContainer = document.getElementById("project-container");
  const aboutContainer = document.getElementById("about-container");

  // Show the appropriate section
  function showSection(section) {
    if (section === "projects") {
      projectContainer.style.visibility = "visible";
      projectContainer.style.opacity = "1";
      aboutContainer.style.visibility = "hidden";
      aboutContainer.style.opacity = "0";
      window.location.hash = "#projects";
      updateBold(projectLink);
      document.title = "Portfolio - Pearl Natalia";
    } else if (section === "about") {
      projectContainer.style.visibility = "hidden";
      projectContainer.style.opacity = "0";
      aboutContainer.style.visibility = "visible";
      aboutContainer.style.opacity = "1";
      window.location.hash = "#about";
      updateBold(aboutLink);
      document.title = "Profile - Pearl Natalia";
    }
    window.scrollTo(0, 0);
  }

  // Bold clicked menu item
  function updateBold(clickedLink) {
    projectLink.classList.remove("bold");
    aboutLink.classList.remove("bold");
    clickedLink.classList.add("bold");
  }

  // Event listeners for menu links
  projectLink.addEventListener("click", function (event) {
    event.preventDefault();
    showSection("projects");
  });

  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    showSection("about");
  });

  // Hash changes
  window.addEventListener("hashchange", function () {
    const section = window.location.hash.substring(1);
    showSection(section);
  });

  // Initial load
  const initialSection = window.location.hash.substring(1) || "projects";
  showSection(initialSection);

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
