var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
    // Efeito CSS de desaparecer
    event.target.parentNode.classList.add("fadeOut");

    // Remove elemento Pai do Evento
    setTimeout(function () {
        event.target.parentNode.remove();
    },700);
});