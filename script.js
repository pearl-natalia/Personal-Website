document.addEventListener("DOMContentLoaded", function () {
  const projectLink = document.getElementById("projects");
  const aboutLink = document.getElementById("about");
  const projectContainer = document.getElementById("project-container");
  const aboutContainer = document.getElementById("about-container");

  // Function to show the appropriate section
  function showSection(section) {
    if (section === "projects") {
      projectContainer.style.visibility = "visible";
      projectContainer.style.opacity = "1";
      aboutContainer.style.visibility = "hidden";
      aboutContainer.style.opacity = "0";
      window.location.hash = "#projects"; // Updates the URL with hash
      updateBold(projectLink);
    } else if (section === "about") {
      projectContainer.style.visibility = "hidden";
      projectContainer.style.opacity = "0";
      aboutContainer.style.visibility = "visible";
      aboutContainer.style.opacity = "1";
      window.location.hash = "#about"; // Updates the URL with hash
      updateBold(aboutLink);
    }
    window.scrollTo(0, 0); // Ensure the page loads from the top
  }

  // Function to bold the clicked menu item
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

  // Handle hash change
  window.addEventListener("hashchange", function () {
    const section = window.location.hash.substring(1);
    showSection(section);
  });

  // Initial load based on hash
  const initialSection = window.location.hash.substring(1) || "projects";
  showSection(initialSection);
});
