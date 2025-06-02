document.addEventListener("DOMContentLoaded", () => {
  const clickMeBtn = document.getElementById("clickMeBtn");
  const message = document.getElementById("message");
  const toggleBtn = document.getElementById("toggleInfoBtn");
  const extraInfo = document.getElementById("extraInfo");
  const themeBtn = document.getElementById("themeToggleBtn");

  // Click Me Button
  clickMeBtn.addEventListener("click", () => {
    message.textContent = "You clicked the button! 🎉";
  });

  // Show/Hide Extra Info
  toggleBtn.addEventListener("click", () => {
    if (extraInfo.style.display === "none") {
      extraInfo.style.display = "block";
      toggleBtn.textContent = "Hide Info";
    } else {
      extraInfo.style.display = "none";
      toggleBtn.textContent = "Show More Info";
    }
  });

  // Light/Dark Mode
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });

  // Live Date & Time
  function updateDateTime() {
    const now = new Date();
    document.getElementById("dateTime").textContent =
      "Current Date & Time: " + now.toLocaleString();
  }
  setInterval(updateDateTime, 1000);
  updateDateTime();
});