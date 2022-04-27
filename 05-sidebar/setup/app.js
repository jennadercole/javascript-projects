const sidebar = document.querySelector(".sidebar");
const toggleButton = document.querySelector(".sidebar-toggle");
const closeButton = document.querySelector(".close-btn");

toggleButton.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeButton.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
