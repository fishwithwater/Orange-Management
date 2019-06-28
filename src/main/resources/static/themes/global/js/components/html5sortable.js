/**
 * admui-basic v2.1.0 (http://www.admui.com/)
 * Copyright 2015-2019 Admui Team
 * Licensed under the Admui License 1.1 (http://www.admui.com/about/license)
 */
(function(window, document, $) {
  'use strict';

  /* global sortable */

  $.components.register('sortable', {
    defaults: {},
    mode: 'init',
    init: function(context) {
      if (typeof sortable === 'undefined') {
        return;
      }

      $('[data-plugin="sortable"]', context).each(function(i, block) {
        sortable(block);
      });
    }
  });
})(window, document, jQuery);
