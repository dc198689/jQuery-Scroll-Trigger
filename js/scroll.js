/***
Version    : 0.2 [Beta]
Author     : Tommy Chiu
Contact    : tommychoo8689@gmail.com
Description: A mini jquery plugin tool to detect the Scroll Up or Scroll Down to trigger anything event.
Last Updated: 17/07/2015
***/

(function($) {
    $.fn.scrolltrigger = function( options ) {

        // Default Setting
        var settings = $.extend({
            preventDefault: true,
            threshold: 20,

            lastAnimation    : 0,
            quietPeriod      : 500,
            animationTime    : 500,

            swipeMode        : false,
            swipeUp          : null,
            swipeDown        : null,
            swipeLeft        : null,
            swipeRight       : null,

            scrollUp         : null,
            scrollDown       : null
        }, options);

        return this.each( function() {

            var $this = this;
            var lastAnimation = settings.lastAnimation;
            var quietPeriod = settings.quietPeriod;
            var animationTime = settings.animationTime;
            var swipeMode = settings.swipeMode;

            if ( navigator.userAgent.match(/iPad|iPhone|iPod/g) ) {
                var threshold = 10;
            } else {
                var threshold = settings.threshold;
            }

            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

                if (swipeMode == true) {

                    var startX,
                    startY,
                    isMoving = false;

                    function onTouchEnd() {
                        $this.removeEventListener('touchmove', onTouchMove);
                        $this.removeEventListener('touchend', onTouchEnd);
                        isMoving = false;
                    }
                    function onTouchMove(e) {
                        if ( settings.preventDefault == true ) {
                            e.preventDefault();
                        }
                        if ( isMoving ) {
                            var x = e.touches[0].pageX;
                            var y = e.touches[0].pageY;
                            var dx = startX - x;
                            var dy = startY - y;
                            var dir;
                            if ( Math.abs(dx) >= threshold ) {
                                //dir = dx > 0 ? 'left' : 'right'
                                if ( dx > 0 ) {
                                    settings.swipeLeft.call($this);
                                } else {
                                    settings.swipeRight.call($this);
                                }
                            } else if ( Math.abs(dy) >= threshold ) {
                                //dir = dy > 0 ? 'down' : 'up'
                                if ( dx > 0 ) {
                                    settings.swipeDown.call($this);
                                } else {
                                    settings.swipeUp.call($this);
                                }
                            }

                            onTouchEnd.call($this);

                        }
                    }
                    function onTouchStart(e) {
                        if ( e.touches.length == 1 ) {
                            startX = e.touches[0].pageX;
                            startY = e.touches[0].pageY;
                            isMoving = true;
                            $this.addEventListener('touchmove', onTouchMove, false);
                            $this.addEventListener('touchend', onTouchEnd, false);
                        }
                    }
                    function setup() {
                        $this.addEventListener && $this.addEventListener('touchstart', onTouchStart, false);
                    }
                    function teardown() {
                        $this.removeEventListener('touchstart', onTouchStart);
                    }

                    setup();

                } else {
                    //alert('Oh Sorry, you should turn on the swipe mode.');
                }

            } else {

                function init(event, delta) {
                    deltaOfInterest = delta;
                    var timeNow = new Date().getTime();
                    if( timeNow - lastAnimation < quietPeriod + animationTime ) {
                        event.preventDefault();
                        return;
                    }

                    if ( deltaOfInterest < 0 ) {
                        // Call Back
                        if ( $.isFunction( settings.scrollUp ) ) {
                            settings.scrollUp.call($this);
                        }
                    } else {
                        // Call Back
                        if ( $.isFunction( settings.scrollDown ) ) {
                            settings.scrollDown.call($this);
                        }
                    }
                    lastAnimation = timeNow;
                }

                $(this).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
                    event.stopPropagation();
                    event.preventDefault();
                    var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
                    init(event, delta);
                });

            }

        });

    }
}(jQuery));