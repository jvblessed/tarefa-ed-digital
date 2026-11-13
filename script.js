const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function(botaoCurtir) {

    let curtiu = false;

    botaoCurtir.addEventListener("click", function() {

        const contador = botaoCurtir.querySelector("span");

        if (!curtiu) {

            contador.textContent = Number(contador.textContent) + 1;
            curtiu = true;

        } else {

            contador.textContent = Number(contador.textContent) - 1;
            curtiu = false;

        }

    });

});
