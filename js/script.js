
$(function() {
    $('.blk').scrolltrigger({
        lastAnimation   : 0,
        quietPeriod     : 100,
        animationTime   : 100,
        swipeMode       : true,
        swipeUp : function() {
            $(this).append('<div class="sblocker">Blocker</div>');
        },
        swipeDown : function() {
            $(this).find('.sblocker').last().remove();
        },
        swipeLeft : function() {
            $(this).find('.sblocker').last().remove();
        },
        swipeRight : function() {
            $(this).append('<div class="sblocker">Blocker</div>');
        },
        scrollUp : function() {
            $(this).append('<div class="sblocker">Blocker</div>');
        },
        scrollDown : function() {
            $(this).find('.sblocker').last().remove();
        }
    });
});