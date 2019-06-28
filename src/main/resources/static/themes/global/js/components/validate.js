/**
 * admui-basic v2.1.0 (http://www.admui.com/)
 * Copyright 2015-2019 Admui Team
 * Licensed under the Admui License 1.1 (http://www.admui.com/about/license)
 */
(function(window, document, $) {
  'use strict';

  $.components.register('validate', {
    mode: 'init',
    defaults: {},
    init: function() {
      if (!$.fn.validate) {
        return;
      }

      $.validator.setDefaults({
        errorElement: 'small',
        errorPlacement: function(error, element) {
          // 在error 上添加 `invalid-feedback` class
          error.addClass('invalid-feedback');

          element.parent().append(error);
        },
        highlight: function(element) {
          $(element)
            .addClass('is-invalid')
            .removeClass('is-valid');
        },
        unhighlight: function(element, errorClass, validClass) {
          var $valid = $(element);

          if (!validClass) {
            $valid.removeClass('is-invalid is-valid');
          } else {
            $valid.addClass('is-valid').removeClass('is-invalid');
          }
        }
      });
    }
  });
})(window, document, jQuery);
