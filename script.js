document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn, .preview-text button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentText = button.textContent.trim();
      button.textContent = currentText.includes("Get started") ? "Launching..." : "Let's go!";

      setTimeout(() => {
        button.textContent = currentText;
      }, 1200);
    });
  });
});
