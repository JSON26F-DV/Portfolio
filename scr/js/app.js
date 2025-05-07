function setupFollow(boxId, circleId) {
  const box = document.getElementById(boxId);
  const circle = document.getElementById(circleId);

  box.addEventListener("mouseenter", () => {
    circle.style.display = "block";
  });

  box.addEventListener("mouseleave", () => {
    circle.style.display = "none";
  });

  box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left - 15;
    const y = e.clientY - rect.top - 15;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
  });
}

setupFollow("home", "circle1");
setupFollow("projects", "circle2");
setupFollow("resume", "circle3");
setupFollow("aboutme", "circle4");
setupFollow("mmail", "circle5");
setupFollow("group", "circle6");
setupFollow("reports", "circle7");

function animate(hello, element) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const box1 = document.querySelector(element);

      if (entry.isIntersecting) {
        box1.classList.add("active");
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
