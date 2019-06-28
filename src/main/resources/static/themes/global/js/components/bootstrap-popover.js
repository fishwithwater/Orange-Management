/**
 * admui-basic v2.1.0 (http://www.admui.com/)
 * Copyright 2015-2019 Admui Team
 * Licensed under the Admui License 1.1 (http://www.admui.com/about/license)
 */
(function(window, document, $) {
    "use strict";

    $.components.register("popover", {
        defaults: {},
        mode: "init",
        init: function(context) {
            if (!$.fn.popover) {
                return;
            }

            var defaults = $.components.getDefaults("popover");

            $('[data-toggle="popover"]', context).each(function() {
                var options = $.extend(true, {}, defaults, $(this).data());

                $(this).popover(options);
            });
        }
    });
})(window, document, jQuery);
