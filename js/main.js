$().ready(function () {

    $(".navigation li").click(function () {
        var index = $(this).index();
        var isactive = $(this).hasClass('active');
        $(".navigation li").removeClass('active');
        $(this).addClass('active');
        if (!isactive) {
            $(".categories article").removeAttr('class');
            $(".categories > div.show article").addClass('animated bounceOutLeft');
            setTimeout(function () {
                $(".categories > div").removeClass('show animated fadeIn');
                $(".categories > div").eq(index).addClass('show animated fadeIn');
            }, 500);
        }
    });

    $("div.lightbox").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
    });

    $(document).click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        $("div.lightbox").removeClass('open');
        $("div.site").removeClass('close');
    });

    $("button.lightbox").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        $(".lightbox").addClass('open');
        $(".site").addClass('close');
    });

    $("button.close").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        $("div.lightbox").removeClass('open');
        $("div.site").removeClass('close');
    });

    $(".categories article").height($("main").height() / 2 - 20);

});