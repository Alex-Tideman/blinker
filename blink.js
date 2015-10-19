(function($) {
    $.fn.blink = function(speed) {
        var defaults = {
            delay: 500
        };

        var speed = $.extend(defaults, speed);

        return this.each(function() {
            var obj = $(this);
            setInterval(function() {
                if ($(obj).css("visibility") == "visible") {
                    $(obj).css('visibility', 'hidden');
                }
                else {
                    $(obj).css('visibility', 'visible');
                }
            }, speed.delay);
        });
    }
}(jQuery))



$('div').blink({ delay: 400});
