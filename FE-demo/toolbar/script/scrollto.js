define(['jquery'], function ($) {
    function ScrollTo(opts) {
        this.$el = $('html,body');
        this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);
    }
    ScrollTo.prototype.move = function () {
        var opts = this.opts;
        if ($(window).scrollTop() != opts.dest) {
           if(!this.$el.is(':animated')){
                this.$el.animate({
                scrollTop: opts.dest
            }, opts.speed)

           }
        }
    };

    ScrollTo.prototype.go = function () {
        var dest = this.opts.dest;
        if($(window).scrollTop()!=dest){
            this.$el.scrollTop(dest);
        }
    }
    ScrollTo.DEFAULTS = {
        dest: 0,
        speed: 800
    };
    return {
        ScrollTo: ScrollTo
    };
});