/**
 * admui-basic v2.1.0 (http://www.admui.com/)
 * Copyright 2015-2019 Admui Team
 * Licensed under the Admui License 1.1 (http://www.admui.com/about/license)
 */
(function(window, document, $) {
  'use strict';

  /* global Switchery */

  $.components.register('switchery', {
    mode: 'init',
    defaults: {
      color: $.getColor('purple', 600)
    },
    init: function(context) {
      var self = this;
      if (typeof Switchery === 'undefined') {
        return;
      }

      // var defaults = $.components.getDefaults('switchery');

      $('[data-plugin="switchery"]', context).each(function() {
        var options = $.extend({}, self.defaults, $(this).data());
        return new Switchery(this, options);
      });
    }
  });
})(window, document, jQuery);
