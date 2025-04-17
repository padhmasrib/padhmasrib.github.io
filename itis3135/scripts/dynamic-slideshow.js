  // List of photo addresses and captions
  const photos = [
    { src: "images/slideshow/Professor.jpg", caption: "P - Picture of Professor" },
    { src: "images/slideshow/Apple-laptop.jpg", caption: "A - Picture of Apple Laptop" },
    { src: "images/slideshow/Door.jpg", caption: "D - Picture of Door" },
    { src: "images/slideshow/Hand-Holding-Masks.jpg", caption: "H - Picture of Hand Holding Masks" },
    { src: "images/slideshow/Masks.jpg", caption: "M - Picture of Masks" },
    { src: "images/slideshow/Arm.jpg", caption: "A - Picture of Arm" },
    { src: "images/slideshow/Stairs.jpg", caption: "S - Picture of Stairs" },
    { src: "images/slideshow/Rug.jpg", caption: "R - Picture of Rug" },
    { src: "images/slideshow/iPhone.jpg", caption: "I - Picture of iPhone" },
    { src: "images/slideshow/Board.jpg", caption: "B - Picture of Board" },
    { src: "images/slideshow/Airpod-cases.jpg", caption: "A - Picture of Airpod Cases" },
    { src: "images/slideshow/Stargate.jpg", caption: "S - Picture of Stargate" },
    { src: "images/slideshow/Keys.jpg", caption: "K - Picture of Keys" },
    { src: "images/slideshow/Arm-rest.jpg", caption: "A - Picture of Arm-rest" },
    { src: "images/slideshow/Ring.jpg", caption: "R - Picture of Ring" },
    { src: "images/slideshow/Air-conditioner-vent.jpg", caption: "A - Picture of Air-conditioner Vent" },
    { src: "images/slideshow/Notebook.jpg", caption: "N - Picture of Notebook" }
  ];

  // Select the container for images
  const container = document.querySelector('.s-container');

  // Add images to the container dynamically
  photos.forEach((photo, index) => {
    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.caption;
    img.classList.add('s-image');
    if (index === 0) img.classList.add('active'); // Set the first image as active by default
    container.insertBefore(img, container.querySelector('.caption-container'));
  });

  // Current slide index
  let currentIndex = 0;

  // Change slides
  function changeSlide(step) {
    const images = document.querySelectorAll('.s-image');
    images[currentIndex].classList.remove('active'); // Hide current image
    currentIndex = (currentIndex + step + images.length) % images.length; // Calculate new index (wrap around)
    images[currentIndex].classList.add('active'); // Show new image

    // Update caption
    const caption = document.getElementById('caption');
    caption.textContent = photos[currentIndex].caption;
  }

  // Initialize caption
  document.getElementById('caption').textContent = photos[0].caption;

