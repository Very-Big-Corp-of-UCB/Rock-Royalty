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

document.querySelectorAll(".zoom-image").forEach((image) => {
  image.addEventListener("click", () => {
    const zoomedImage = image.cloneNode();
    zoomedImage.style.position = "fixed";
    zoomedImage.style.top = "0";
    zoomedImage.style.left = "0";
    zoomedImage.style.width = "100vw";
    zoomedImage.style.height = "100vh";
    zoomedImage.style.objectFit = "contain";
    zoomedImage.style.zIndex = "1000";
    zoomedImage.style.cursor = "zoom-out";

    document.body.appendChild(zoomedImage);

    zoomedImage.addEventListener("click", () => {
      zoomedImage.remove();
    });
  });
});
