//A estrutura abaixo faz o controle dos sliders
(() => {
  $(document).ready(function () {
    const slider_img = $(".slider img"); //Essa variável vai pegar as imagens
    let indeceMaximo = $(".slider img").length; //Essa variável retorna a quantidade de imagens

    let indeceAtual = 0;
    let delay = 7000;

    const prev_control = $("#prev-slider");
    prev_control.click(function () {
      controlSlider(-1);
    });

    const next_control = $("#next-slider");
    next_control.click(function () {
      controlSlider(1);
    });

    initSlider();
    bulletsControl();

    function initSlider() {
      //A estrutura abaixo faz a inserção dos bullets dinâmicamente
      for (let i = 0; i < indeceMaximo; i++) {
        if (i == 0) {
          $(".bullets-silder").append('<span class="bg-bullets"></span>');
        } else {
          $(".bullets-silder").append("<span></span>");
        }
      }

      slider_img.eq(0).fadeIn();
      setInterval(trocaSlider, delay);
    }

    function bulletsControl() {
      $(".bullets-silder span").click(function () {
        slider_img.eq(indeceAtual).stop().fadeOut(1000);
        indeceAtual = $(this).index();
        slider_img.eq(indeceAtual).stop().fadeIn(1000);
        $(".bullets-silder span").css("background-color", "transparent"); //Esse muda a cor de todos os bullets
        $(this).css("background-color", "#6610f2"); //Esse muda a cor do bullet atual
      });
    }

    function trocaSlider() {
      slider_img.eq(indeceAtual).fadeOut(1000);

      indeceAtual += 1;

      //A estrutura abaixo faz o controle de looping dos sliders
      if (indeceAtual == indeceMaximo) {
        indeceAtual = 0;
      }

      $(".bullets-silder span").css("background-color", "transparent");
      $(".bullets-silder span")
        .eq(indeceAtual)
        .css("background-color", "#6610f2");
      slider_img.eq(indeceAtual).fadeIn(1000);
    }

    function controlSlider(control) {
      slider_img.eq(indeceAtual).fadeOut(1000);

      indeceAtual += control;

      //A estrutura abaixo faz o controle de looping dos sliders
      if (indeceAtual == indeceMaximo) {
        indeceAtual = 0;
      } else if (indeceAtual < 0) {
        indeceAtual = indeceMaximo - 1;
      }

      slider_img.eq(indeceAtual).fadeIn(1000);
      $(".bullets-silder span").css("background-color", "transparent");
      $(".bullets-silder span")
        .eq(indeceAtual)
        .css("background-color", "#6610f2");
    }
  });
})();
