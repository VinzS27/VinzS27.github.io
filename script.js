document.addEventListener("DOMContentLoaded", () => {
  function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petalo");
    petal.textContent = "🌸";
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.animationDuration = 5 + Math.random() * 5 + "s";
    document.body.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 10000);
  }

  setInterval(createPetal, 1000);
});
