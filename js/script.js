
$(function() {
    $('.blk').scroll({
        lastAnimation   : 0,
        quietPeriod     : 100,
        animationTime   : 100,
        ScrollUp : function() {
            $(this).append('<div class="sblocker">Blocker</div>');
        },
        ScrollDown : function() {
            $(this).find('.sblocker').last().remove();
        }
    });
});