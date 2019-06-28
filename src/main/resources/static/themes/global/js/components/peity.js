/**
 * admui-basic v2.1.0 (http://www.admui.com/)
 * Copyright 2015-2019 Admui Team
 * Licensed under the Admui License 1.1 (http://www.admui.com/about/license)
 */
(function(window, document, $) {
  'use strict';

  $.components.register('peityBar', {
    mode: 'init',
    defaults: {
      delimiter: ',',
      fill: [$.getColor('purple', 400)],
      height: 18,
      max: null,
      min: 0,
      padding: 0.1,
      width: 44
    },
    init: function(context) {
      var self = this;
      if (typeof $.fn.peity === 'undefined') {
        return;
      }

      // var defaults = $.components.getDefaults('peityBar');

      $('[data-plugin="peityBar"]', context).each(function() {
        var $item = $(this);
        var options = $item.data();
        var skinColors;

        if (options.skin && $.getColor(options.skin)) {
          skinColors = $.getColor(options.skin);
          self.defaults.fill = [skinColors[400]];
        }
        $.extend(true, options, self.defaults);

        $item.peity('bar', options);
      });
    }
  });

  $.components.register('peityDonut', {
    mode: 'init',
    defaults: {
      delimiter: null,
      fill: [$.getColor('purple', 700), $.getColor('purple', 400), $.getColor('purple', 200)],
      height: null,
      innerRadius: null,
      radius: 11,
      width: null
    },
    init: function(context) {
      var self = this;
      if (typeof $.fn.peity === 'undefined') {
        return;
      }

      // var defaults = $.components.getDefaults('peityDonut');

      $('[data-plugin="peityDonut"]', context).each(function() {
        var $item = $(this);
        var options = $item.data();
        var skinColors;

        if (options.skin && $.getColor(options.skin)) {
          skinColors = $.getColor(options.skin);
          self.defaults.fill = [skinColors[700], skinColors[400], skinColors[200]];
        }
        $.extend(true, options, self.defaults);

        $item.peity('donut', options);
      });
    }
  });

  $.components.register('peityLine', {
    mode: 'init',
    defaults: {
      delimiter: ',',
      fill: [$.getColor('purple', 200)],
      height: 18,
      max: null,
      min: 0,
      stroke: $.getColor('purple', 600),
      strokeWidth: 1,
      width: 44
    },
    init: function(context) {
      var self = this;
      if (typeof $.fn.peity === 'undefined') {
        return;
      }

      // var defaults = $.components.getDefaults('peityLine');

      $('[data-plugin="peityLine"]', context).each(function() {
        var $item = $(this);
        var options = $item.data();
        var skinColors;

        if (options.skin && $.getColor(options.skin)) {
          skinColors = $.getColor(options.skin);
          self.defaults.fill = [skinColors[200]];
          self.defaults.stroke = skinColors[600];
        }
        $.extend(true, options, self.defaults);

        $item.peity('line', options);
      });
    }
  });

  $.components.register('peityPie', {
    mode: 'init',
    defaults: {
      delimiter: null,
      fill: [$.getColor('purple', 700), $.getColor('purple', 400), $.getColor('purple', 200)],
      height: null,
      radius: 11,
      width: null
    },
    init: function(context) {
      var self = this;
      if (typeof $.fn.peity === 'undefined') {
        return;
      }

      // var defaults = $.components.getDefaults('peityPie');

      $('[data-plugin="peityPie"]', context).each(function() {
        var $item = $(this);
        var options = $item.data();
        var skinColors;

        if (options.skin && $.getColor(options.skin)) {
          skinColors = $.getColor(options.skin);
          self.defaults.fill = [skinColors[700], skinColors[400], skinColors[200]];
        }
        $.extend(true, options, self.defaults);

        $item.peity('pie', options);
      });
    }
  });
})(window, document, jQuery);
