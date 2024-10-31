// Clear search input
function clearSearch() {
    document.getElementById("search").value = '';
  }
  
  // Toggle category button active state with Bootstrap classes
  function toggleCategory(element) {
    const items = document.querySelectorAll(".category-item");
    items.forEach(item => item.classList.remove("btn-dark", "text-white"));
    items.forEach(item => item.classList.add("btn-secondary"));
    element.classList.remove("btn-secondary");
    element.classList.add("btn-dark", "text-white");
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
  