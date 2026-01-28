//copy script when user clicks copy btn
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Find the nearest script code paragraph
    const codeElement = btn.closest(".script").querySelector(".script-code");
    if (!codeElement) return;

    // Copy text to clipboard
    navigator.clipboard
      .writeText(codeElement.textContent)
      .then(() => {
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = "Copy"), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  });
});
