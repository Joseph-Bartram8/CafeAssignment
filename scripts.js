  // Function to toggle Dark Mode
function toggleDarkMode() {
  // Toggle the classes on the body element
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  // Update the button text based on the mode
  const darkModeToggle = document.getElementById("darkModeToggle");
  const darkModeToggleMobile = document.getElementById("darkModeToggleMobile");
  const isDarkMode = document.body.classList.contains("dark-mode");

  // Set button text for both desktop and mobile toggle buttons
  darkModeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  darkModeToggleMobile.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

  // Store the mode in local storage
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

// Function to apply the saved mode on page load
function applySavedMode() {
  const savedMode = localStorage.getItem("darkMode");

  if (savedMode === "enabled") {
    // Apply dark mode if it was enabled
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");

    // Set button text for both desktop and mobile toggle buttons
    const darkModeToggle = document.getElementById("darkModeToggle");
    const darkModeToggleMobile = document.getElementById("darkModeToggleMobile");
    if (darkModeToggle) darkModeToggle.textContent = "Light Mode";
    if (darkModeToggleMobile) darkModeToggleMobile.textContent = "Light Mode";
  } else {
    // Apply light mode if it was disabled or not set
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
}

// Apply the saved mode on page load
document.addEventListener("DOMContentLoaded", applySavedMode);

  function filterByCategory(country) {
    const profileCards = document.querySelectorAll('.profile-card');
    const categoryItems = document.querySelectorAll('.category-item');
  
    // Find the clicked category item
    const activeCategory = Array.from(categoryItems).find(item => item.textContent === country);
  
    // Check if the clicked category is already active
    const isAlreadyActive = activeCategory.classList.contains('active');
  
    // Reset all categories to inactive
    categoryItems.forEach(item => item.classList.remove('active'));
  
    if (isAlreadyActive) {
      // If the clicked category was active, show all profile cards
      profileCards.forEach(card => card.style.display = 'block');
    } else {
      // Set the clicked category to active and filter profiles by country
      activeCategory.classList.add('active');
      profileCards.forEach(card => {
        card.style.display = (card.getAttribute('data-country') === country) ? 'block' : 'none';
      });
    }
  }

  // Filter by Keyword
  function filterProfiles() {
    const keyword = document.getElementById("search").value.toLowerCase();
    const profileCards = document.querySelectorAll(".profile-card");
    profileCards.forEach(card => {
      const name = card.getAttribute("data-name").toLowerCase();
      const country = card.getAttribute("data-country").toLowerCase();
      if (name.includes(keyword) || country.includes(keyword)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Clear Search and Category
  function clearSearch() {
    document.getElementById("search").value = '';

    // Reset profile card visibility
    const profileCards = document.querySelectorAll('.profile-card');
    profileCards.forEach(card => card.style.display = 'block');

    // Remove active class from categories
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => item.classList.remove('active'));
  }

  // Coffee Profiles Data
  const coffeeProfiles = [
    {
      name: "Coffee 1",
      farmName: "Sunrise Valley Farm",
      location: "Brazil",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae orci nec ipsum egestas tempus.",
      image: "images/coffee pouch 1.png"
    },
    {
      name: "Coffee 2",
      farmName: "Mountain Top Estate",
      location: "Colombia",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac arcu ac libero convallis vehicula.",
      image: "images/coffee pouch 2.png"
    },
    {
      name: "Coffee 3",
      farmName: "Green Leaf Plantation",
      location: "Ethiopia",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum at enim nec sem auctor.",
      image: "images/coffee pouch 3.png"
    },
    {
      name: "Coffee 4",
      farmName: "Golden Bean Farm",
      location: "Kenya",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate risus sed nisi tincidunt.",
      image: "images/coffee pouch 4.png"
    },
    {
      name: "Coffee 5",
      farmName: "Harvest Hills",
      location: "Guatemala",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare euismod sapien nec varius.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Coffee 6",
      farmName: "Valley Green Estates",
      location: "Peru",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel magna ut est ullamcorper sollicitudin.",
      image: "https://via.placeholder.com/150"
    }
  ];

  // Open Profile Overlay with Data
  function openProfile(profileIndex) {
    const profile = coffeeProfiles[profileIndex];
    const profileOverlay = document.getElementById("profileOverlay");
    const profileDetails = document.getElementById("profileDetails");

    // Populate profile details
    profileDetails.innerHTML = `
      <img src="${profile.image}" alt="${profile.name}" class="profile-img mr-3">
      <div>
        <h3>${profile.name}</h3>
        <p><strong>Farm Name:</strong> ${profile.farmName}</p>
        <p><strong>Location:</strong> ${profile.location}</p>
        <p>${profile.description}</p>
      </div>
    `;

    profileOverlay.classList.add("active");
  }

  // Close Profile Overlay
  function closeOverlay() {
    document.getElementById("profileOverlay").classList.remove("active");
  }

  // Event listener for overlay close button
  document.getElementById("closeOverlay").addEventListener("click", closeOverlay);

  // Event listener to close overlay when clicking outside profile content
  document.getElementById("profileOverlay").addEventListener("click", function (event) {
    if (event.target === this) closeOverlay();
  });
