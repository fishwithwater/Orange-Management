/**
 * admui-basic v2.1.0 (http://www.admui.com/)
 * Copyright 2015-2019 Admui Team
 * Licensed under the Admui License 1.1 (http://www.admui.com/about/license)
 */
(function(window, document, $) {
  'use strict';

  /* global _, alertify */

  $.components.register('alertify', {
    mode: 'init',
    defaults: {
      type: 'alert',
      theme: 'bootstrap'
    },
    init: function() {
      var defaults;

      if (typeof alertify === 'undefined') {
        return;
      }

      defaults = $.components.getDefaults('alertify');

      $(document).on('click.site.alertify', '[data-plugin="alertify"]', function() {
        var $this = $(this);
        var options = $.extend(true, {}, defaults, $this.data());

        if (options.labelOk) {
          options.okBtn = options.labelOk;
        }

        if (options.labelCancel) {
          options.cancelBtn = options.labelCancel;
        }

        !_.isUndefined(options.delay) && alertify.delay(options.delay);

        !_.isUndefined(options.theme) && alertify.theme(options.theme);

        !_.isUndefined(options.cancelBtn) && alertify.cancelBtn(options.cancelBtn);

        !_.isUndefined(options.okBtn) && alertify.okBtn(options.okBtn);

        !_.isUndefined(options.placeholder) && alertify.delay(options.placeholder);

        !_.isUndefined(options.defaultValue) && alertify.delay(options.defaultValue);

        !_.isUndefined(options.maxLogItems) && alertify.delay(options.maxLogItems);

        !_.isUndefined(options.closeLogOnClick) && alertify.delay(options.closeLogOnClick);

        switch (options.type) {
          case 'alert':
            alertify.alert(options.alertMessage);
            break;
          case 'confirm':
            alertify.confirm(
              options.confirmTitle,
              function() {
                alertify.success(options.successMessage);
              },
              function() {
                alertify.error(options.errorMessage);
              }
            );
            break;
          case 'prompt':
            alertify.prompt(
              options.promptTitle,
              function(str) {
                alertify.success(options.successMessage.replace('%s', str));
              },
              function() {
                alertify.error(options.errorMessage);
              }
            );
            break;
          case 'log':
            alertify.log(options.logMessage);
            break;
          case 'success':
            alertify.success(options.successMessage);
            break;
          case 'error':
            alertify.error(options.errorMessage);
            break;
          default:
            break;
        }
      });
    }
  });
})(window, document, jQuery);
