// Loading screen functionality
window.onload = function () {
  const loader = document.getElementById("loading-screen");
  const mainContent = document.querySelector(".container");

  setTimeout(() => {
    loader.style.display = "none";
    mainContent.style.display = "block";
  }, 2000); // Loader visible for 2 seconds
};