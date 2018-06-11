$().ready(function () {

    var gallery = Array.prototype.slice.call($(".categories .show article"));
    var lightboxCounter = 0;

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
                gallery = Array.prototype.slice.call($(".categories .show article"));
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

    $("article").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();

        var index = gallery.indexOf(this);
        lightboxCounter = index;
        applyGalleryItem(lightboxCounter);
        $(".lightbox").addClass('open');
        $(".site").addClass('close');
    });

    $("div.lightbox button.prev").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        if(lightboxCounter == 0){
            lightboxCounter = gallery.length-1;
        }else{
            lightboxCounter--;
        }
        applyGalleryItem(lightboxCounter);
    });

    $("div.lightbox button.next").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        if(lightboxCounter == (gallery.length-1)){
            lightboxCounter = 0;
        }else{
            lightboxCounter++;
        }
        applyGalleryItem(lightboxCounter);
    });


    $("button.close").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        $("div.lightbox").removeClass('open');
        $("div.site").removeClass('close');
    });

    $(".categories article").height($(window).height() / 2 - 120);

    function applyGalleryItem(counter) {
        var btn = gallery[counter];
        var url = JSON.parse(btn.getAttribute('data-url'));
        var image = btn.getAttribute('data-image');
        var title = btn.getAttribute('data-title');
        $("div.lightbox header h3").html(title);
        $("div.lightbox header a").attr('href',url.url);
        $("div.lightbox header a").html(url.name);
        $("div.lightbox .gallerywrapper").html("<img src='"+image+"' alt='gallery img'>");
    }

});