
document.querySelectorAll(".expand").forEach(button => {
  button.addEventListener("click", function() {
      let details = this.nextElementSibling;
      details.style.display = details.style.display === "none" ? "block" : "none";
  });
});

document.querySelectorAll(".faq-toggle").forEach(button => {
  button.addEventListener("click", function() {
      let faq = this.nextElementSibling;
      faq.style.display = faq.style.display === "none" ? "block" : "none";
  });
});