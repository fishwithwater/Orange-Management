/**
 * admui-basic v2.1.0 (http://www.admui.com/)
 * Copyright 2015-2019 Admui Team
 * Licensed under the Admui License 1.1 (http://www.admui.com/about/license)
 */
(function(window, document, $) {
  'use strict';

  $.components.register('animate-list', {
    mode: 'init',

    defaults: {
      child: '.panel',
      duration: 250,
      delay: 50,
      animate: 'scale-up',
      fill: 'backwards'
    },

    init: function() {
      var self = this;

      $('[data-plugin=animateList]').each(function() {
        var $this = $(this);
        var options = $.extend({}, self.defaults, $this.data(), true);

        var AnimatedBox = function($el, opts) {
          var delay = 0;
          var that = this;

          this.options = opts;
          this.$children = $el.find(opts.child);
          this.$children.addClass('animation-' + opts.animate);
          this.$children.css('animation-fill-mode', opts.fill);
          this.$children.css('animation-duration', opts.duration + 'ms');

          this.$children.each(function() {
            $(this).css('animation-delay', delay + 'ms');
            delay += that.options.delay;
          });
        };

        AnimatedBox.prototype = {
          run: function(type) {
            var that = this;

            this.$children.removeClass('animation-' + this.options.animate);
            if (typeof type !== 'undefined') {
              this.options.animate = type;
            }
            setTimeout(function() {
              that.$children.addClass('animation-' + that.options.animate);
            }, 0);
          }
        };

        $this.data('animateList', new AnimatedBox($this, options));
      });
    }
  });
})(window, document, jQuery);
