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