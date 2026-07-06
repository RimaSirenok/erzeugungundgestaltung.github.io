document.querySelectorAll(".wrapper").forEach(wrapper => {
  const slider = wrapper.querySelector("input");
  const img = wrapper.querySelector(".img-2");
  const line = wrapper.querySelector(".drag-line");

  slider.addEventListener("input", () => {
    const val = slider.value;
    img.style.width = val + "%";
    line.style.left = val + "%";
  });
});






