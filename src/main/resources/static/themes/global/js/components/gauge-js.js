/**
 * admui-basic v2.1.0 (http://www.admui.com/)
 * Copyright 2015-2019 Admui Team
 * Licensed under the Admui License 1.1 (http://www.admui.com/about/license)
 */
(function(window, document, $) {
  'use strict';

  /* global Gauge, Donut */

  $.components.register('gauge', {
    mode: 'init',
    defaults: {
      lines: 12,
      angle: 0.12,
      lineWidth: 0.4,
      pointer: {
        length: 0.68,
        strokeWidth: 0.03,
        color: $.getColor('blue-grey', 400)
      },
      limitMax: true,
      colorStart: $.getColor('blue-grey', 200),
      colorStop: $.getColor('blue-grey', 200),
      strokeColor: $.getColor('purple', 500),
      generateGradient: true
    },
    init: function(context) {
      var self = this;
      if (typeof Gauge === 'undefined') {
        return;
      }

      // var defaults = $.components.getDefaults('gauge');

      $('[data-plugin="gauge"]', context).each(function() {
        var $item = $(this);
        var options = $item.data();
        var $text = $item.find('.gauge-label');
        var $canvas = $item.find('canvas');
        var gauge;

        $.extend(true, options, self.defaults);

        if ($canvas.length === 0) {
          return;
        }

        gauge = new Gauge($canvas[0]).setOptions(options);

        $item.data('gauge', gauge);

        gauge.animationSpeed = 50;
        gauge.maxValue = $item.data('max-value');
        gauge.set($item.data('value'));

        if ($text.length > 0) {
          gauge.setTextField($text[0]);
        }
      });
    }
  });

  $.components.register('donut', {
    mode: 'init',
    defaults: {
      lines: 12,
      angle: 0.3,
      lineWidth: 0.08,
      pointer: {
        length: 0.9,
        strokeWidth: 0.035,
        color: $.getColor('blue-grey', 400)
      },
      limitMax: false, // If true, the pointer will not go past the end of the gauge
      colorStart: $.getColor('blue-grey', 200),
      colorStop: $.getColor('blue-grey', 200),
      strokeColor: $.getColor('purple', 500),
      generateGradient: true
    },
    init: function(context) {
      var self = this;
      if (typeof Gauge === 'undefined') {
        return;
      }

      // var defaults = $.components.getDefaults('donut');

      $('[data-plugin="donut"]', context).each(function() {
        var $item = $(this);
        var options = $item.data();
        var $text = $item.find('.donut-label');
        var $canvas = $item.find('canvas');
        var donut;

        $.extend(true, options, self.defaults);

        if ($canvas.length === 0) {
          return;
        }

        donut = new Donut($canvas[0]).setOptions(options);

        $item.data('donut', donut);

        donut.animationSpeed = 50;
        donut.maxValue = $item.data('max-value');
        donut.set($item.data('value'));

        if ($text.length > 0) {
          donut.setTextField($text[0]);
        }
      });
    }
  });
})(window, document, jQuery);
