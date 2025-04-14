
console.log('JavaScript file loaded successfully!');
let slideIndex = 1;

function showSlides(n) {
  console.log('### In showSlides!');

  let i;
  let slides = document.getElementsByClassName("mySlides");

  console.log('### In showSlides!');
  let thumbnails = document.getElementsByClassName("thumbnail");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
  const divEle = slides[slideIndex-1];
  divEle.style.display = "block";
  thumbnails[slideIndex-1].className += " active";

  const imgEle = divEle.querySelector('img');
  const caption = document.getElementById("caption");
  caption.innerHTML = imgEle.alt;
}

showSlides(slideIndex);

function plusSlides(n) {
  console.log('### In plusSlides!: ' + n);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}