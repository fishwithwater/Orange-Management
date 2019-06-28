/**
 * admui-basic v2.1.0 (http://www.admui.com/)
 * Copyright 2015-2019 Admui Team
 * Licensed under the Admui License 1.1 (http://www.admui.com/about/license)
 */
(function(window, document, $) {
    "use strict";

    $.components.register("tooltip", {
        defaults: {
            trigger: "hover"
        },
        mode: "init",
        init: function(context) {
            if (!$.fn.tooltip) {
                return;
            }

            var defaults = $.components.getDefaults("tooltip");

            $('[data-toggle="tooltip"]', context).each(function() {
                var options = $.extend(true, {}, defaults, $(this).data());

                $(this).tooltip(options);
            });
        }
    });
})(window, document, jQuery);
