
$(document).ready(() => {
  $("#toggleText").on("click", () => {
    $(".learnMore").toggle();
  });
});

document.getElementById("toggleText").addEventListener("click", function() {
  let text = document.getElementById("learnMoreHdr");
  text.style.display = text.style.display === "none" ? "block" : "none";
});


