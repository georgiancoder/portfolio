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
        $("body").removeClass('close');
        $(".lightbox header").removeClass('line');
    });


    $("div.lightbox button.prev").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        if (lightboxCounter == 0) {
            lightboxCounter = gallery.length - 1;
        } else {
            lightboxCounter--;
        }
        applyGalleryItem(lightboxCounter);
    });

    $("div.lightbox button.next").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        if (lightboxCounter == (gallery.length - 1)) {
            lightboxCounter = 0;
        } else {
            lightboxCounter++;
        }
        applyGalleryItem(lightboxCounter);
    });


    $("button.close").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        $("div.lightbox").removeClass('open');
        $("body").removeClass('close');
        $(".lightbox header").removeClass('line');
    });
    if ($(window).innerWidth() > 580) {
        $(".categories article").height($(window).height() / 2 - 120);
    }

    if ($(window).innerWidth() < 870) {
        $("article").click(function (event) {
            event.stopPropagation();
            event.stopImmediatePropagation();
            $(".burger").data('role', 'lightbox').addClass('open');
            var index = gallery.indexOf(this);
            lightboxCounter = index;
            applyGalleryItem(lightboxCounter);
            $(".lightbox").addClass('open');
        });
    } else {
        $("article").click(function (event) {
            event.stopPropagation();
            event.stopImmediatePropagation();

            var index = gallery.indexOf(this);
            lightboxCounter = index;
            applyGalleryItem(lightboxCounter);
            $(".lightbox").addClass('open');
            $("body").addClass('close');
            setTimeout(function () {
                $(".lightbox header").addClass('line');
            }, 300);
        });
    }

    $(".burger").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        if ($(this).hasClass('open') && $(this).data('role') == 'contact') {
            $(this).removeClass('open').data('role', '');
            $("body > aside").removeClass('open');
        } else if($(this).hasClass('open') && $(this).data('role') == 'lightbox'){
            $(this).removeClass('open').data('role', '');
            $(".lightbox").removeClass('open');
        } else {
            $(this).data('role', 'contact').addClass('open');
            $("body > aside").addClass('open');
        }
    });

    function applyGalleryItem(counter) {
        var btn = gallery[counter];
        var url = JSON.parse(btn.getAttribute('data-url'));
        var image = btn.getAttribute('data-image');
        var title = btn.getAttribute('data-title');
        $("div.lightbox header h3").html(title);
        $("div.lightbox header a").attr('href', url.url);
        if($(window).innerWidth() > 870){
            $("div.lightbox header a").html(url.name);
        }else{
            $("div.lightbox header a").html('VIEW LINK');
        }

        $("div.lightbox .gallerywrapper").html("<img src='" + image + "' alt='gallery img'>");
    }

});