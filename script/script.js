document.addEventListener("DOMContentLoaded", () => {
    const SignUpButton = document.getElementById("SignUpButton");
    const modal = document.getElementById("SignUpModal");
    const closeModal = document.getElementById("closeModal");

    // Abrir modal
    SignUpButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Fechar modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fechar modal ao clicar fora
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
