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

    $(".categories article").height($("main").height() / 2 - 20);

});