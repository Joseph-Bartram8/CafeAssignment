// Clear search input
function clearSearch() {
    document.getElementById("search").value = '';
  }
  
  // toggle category items
  function toggleCategory(element) {
    element.classList.toggle("active");
  }
  
  // Toggle Dark Mode
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  
    // Update the text of the dark mode toggle button
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (document.body.classList.contains("dark-mode")) {
      darkModeToggle.textContent = "Light Mode";
    } else {
      darkModeToggle.textContent = "Dark Mode";
    }
  }

  function openProfile(profileName) {
    const profileOverlay = document.getElementById("profileOverlay")
    const profileDetails = document.getElementById("profileDetails")

    profileDetails.innerHTML = `
    <h3>${profileName} Farm/Farmer Profile</h3>
    <p>Details about the coffee farm or farmer for ${profileName} will be displayed here</p>
    `;

    profileOverlay.classList.add("active");
  }

  // close Profile Overlay
  function closeOverlay() {
    document.getElementById("profileOverlay").classList.remove("active");
  }

  document.getElementById("closeOverlay").addEventListener("click", closeOverlay);

  document.getElementById("profileOverlay").addEventListener("click", function (event) {
    if (event.target === this) closeOverlay();
  })
  