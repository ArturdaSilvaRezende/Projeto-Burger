/**
 * Projeto Burger Bachelor Maxican versão 1.0
 * @author Artur da Silva Rezende
 */

"use strict";

//A estrutura abaixo faz o controle do show e hide do navbar-header
(() => {

    $(document).ready(() => {

        const btnShowMenu = $('#btn-menu')
        const navbarMain = $('#navbar-main')

        btnShowMenu.on('click', function () {
            navbarMain.slideToggle()
        })

        window.onresize = function () {
            if ($(window).width() > 992) {
                navbarMain.show();
                navbarMain.css("display", "flex").css("align-items", "center");
            }
        }

    });

})();

//A estrutura abaixo faz o controle dos sliders 
(() => {

    $(document).ready(function () {

        const slider_img = $('.slider img'); //Essa variável vai pegar as imagens
        let indeceMaximo = $('.slider img').length; //Essa variável retorna a quantidade de imagens

        let indeceAtual = 0;
        let delay = 7000;

        const prev_control = $("#prev-slider");
        prev_control.click(function () {
            controlSlider(-1);
        })

        const next_control = $("#next-slider");
        next_control.click(function () {
            controlSlider(1);
        })

        initSlider();
        bulletsControl();

        function initSlider() {

            //A estrutura abaixo faz a inserção dos bullets dinâmicamente
            for (let i = 0; i < indeceMaximo; i++) {

                if (i == 0) {
                    $('.bullets-silder').append('<span class="bg-bullets"></span>')
                } else {
                    $('.bullets-silder').append('<span></span>')
                }
            }

            slider_img.eq(0).fadeIn();
            setInterval(trocaSlider, delay);
        }

        function bulletsControl() {

            $('.bullets-silder span').click(function () {
                slider_img.eq(indeceAtual).stop().fadeOut(1000);
                indeceAtual = $(this).index();
                slider_img.eq(indeceAtual).stop().fadeIn(1000);
                $('.bullets-silder span').css('background-color', 'transparent'); //Esse muda a cor de todos os bullets
                $(this).css('background-color', '#6610f2');//Esse muda a cor do bullet atual
            })
        }

        function trocaSlider() {
            slider_img.eq(indeceAtual).fadeOut(1000);

            indeceAtual += 1;

            //A estrutura abaixo faz o controle de looping dos sliders
            if (indeceAtual == indeceMaximo) {
                indeceAtual = 0;
            }

            $('.bullets-silder span').css('background-color', 'transparent');
            $('.bullets-silder span').eq(indeceAtual).css('background-color', '#6610f2');
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
            $('.bullets-silder span').css('background-color', 'transparent');
            $('.bullets-silder span').eq(indeceAtual).css('background-color', '#6610f2');

        }


    });

})();

//A estrutura abaixo faz o controle do scrollTop header

(() => {

    const headerScroll = $("#header");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            headerScroll.addClass('header-scroll')
        } else {
            headerScroll.removeClass('header-scroll')
        }
    });

})();

//A estrutura abaixo faz o controle do animation scroll da área de menu

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

//A estrutura abaixo faz o controle da animação do best selling hamburgers 

(()=> {

    $(document).ready(function() {

        const best_selling_burger = $('.burger');

        best_selling_burger.mouseenter(function() {
            $(this).addClass('best-selling-burger')
        })

        best_selling_burger.mouseleave(function() {
            if($(this).addClass('best-selling-burger')) {
                $(this).removeClass('best-selling-burger')
            }
        })
    })

})();

//A estrutura abaixo controla o show e hide do video burger

(()=> {

    $(document).ready(function() {
        const btn_show_video = $('.btn-show-video');
        const btn_hide_video = $('.btn-close-video');
        const area_video = $('.video-burger-container');
        const video_burger = $('.video-burger');

        btn_show_video.click(function(){
            area_video.fadeIn(1000);
        })

        btn_hide_video.click(function(){
            area_video.fadeOut(1000);
            video_burger.trigger('pause');
        })

       
    })
  
})();

//A estrutura abaixo controla o show e hide do insagram área

(()=> {

    $(document).ready(function() {
        
        /* instagram área 01 */
        const btn_show_01 = $('#show-insta-01');
        const btn_hide_01 = $('#hide-insta-01')
        const instagram_area_01 = $('.item-01');

        btn_show_01.click(function() {
            instagram_area_01.fadeIn(1000);
        })

        btn_hide_01.click(function() {
            instagram_area_01.fadeOut(1000);
        })

         /* instagram área 02 */
         const btn_show_02 = $('#show-insta-02');
         const btn_hide_02 = $('#hide-insta-02')
         const instagram_area_02 = $('.item-02');
 
         btn_show_02.click(function() {
             instagram_area_02.fadeIn(1000);
         })
 
         btn_hide_02.click(function() {
             instagram_area_02.fadeOut(1000);
         })

          /* instagram área 03 */
          const btn_show_03 = $('#show-insta-03');
          const btn_hide_03 = $('#hide-insta-03')
          const instagram_area_03 = $('.item-03');
  
          btn_show_03.click(function() {
              instagram_area_03.fadeIn(1000);
          })
  
          btn_hide_03.click(function() {
              instagram_area_03.fadeOut(1000);
          })


         /* instagram área 04 */
         const btn_show_04 = $('#show-insta-04');
         const btn_hide_04 = $('#hide-insta-04')
         const instagram_area_04 = $('.item-04');
 
         btn_show_04.click(function() {
             instagram_area_04.fadeIn(1000);
         })
 
         btn_hide_04.click(function() {
             instagram_area_04.fadeOut(1000);
         })

    });

})();

//A estrutura abaixo faz o controle dos links clicado no nav-header

(()=> {

    $(document).ready(function() {

        const nav_header = $('.nav-header a');
        const body_animation = $('html, body');

        nav_header.click(function(e) {
            e.preventDefault();
            const id_header = $(this).attr('href');
            const targetOffset = $(id_header).offset().top;
            //let heightHeader = $('.header-area').innerHeight();
        
            body_animation.animate({
                scrollTop: targetOffset - 110
            }, 1000);
        })

    })

})();