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