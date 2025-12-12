// Smooth fade-in for sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".row, .intro");

  sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(40px)";
  });

  let delay = 0;
  sections.forEach(sec => {
    setTimeout(() => {
      sec.style.transition = "1s ease";
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }, delay);
    delay += 200;
  });
});
