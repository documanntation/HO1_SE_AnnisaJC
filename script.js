// Button for directing to #courses (alternative from using href)
document.addEventListener("DOMContentLoaded", function () {
  const courseButton = document.querySelector(".course-button");

  courseButton.addEventListener("click", function () {
    window.location.href = "#courses";
  });
});

// Courses Section
document.addEventListener("DOMContentLoaded", function () {
  const courseItems = document.querySelectorAll(
    ".course-card h3, .course-card img"
  );
  const dropdownItems = document.querySelectorAll(".dropdown-content a");

  courseItems.forEach((item) => {
    item.addEventListener("click", function () {
      alert(
        `${
          item.closest(".course-card").querySelector("h3").textContent
        } is still in progress!`
      );
    });
  });

  dropdownItems.forEach((item) => {
    item.addEventListener("click", function () {
      alert(`${item.textContent} is still in progress!`);
    });
  });
});
