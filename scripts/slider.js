(function ($) {
    var elWrap = $('#slider1, #slider2'),
            el = elWrap.find('img'),
            indexImg = 1,
            indexMax = el.length;

    function change() {
        el.fadeOut(500);
        el.filter(':nth-child(' + indexImg + ')').fadeIn(500);
    }

    function autoCange() {
        indexImg++;
        if (indexImg > indexMax) {
            indexImg = 1;
        }
        change();
    }
    var interval = setInterval(autoCange, 3000);

    elWrap.mouseover(function () {
        clearInterval(interval);
    });
    elWrap.mouseout(function () {
        interval = setInterval(autoCange, 3000);
    });

    elWrap.click(function () {
        indexImg++;
        if (indexImg > indexMax) {
            indexImg = 1;
        }
        change();
    });
})(jQuery);