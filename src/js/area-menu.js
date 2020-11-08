
(() => {
    
    //A estrutura abaixo segira a ativação da função animaScroll, impedindo que ele execulte por diversas vezes seguida
    let debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
 
    $(document).ready(function () {
        
        let target = $(".scroll-anime");

        //fórmula offset, onde ele vai pegar o tamanho da janela e nunca vai deixar mais do que 3/4 da janela em branco, vai ser um valor dinâmico
        let offSet = $(window).height() * 3 / 4;

        //Onde chamamos a função para caso algum item esteja em um área para ser animado ele já execulta, e assim não fica uma área em branco muito grande
        animaScroll();

        function animaScroll() {

            let documentTop = $(document).scrollTop();

            target.each(function () {

                let itenTop = $(this).offset().top;

                if (documentTop > itenTop - offSet) {
                    $(this).addClass("anime-start");
                } else {
                    $(this).removeClass("anime-start");
                }

            });
        }

        $(document).scroll(debounce(function () {
            animaScroll();
        }, 200))

    })

})();