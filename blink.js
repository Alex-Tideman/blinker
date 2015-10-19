(function($) {
    $.fn.blink = function(speed) {

        return this.each(function() {
            var obj = $(this);
            setInterval(function() {
                if ($(obj).css("visibility") == "visible") {
                    $(obj).css('visibility', 'hidden');
                }
                else {
                    $(obj).css('visibility', 'visible');
                }
            }, speed);
        });
    }
}(jQuery))


$('.sentence').blink(500);
