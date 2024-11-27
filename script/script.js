document.addEventListener("DOMContentLoaded", () => {
    const SignUpButton = document.getElementById("SignUpButton");
    const modal = document.getElementById("SignUpModal");
    const closeModal = document.getElementById("closeModal");

    SignUpButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.querySelectorAll('.zoom-image').forEach((image) => {
    image.addEventListener('click', () => {
      const zoomedImage = image.cloneNode();
      zoomedImage.style.position = 'fixed';
      zoomedImage.style.top = '0';
      zoomedImage.style.left = '0';
      zoomedImage.style.width = '100vw';
      zoomedImage.style.height = '100vh';
      zoomedImage.style.objectFit = 'contain';
      zoomedImage.style.zIndex = '1000';
      zoomedImage.style.cursor = 'zoom-out';
  
      document.body.appendChild(zoomedImage);
  
      zoomedImage.addEventListener('click', () => {
        zoomedImage.remove();
      });
    });
  });
  
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); 
  }

  function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    showSlides();
  }