/***
Version    : 0.1 [Beta]
Author     : Tommy Chiu
Contact    : tommychoo8689@gmail.com
Description: A mini jquery plugin tool to detect the Scroll Up or Scroll Down to trigger anything event.
Last Updated: 13/07/2015
***/

(function($) {
    $.fn.scroll = function( options ) {

        // Default Setting
        var settings = $.extend({
            lastAnimation    : 0,
            quietPeriod      : 500,
            animationTime    : 500,
            ScrollUp         : null,
            ScrollDown       : null
        }, options);

        return this.each( function() {
            var $this = this;
            var lastAnimation = settings.lastAnimation;
            var quietPeriod = settings.quietPeriod;
            var animationTime = settings.animationTime;

            function init(event, delta) {
                deltaOfInterest = delta;
                var timeNow = new Date().getTime();
                if( timeNow - lastAnimation < quietPeriod + animationTime ) {
                    event.preventDefault();
                    return;
                }

                if ( deltaOfInterest < 0 ) {
                    // Call Back
                    if ( $.isFunction( settings.ScrollUp ) ) {
                        settings.ScrollUp.call($this);
                    }
                } else {
                    // Call Back
                    if ( $.isFunction( settings.ScrollDown ) ) {
                        settings.ScrollDown.call($this);
                    }
                }

                lastAnimation = timeNow;
            }

            $(this).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
                event.preventDefault();
                var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
                init(event, delta);
            });

        });

    }
}(jQuery));