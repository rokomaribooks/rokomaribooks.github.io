export function enableCarousel(root) {
  const track = root.querySelector("[data-carousel-track]");
  const leftBtn = root.querySelector("[data-left]");
  const rightBtn = root.querySelector("[data-right]");

  if (!track) return;

  const scrollByAmount = 280;

  leftBtn?.addEventListener("click", () => track.scrollBy({ left: -scrollByAmount, behavior: "smooth" }));
  rightBtn?.addEventListener("click", () => track.scrollBy({ left: scrollByAmount, behavior: "smooth" }));

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  track.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = track.scrollLeft;
    track.style.cursor = "grabbing";
  });

  window.addEventListener("mouseup", () => {
    isDown = false;
    track.style.cursor = "grab";
  });

  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    const walk = (e.pageX - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });

  track.style.cursor = "grab";
}
