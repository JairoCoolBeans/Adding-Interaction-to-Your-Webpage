document.addEventListener("DOMContentLoaded", () => {

  const darkBtn = document.getElementById("darkModeBtn");
  const factBtn = document.getElementById("funFactBtn");
  const factText = document.getElementById("funFact");

  // Dark mode toggle
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  //Fun fact interaction
  factBtn.addEventListener("click", () => {
    factText.textContent = "Fun Fact: I enjoy catching lizards when I see them!";
  });

});
