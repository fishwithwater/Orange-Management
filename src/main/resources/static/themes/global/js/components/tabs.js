/**
 * admui-basic v2.1.0 (http://www.admui.com/)
 * Copyright 2015-2019 Admui Team
 * Licensed under the Admui License 1.1 (http://www.admui.com/about/license)
 */
(function(window, document, $) {
  'use strict';

  $.components.register('verticalTab', {
    mode: 'init',
    init: function(context) {
      if (!$.fn.matchHeight) {
        return;
      }

      $('.nav-tabs-vertical', context).each(function() {
        $(this)
          .children()
          .matchHeight();
      });
    }
  });

  $.components.register('horizontalTab', {
    mode: 'init',
    init: function(context) {
      var $nav;

      if (!$.fn.responsiveTab) {
        return;
      }

      $nav = $('[data-approve="nav-tabs"]', context);
      $nav.each(function() {
        var $item = $(this);

        $item.responsiveTab($.extend(true, {}, $item.data()));
      });
    }
  });
})(window, document, jQuery);
