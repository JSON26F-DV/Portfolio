const targets = [
  ["home", "circle1"],
  ["projects", "circle2"],
  ["resume", "circle3"],
  ["aboutme", "circle4"],
  ["mmail", "circle5"],
  ["group", "circle6"],
  ["reports", "circle7"],
];

targets.forEach(([boxId, circleId]) => {
  const box = document.getElementById(boxId);
  const circle = document.getElementById(circleId);

  if (!box || !circle) return;

  box.addEventListener("mouseenter", () => {
    circle.style.display = "block";
  });

  box.addEventListener("mouseleave", () => {
    circle.style.display = "none";
  });

  box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left - circle.offsetWidth / 2;
    const y = e.clientY - rect.top - circle.offsetHeight / 2;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
  });
});

function animate(hello, element) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const box1 = document.querySelector(element);

      if (entry.isIntersecting) {
        setTimeout(() => {
          box1.classList.add("active");
        }, 1);
      } else {
        box1.classList.remove("active");
      }
    });
  });
  const helloElement = document.getElementById(hello);
  observer.observe(helloElement);
}
animate("homie", ".home");
animate("paint", ".projects");
animate("backg", ".resume");
animate("cont", ".mmail");

const buttons = document.querySelectorAll(".nav_link");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((pluh) => {
      pluh.classList.remove("active");
    });
    btn.classList.add("active");
  });
});
