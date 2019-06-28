/**
 * admui-basic v2.1.0 (http://www.admui.com/)
 * Copyright 2015-2019 Admui Team
 * Licensed under the Admui License 1.1 (http://www.admui.com/about/license)
 */
(function(window, document, $) {
    "use strict";

    $.components.register("ace", {
        mode: "init",
        defaults: {},
        init: function(context) {
            if (typeof ace === "undefined") {
                return;
            }

            //ace.config.set("themePath", "../theme");
            ace.config.loadModule("ace/ext/language_tools");

            $('[data-plugin="ace"]', context).each(function() {
                var id = $(this).attr("id"),
                    mode = $(this).data("mode"),
                    theme = $(this).data("theme"),
                    editor = ace.edit(id);

                editor.container.style.opacity = "";
                if (mode) {
                    editor.session.setMode("ace/mode/" + mode);
                }
                if (theme) {
                    editor.setTheme("ace/theme/" + theme);
                }

                editor.setOption("maxLines", 40);
                editor.setAutoScrollEditorIntoView(true);

                ace.config.loadModule("ace/ext/language_tools", function() {
                    editor.setOptions({
                        enableSnippets: true,
                        enableBasicAutocompletion: true
                    });
                });
            });
        }
    });
})(window, document, jQuery);

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

(function(window, document, $) {
    "use strict";

    $.components.register("bootbox", {
        mode: "init",
        defaults: {
            message: "",
            locale: "zh_CN"
        },
        init: function() {
            if (typeof bootbox === "undefined") {
                return;
            }
            var defaults = $.components.getDefaults("bootbox");

            $(document).on(
                "click.site.bootbox",
                '[data-plugin="bootbox"]',
                function() {
                    var $item = $(this),
                        options = $item.data();

                    options = $.extend(true, {}, defaults, options);
                    if (options.classname) {
                        options.className = options.classname;
                    }

                    if (
                        typeof options.callback === "string" &&
                        $.isFunction(window[options.callback])
                    ) {
                        options.callback = window[options.callback];
                    }

                    if (options.type) {
                        switch (options.type) {
                            case "alert":
                                bootbox.alert(options);
                                break;
                            case "confirm":
                                bootbox.confirm(options);
                                break;
                            case "prompt":
                                bootbox.prompt(options);
                                break;
                            default:
                                bootbox.dialog(options);
                        }
                    } else {
                        bootbox.dialog(options);
                    }
                }
            );
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("colorpicker", {
        defaults: {},
        mode: "default"
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("datepicker", {
        mode: "default",
        defaults: {
            autoclose: true
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";
    /*global moment*/

    $.components.register("daterangepicker", {
        defaults: {
            locale: {
                format: "YYYY-MM-DD",
                separator: " 至 ",
                applyLabel: "确定",
                cancelLabel: "取消",
                fromLabel: "从",
                toLabel: "到",
                customRangeLabel: "自定义",
                weekLabel: "W",
                daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
                monthNames: [
                    "一月",
                    "二月",
                    "三月",
                    "四月",
                    "五月",
                    "六月",
                    "七月",
                    "八月",
                    "九月",
                    "十月",
                    "十一月",
                    "十二月"
                ],
                firstDay: 1
            },
            // "parentEl": "#admui-pageContent > .page",
            alwaysShowCalendars: true
        },
        init: function(context) {
            if (!$.fn.daterangepicker) {
                return;
            }

            var defaults = $.components.getDefaults("daterangepicker");
            var defaults_ranges = {
                ranges: {
                    今天: [moment(), moment()],
                    昨天: [
                        moment().subtract(1, "days"),
                        moment().subtract(1, "days")
                    ],
                    最近7天: [moment().subtract(6, "days"), moment()],
                    最近30天: [moment().subtract(29, "days"), moment()],
                    本月: [moment().startOf("month"), moment().endOf("month")],
                    上月: [
                        moment()
                            .subtract(1, "month")
                            .startOf("month"),
                        moment()
                            .subtract(1, "month")
                            .endOf("month")
                    ]
                }
            };

            $('[data-plugin="daterangepicker"]', context).each(function() {
                var options = $.extend(
                    true,
                    {},
                    defaults,
                    defaults_ranges,
                    $(this).data()
                );

                $(this).daterangepicker(options);
            });
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("maxlength", {
        mode: "default",
        defaults: {
            warningClass: "badge badge-warning",
            limitReachedClass: "badge badge-danger"
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("markdown", {
        mode: "init",
        defaults: {
            autofocus: false,
            savable: false,
            language: "zh"
        },
        init: function(context) {
            if (!$.fn.markdown) {
                return;
            }

            var defaults = this.defaults;

            $('textarea[data-plugin="markdown"]', context).each(function() {
                var options = $.extend(true, {}, defaults, $(this).data());

                $(this).markdown(options);
            });
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("selectpicker", {
        mode: "default",
        defaults: {
            noneSelectedText: "没有选中任何项",
            noneResultsText: "没有找到匹配项",
            countSelectedText: "已选中{1}项中的{0}项",
            maxOptionsText: [
                "超出限制 (最多选择{n}项)",
                "组选择超出限制(最多选择{n}组)"
            ],
            selectAllText: "选择全部",
            deselectAllText: "取消全部选择",
            doneButtonText: "关闭",
            style: "btn-select",
            iconBase: "icon",
            tickIcon: "wb-check"
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("bootstrapSlider", {
        defaults: {},
        mode: "default"
    });
})(window, document, jQuery);

(function(window, document, $){
    "use strict";

    $.components.register("sweetalert", {
        mode: "api",
        defaults: {
            confirmButtonText: '确定',
            cancelButtonText: '取消'
        },
        api: function () {
            if (typeof swal === "undefined") {
                return;
            }

            var defaults = $.components.getDefaults("sweetalert");

            $(document).on('click.site.sweetalert', '[data-plugin="sweetalert"]', function () {
                var options = $.extend(true, {}, defaults, $(this).data());

                swal(options);
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $) {
    "use strict";

    $.components.register("tagsinput", {
        defaults: {
            tagClass: "badge badge-default"
        },
        mode: "default"
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("tokenfield", {
        mode: "default",
        defaults: {}
    });
})(window, document, jQuery);

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

(function(window, document, $) {
    "use strict";

    $.components.register("buttons", {
        mode: "api",
        defaults: {},
        api: function() {
            $(document).on(
                "click.site.loading",
                "[data-loading-text]",
                function() {
                    var $btn = $(this),
                        text = $btn.text(),
                        i = 20,
                        loadingText = $btn.data("loadingText");

                    $btn.text(loadingText + "(" + i + ")").css("opacity", ".6");

                    var timeout = setInterval(function() {
                        $btn.text(loadingText + "(" + --i + ")");
                        if (i === 0) {
                            clearInterval(timeout);
                            $btn.text(text).css("opacity", "1");
                        }
                    }, 1000);
                }
            );

            $(document).on("click.site.morebutton", "[data-more]", function() {
                var $target = $($(this).data("more"));
                $target.toggleClass("show");
            });
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("card", {
        mode: "init",
        defaults: {},
        init: function(context) {
            if (!$.fn.card) {
                return;
            }
            var defaults = $.components.getDefaults("card");

            $('[data-plugin="card"]', context).each(function() {
                var options = $.extend({}, defaults, $(this).data());

                if (options.target) {
                    options.container = $(options.target);
                }
                $(this).card(options);
            });
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("clockpicker", {
        mode: "default"
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("dataTable", {
        defaults: {
            responsive: true,
            dom:
                "<'row'<'col-6'<'d-none d-sm-block'l>><'col-6'f>>" +
                "<'row'<'col-12'tr>>" +
                "<'row'<'col-md-12 col-lg-5'i><'col-md-12 col-lg-7'p>>",
            language: {
                sSearchPlaceholder: "快速查找",
                lengthMenu: "每页显示 _MENU_ 条",
                search: "_INPUT_",
                info: "第 _START_ 至 _END_ 项，共 _TOTAL_ 项",
                infoEmpty: "共 0 项",
                emptyTable: "无数据",
                zeroRecords: "抱歉，没有找到符合条件的记录",
                sInfoFiltered: "(从 _MAX_ 条记录中查找)",
                loadingRecords: "加载中，请稍后…",
                processing: "正在处理，请稍后…",
                paginate: {
                    first: "第一页",
                    last: "最后一页",
                    previous: '<i class="icon wb-chevron-left-mini"></i>',
                    next: '<i class="icon wb-chevron-right-mini"></i>'
                },
                aria: {
                    sortAscending: "升序排列",
                    sortDescending: "降序排列"
                }
            }
        },
        init: function(context) {
            if (!$.fn.dataTable) {
                return;
            }

            var defaults = this.defaults;

            $('[data-plugin="dataTable"]', context).each(function() {
                var options = $.extend(true, {}, defaults, $(this).data());

                $(this).dataTable(options);
            });
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("datepair", {
        mode: "default",
        defaults: {
            startClass: "datepair-start",
            endClass: "datepair-end",
            timeClass: "datepair-time",
            dateClass: "datepair-date"
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("dropify", {
        mode: "default",
        defaults: {
            messages: {
                default: "单击或直接拖动需要上传的文件到此处",
                replace: "将文件拖放到此处或单击此处替换",
                remove: "移除",
                error: "出错了…"
            },
            error: {
                fileSize: "文件大小超出限制(文件大小不能超过{{ value }})。",
                minWidth: "图片宽度太小(不能小于{{ value }}}px)。",
                maxWidth: "图片宽度太大(不能大于{{ value }}}px)。",
                minHeight: "图片高度太小(不能小于{{ value }}}px)。",
                maxHeight: "图片高度太大(不能大于{{ value }}px)。",
                imageFormat: "图片格式不支持(允许的格式为：{{ value }})。"
            }
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("filterable", {
        mode: "init",
        defaults: {
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false
            }
        },
        init: function(context) {
            if (typeof $.fn.isotope === "undefined") {
                return;
            }

            var defaults = $.components.getDefaults("filterable");

            var callback = function() {
                $("[data-filterable]", context).each(function() {
                    var $this = $(this);

                    var options = $.extend(true, {}, defaults, $this.data(), {
                        filter: "*"
                    });

                    $this.isotope(options);
                });

                $("[data-filter]", context).click(function(e) {
                    var $this = $(this);
                    var target = $this.data("target");
                    var $li = $this.parent("li");

                    if (!target) {
                        target = $this.attr("href");
                        target = target && target.replace(/.*(?=#[^\s]*$)/, "");
                    }

                    $li.siblings(".active").each(function() {
                        $(this)
                            .find("a")
                            .attr("aria-expanded", false);
                        $(this).removeClass("active");
                    });

                    $li.addClass("active");
                    $this.attr("aria-expanded", true);

                    var $list = $(target, context);
                    var filter = $this.attr("data-filter");
                    if (filter !== "*") {
                        filter = '[data-type="' + filter + '"]';
                    }
                    $list.isotope({
                        filter: filter
                    });

                    e.preventDefault();
                });
            };

            if (context !== document) {
                callback();
            } else {
                $(window).on("load", function() {
                    callback();
                });
            }
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
  'use strict';

  $.components.register('iconpicker', {
    mode: 'default',
    defaults: {
      fullClassFormatter: function(value) {
        return 'icon ' + value;
      },
      templates: {
        buttons:
          '<button class="iconpicker-btn iconpicker-btn-cancel btn btn-default btn-sm">取消</button>' +
          ' <button class="iconpicker-btn iconpicker-btn-accept btn btn-primary btn-sm">确认</button>',
        search:
          '<input type="search" class="form-control form-control-sm iconpicker-search" placeholder="查找图标">'
      },
      icons: [
        {
          title: 'icon fa-adjust',
          searchTerms: []
        },
        {
          title: 'icon fa-anchor',
          searchTerms: []
        },
        {
          title: 'icon fa-archive',
          searchTerms: []
        },
        {
          title: 'icon fa-area-chart',
          searchTerms: []
        },
        {
          title: 'icon fa-arrows',
          searchTerms: []
        },
        {
          title: 'icon fa-arrows-h',
          searchTerms: []
        },
        {
          title: 'icon fa-arrows-v',
          searchTerms: []
        },
        {
          title: 'icon fa-asterisk',
          searchTerms: []
        },
        {
          title: 'icon fa-at',
          searchTerms: []
        },
        {
          title: 'icon fa-automobile',
          searchTerms: []
        },
        {
          title: 'icon fa-ban',
          searchTerms: []
        },
        {
          title: 'icon fa-bank',
          searchTerms: []
        },
        {
          title: 'icon fa-bar-chart',
          searchTerms: []
        },
        {
          title: 'icon fa-bar-chart-o',
          searchTerms: []
        },
        {
          title: 'icon fa-barcode',
          searchTerms: []
        },
        {
          title: 'icon fa-bars',
          searchTerms: []
        },
        {
          title: 'icon fa-bed',
          searchTerms: []
        },
        {
          title: 'icon fa-beer',
          searchTerms: []
        },
        {
          title: 'icon fa-bell',
          searchTerms: []
        },
        {
          title: 'icon fa-bell-o',
          searchTerms: []
        },
        {
          title: 'icon fa-bell-slash',
          searchTerms: []
        },
        {
          title: 'icon fa-bell-slash-o',
          searchTerms: []
        },
        {
          title: 'icon fa-bicycle',
          searchTerms: []
        },
        {
          title: 'icon fa-binoculars',
          searchTerms: []
        },
        {
          title: 'icon fa-birthday-cake',
          searchTerms: []
        },
        {
          title: 'icon fa-bolt',
          searchTerms: []
        },
        {
          title: 'icon fa-bomb',
          searchTerms: []
        },
        {
          title: 'icon fa-book',
          searchTerms: []
        },
        {
          title: 'icon fa-bookmark',
          searchTerms: []
        },
        {
          title: 'icon fa-bookmark-o',
          searchTerms: []
        },
        {
          title: 'icon fa-briefcase',
          searchTerms: []
        },
        {
          title: 'icon fa-bug',
          searchTerms: []
        },
        {
          title: 'icon fa-building',
          searchTerms: []
        },
        {
          title: 'icon fa-building-o',
          searchTerms: []
        },
        {
          title: 'icon fa-bullhorn',
          searchTerms: []
        },
        {
          title: 'icon fa-bullseye',
          searchTerms: []
        },
        {
          title: 'icon fa-bus',
          searchTerms: []
        },
        {
          title: 'icon fa-cab',
          searchTerms: []
        },
        {
          title: 'icon fa-calculator',
          searchTerms: []
        },
        {
          title: 'icon fa-calendar',
          searchTerms: []
        },
        {
          title: 'icon fa-calendar-o',
          searchTerms: []
        },
        {
          title: 'icon fa-camera',
          searchTerms: []
        },
        {
          title: 'icon fa-camera-retro',
          searchTerms: []
        },
        {
          title: 'icon fa-car',
          searchTerms: []
        },
        {
          title: 'icon fa-caret-square-o-down',
          searchTerms: []
        },
        {
          title: 'icon fa-caret-square-o-left',
          searchTerms: []
        },
        {
          title: 'icon fa-caret-square-o-right',
          searchTerms: []
        },
        {
          title: 'icon fa-caret-square-o-up',
          searchTerms: []
        },
        {
          title: 'icon fa-cart-arrow-down',
          searchTerms: []
        },
        {
          title: 'icon fa-cart-plus',
          searchTerms: []
        },
        {
          title: 'icon fa-cc',
          searchTerms: []
        },
        {
          title: 'icon fa-certificate',
          searchTerms: []
        },
        {
          title: 'icon fa-check',
          searchTerms: []
        },
        {
          title: 'icon fa-check-circle',
          searchTerms: []
        },
        {
          title: 'icon fa-check-circle-o',
          searchTerms: []
        },
        {
          title: 'icon fa-check-square',
          searchTerms: []
        },
        {
          title: 'icon fa-check-square-o',
          searchTerms: []
        },
        {
          title: 'icon fa-child',
          searchTerms: []
        },
        {
          title: 'icon fa-circle',
          searchTerms: []
        },
        {
          title: 'icon fa-circle-o',
          searchTerms: []
        },
        {
          title: 'icon fa-circle-o-notch',
          searchTerms: []
        },
        {
          title: 'icon fa-circle-thin',
          searchTerms: []
        },
        {
          title: 'icon fa-clock-o',
          searchTerms: []
        },
        {
          title: 'icon fa-close',
          searchTerms: []
        },
        {
          title: 'icon fa-cloud',
          searchTerms: []
        },
        {
          title: 'icon fa-cloud-download',
          searchTerms: []
        },
        {
          title: 'icon fa-cloud-upload',
          searchTerms: []
        },
        {
          title: 'icon fa-code',
          searchTerms: []
        },
        {
          title: 'icon fa-code-fork',
          searchTerms: []
        },
        {
          title: 'icon fa-coffee',
          searchTerms: []
        },
        {
          title: 'icon fa-cog',
          searchTerms: []
        },
        {
          title: 'icon fa-cogs',
          searchTerms: []
        },
        {
          title: 'icon fa-comment',
          searchTerms: []
        },
        {
          title: 'icon fa-comment-o',
          searchTerms: []
        },
        {
          title: 'icon fa-comments',
          searchTerms: []
        },
        {
          title: 'icon fa-comments-o',
          searchTerms: []
        },
        {
          title: 'icon fa-compass',
          searchTerms: []
        },
        {
          title: 'icon fa-copyright',
          searchTerms: []
        },
        {
          title: 'icon fa-credit-card',
          searchTerms: []
        },
        {
          title: 'icon fa-crop',
          searchTerms: []
        },
        {
          title: 'icon fa-crosshairs',
          searchTerms: []
        },
        {
          title: 'icon fa-cube',
          searchTerms: []
        },
        {
          title: 'icon fa-cubes',
          searchTerms: []
        },
        {
          title: 'icon fa-cutlery',
          searchTerms: []
        },
        {
          title: 'icon fa-dashboard',
          searchTerms: []
        },
        {
          title: 'icon fa-database',
          searchTerms: []
        },
        {
          title: 'icon fa-desktop',
          searchTerms: []
        },
        {
          title: 'icon fa-diamond',
          searchTerms: []
        },
        {
          title: 'icon fa-dot-circle-o',
          searchTerms: []
        },
        {
          title: 'icon fa-download',
          searchTerms: []
        },
        {
          title: 'icon fa-edit',
          searchTerms: []
        },
        {
          title: 'icon fa-ellipsis-h',
          searchTerms: []
        },
        {
          title: 'icon fa-ellipsis-v',
          searchTerms: []
        },
        {
          title: 'icon fa-envelope',
          searchTerms: []
        },
        {
          title: 'icon fa-envelope-o',
          searchTerms: []
        },
        {
          title: 'icon fa-envelope-square',
          searchTerms: []
        },
        {
          title: 'icon fa-eraser',
          searchTerms: []
        },
        {
          title: 'icon fa-exchange',
          searchTerms: []
        },
        {
          title: 'icon fa-exclamation',
          searchTerms: []
        },
        {
          title: 'icon fa-exclamation-circle',
          searchTerms: []
        },
        {
          title: 'icon fa-exclamation-triangle',
          searchTerms: []
        },
        {
          title: 'icon fa-external-link',
          searchTerms: []
        },
        {
          title: 'icon fa-external-link-square',
          searchTerms: []
        },
        {
          title: 'icon fa-eye',
          searchTerms: []
        },
        {
          title: 'icon fa-eye-slash',
          searchTerms: []
        },
        {
          title: 'icon fa-eyedropper',
          searchTerms: []
        },
        {
          title: 'icon fa-fax',
          searchTerms: []
        },
        {
          title: 'icon fa-female',
          searchTerms: []
        },
        {
          title: 'icon fa-fighter-jet',
          searchTerms: []
        },
        {
          title: 'icon fa-file-archive-o',
          searchTerms: []
        },
        {
          title: 'icon fa-file-audio-o',
          searchTerms: []
        },
        {
          title: 'icon fa-file-code-o',
          searchTerms: []
        },
        {
          title: 'icon fa-file-excel-o',
          searchTerms: []
        },
        {
          title: 'icon fa-file-image-o',
          searchTerms: []
        },
        {
          title: 'icon fa-file-movie-o',
          searchTerms: []
        },
        {
          title: 'icon fa-file-pdf-o',
          searchTerms: []
        },
        {
          title: 'icon fa-file-photo-o',
          searchTerms: []
        },
        {
          title: 'icon fa-file-picture-o',
          searchTerms: []
        },
        {
          title: 'icon fa-file-powerpoint-o',
          searchTerms: []
        },
        {
          title: 'icon fa-file-sound-o',
          searchTerms: []
        },
        {
          title: 'icon fa-file-video-o',
          searchTerms: []
        },
        {
          title: 'icon fa-file-word-o',
          searchTerms: []
        },
        {
          title: 'icon fa-file-zip-o',
          searchTerms: []
        },
        {
          title: 'icon fa-film',
          searchTerms: []
        },
        {
          title: 'icon fa-filter',
          searchTerms: []
        },
        {
          title: 'icon fa-fire',
          searchTerms: []
        },
        {
          title: 'icon fa-fire-extinguisher',
          searchTerms: []
        },
        {
          title: 'icon fa-flag',
          searchTerms: []
        },
        {
          title: 'icon fa-flag-checkered',
          searchTerms: []
        },
        {
          title: 'icon fa-flag-o',
          searchTerms: []
        },
        {
          title: 'icon fa-flash',
          searchTerms: []
        },
        {
          title: 'icon fa-flask',
          searchTerms: []
        },
        {
          title: 'icon fa-folder',
          searchTerms: []
        },
        {
          title: 'icon fa-folder-o',
          searchTerms: []
        },
        {
          title: 'icon fa-folder-open',
          searchTerms: []
        },
        {
          title: 'icon fa-folder-open-o',
          searchTerms: []
        },
        {
          title: 'icon fa-frown-o',
          searchTerms: []
        },
        {
          title: 'icon fa-futbol-o',
          searchTerms: []
        },
        {
          title: 'icon fa-gamepad',
          searchTerms: []
        },
        {
          title: 'icon fa-gavel',
          searchTerms: []
        },
        {
          title: 'icon fa-gear',
          searchTerms: []
        },
        {
          title: 'icon fa-gears',
          searchTerms: []
        },
        {
          title: 'icon fa-genderless',
          searchTerms: []
        },
        {
          title: 'icon fa-gift',
          searchTerms: []
        },
        {
          title: 'icon fa-glass',
          searchTerms: []
        },
        {
          title: 'icon fa-globe',
          searchTerms: []
        },
        {
          title: 'icon fa-graduation-cap',
          searchTerms: []
        },
        {
          title: 'icon fa-group',
          searchTerms: []
        },
        {
          title: 'icon fa-hdd-o',
          searchTerms: []
        },
        {
          title: 'icon fa-headphones',
          searchTerms: []
        },
        {
          title: 'icon fa-heart',
          searchTerms: []
        },
        {
          title: 'icon fa-heart-o',
          searchTerms: []
        },
        {
          title: 'icon fa-heartbeat',
          searchTerms: []
        },
        {
          title: 'icon fa-history',
          searchTerms: []
        },
        {
          title: 'icon fa-home',
          searchTerms: []
        },
        {
          title: 'icon fa-hotel',
          searchTerms: []
        },
        {
          title: 'icon fa-image',
          searchTerms: []
        },
        {
          title: 'icon fa-inbox',
          searchTerms: []
        },
        {
          title: 'icon fa-info',
          searchTerms: []
        },
        {
          title: 'icon fa-info-circle',
          searchTerms: []
        },
        {
          title: 'icon fa-institution',
          searchTerms: []
        },
        {
          title: 'icon fa-key',
          searchTerms: []
        },
        {
          title: 'icon fa-keyboard-o',
          searchTerms: []
        },
        {
          title: 'icon fa-language',
          searchTerms: []
        },
        {
          title: 'icon fa-laptop',
          searchTerms: []
        },
        {
          title: 'icon fa-leaf',
          searchTerms: []
        },
        {
          title: 'icon fa-legal',
          searchTerms: []
        },
        {
          title: 'icon fa-lemon-o',
          searchTerms: []
        },
        {
          title: 'icon fa-level-down',
          searchTerms: []
        },
        {
          title: 'icon fa-level-up',
          searchTerms: []
        },
        {
          title: 'icon fa-life-bouy',
          searchTerms: []
        },
        {
          title: 'icon fa-life-buoy',
          searchTerms: []
        },
        {
          title: 'icon fa-life-ring',
          searchTerms: []
        },
        {
          title: 'icon fa-life-saver',
          searchTerms: []
        },
        {
          title: 'icon fa-lightbulb-o',
          searchTerms: []
        },
        {
          title: 'icon fa-line-chart',
          searchTerms: []
        },
        {
          title: 'icon fa-location-arrow',
          searchTerms: []
        },
        {
          title: 'icon fa-lock',
          searchTerms: []
        },
        {
          title: 'icon fa-magic',
          searchTerms: []
        },
        {
          title: 'icon fa-magnet',
          searchTerms: []
        },
        {
          title: 'icon fa-mail-forward',
          searchTerms: []
        },
        {
          title: 'icon fa-mail-reply',
          searchTerms: []
        },
        {
          title: 'icon fa-mail-reply-all',
          searchTerms: []
        },
        {
          title: 'icon fa-male',
          searchTerms: []
        },
        {
          title: 'icon fa-map-marker',
          searchTerms: []
        },
        {
          title: 'icon fa-meh-o',
          searchTerms: []
        },
        {
          title: 'icon fa-microphone',
          searchTerms: []
        },
        {
          title: 'icon fa-microphone-slash',
          searchTerms: []
        },
        {
          title: 'icon fa-minus',
          searchTerms: []
        },
        {
          title: 'icon fa-minus-circle',
          searchTerms: []
        },
        {
          title: 'icon fa-minus-square',
          searchTerms: []
        },
        {
          title: 'icon fa-minus-square-o',
          searchTerms: []
        },
        {
          title: 'icon fa-mobile',
          searchTerms: []
        },
        {
          title: 'icon fa-mobile-phone',
          searchTerms: []
        },
        {
          title: 'icon fa-money',
          searchTerms: []
        },
        {
          title: 'icon fa-moon-o',
          searchTerms: []
        },
        {
          title: 'icon fa-mortar-board',
          searchTerms: []
        },
        {
          title: 'icon fa-motorcycle',
          searchTerms: []
        },
        {
          title: 'icon fa-music',
          searchTerms: []
        },
        {
          title: 'icon fa-navicon',
          searchTerms: []
        },
        {
          title: 'icon fa-newspaper-o',
          searchTerms: []
        },
        {
          title: 'icon fa-paint-brush',
          searchTerms: []
        },
        {
          title: 'icon fa-paper-plane',
          searchTerms: []
        },
        {
          title: 'icon fa-paper-plane-o',
          searchTerms: []
        },
        {
          title: 'icon fa-paw',
          searchTerms: []
        },
        {
          title: 'icon fa-pencil',
          searchTerms: []
        },
        {
          title: 'icon fa-pencil-square',
          searchTerms: []
        },
        {
          title: 'icon fa-pencil-square-o',
          searchTerms: []
        },
        {
          title: 'icon fa-phone',
          searchTerms: []
        },
        {
          title: 'icon fa-phone-square',
          searchTerms: []
        },
        {
          title: 'icon fa-photo',
          searchTerms: []
        },
        {
          title: 'icon fa-picture-o',
          searchTerms: []
        },
        {
          title: 'icon fa-pie-chart',
          searchTerms: []
        },
        {
          title: 'icon fa-plane',
          searchTerms: []
        },
        {
          title: 'icon fa-plug',
          searchTerms: []
        },
        {
          title: 'icon fa-plus',
          searchTerms: []
        },
        {
          title: 'icon fa-plus-circle',
          searchTerms: []
        },
        {
          title: 'icon fa-plus-square',
          searchTerms: []
        },
        {
          title: 'icon fa-plus-square-o',
          searchTerms: []
        },
        {
          title: 'icon fa-power-off',
          searchTerms: []
        },
        {
          title: 'icon fa-print',
          searchTerms: []
        },
        {
          title: 'icon fa-puzzle-piece',
          searchTerms: []
        },
        {
          title: 'icon fa-qrcode',
          searchTerms: []
        },
        {
          title: 'icon fa-question',
          searchTerms: []
        },
        {
          title: 'icon fa-question-circle',
          searchTerms: []
        },
        {
          title: 'icon fa-quote-left',
          searchTerms: []
        },
        {
          title: 'icon fa-quote-right',
          searchTerms: []
        },
        {
          title: 'icon fa-random',
          searchTerms: []
        },
        {
          title: 'icon fa-recycle',
          searchTerms: []
        },
        {
          title: 'icon fa-refresh',
          searchTerms: []
        },
        {
          title: 'icon fa-remove',
          searchTerms: []
        },
        {
          title: 'icon fa-reorder',
          searchTerms: []
        },
        {
          title: 'icon fa-reply',
          searchTerms: []
        },
        {
          title: 'icon fa-reply-all',
          searchTerms: []
        },
        {
          title: 'icon fa-retweet',
          searchTerms: []
        },
        {
          title: 'icon fa-road',
          searchTerms: []
        },
        {
          title: 'icon fa-rocket',
          searchTerms: []
        },
        {
          title: 'icon fa-rss',
          searchTerms: []
        },
        {
          title: 'icon fa-rss-square',
          searchTerms: []
        },
        {
          title: 'icon fa-search',
          searchTerms: []
        },
        {
          title: 'icon fa-search-minus',
          searchTerms: []
        },
        {
          title: 'icon fa-search-plus',
          searchTerms: []
        },
        {
          title: 'icon fa-send',
          searchTerms: []
        },
        {
          title: 'icon fa-send-o',
          searchTerms: []
        },
        {
          title: 'icon fa-server',
          searchTerms: []
        },
        {
          title: 'icon fa-share',
          searchTerms: []
        },
        {
          title: 'icon fa-share-alt',
          searchTerms: []
        },
        {
          title: 'icon fa-share-alt-square',
          searchTerms: []
        },
        {
          title: 'icon fa-share-square',
          searchTerms: []
        },
        {
          title: 'icon fa-share-square-o',
          searchTerms: []
        },
        {
          title: 'icon fa-shield',
          searchTerms: []
        },
        {
          title: 'icon fa-ship',
          searchTerms: []
        },
        {
          title: 'icon fa-shopping-cart',
          searchTerms: []
        },
        {
          title: 'icon fa-sign-in',
          searchTerms: []
        },
        {
          title: 'icon fa-sign-out',
          searchTerms: []
        },
        {
          title: 'icon fa-signal',
          searchTerms: []
        },
        {
          title: 'icon fa-sitemap',
          searchTerms: []
        },
        {
          title: 'icon fa-sliders',
          searchTerms: []
        },
        {
          title: 'icon fa-smile-o',
          searchTerms: []
        },
        {
          title: 'icon fa-soccer-ball-o',
          searchTerms: []
        },
        {
          title: 'icon fa-sort',
          searchTerms: []
        },
        {
          title: 'icon fa-sort-alpha-asc',
          searchTerms: []
        },
        {
          title: 'icon fa-sort-alpha-desc',
          searchTerms: []
        },
        {
          title: 'icon fa-sort-amount-asc',
          searchTerms: []
        },
        {
          title: 'icon fa-sort-amount-desc',
          searchTerms: []
        },
        {
          title: 'icon fa-sort-asc',
          searchTerms: []
        },
        {
          title: 'icon fa-sort-desc',
          searchTerms: []
        },
        {
          title: 'icon fa-sort-down',
          searchTerms: []
        },
        {
          title: 'icon fa-sort-numeric-asc',
          searchTerms: []
        },
        {
          title: 'icon fa-sort-numeric-desc',
          searchTerms: []
        },
        {
          title: 'icon fa-sort-up',
          searchTerms: []
        },
        {
          title: 'icon fa-space-shuttle',
          searchTerms: []
        },
        {
          title: 'icon fa-spinner',
          searchTerms: []
        },
        {
          title: 'icon fa-spoon',
          searchTerms: []
        },
        {
          title: 'icon fa-square',
          searchTerms: []
        },
        {
          title: 'icon fa-square-o',
          searchTerms: []
        },
        {
          title: 'icon fa-star',
          searchTerms: []
        },
        {
          title: 'icon fa-star-half',
          searchTerms: []
        },
        {
          title: 'icon fa-star-half-empty',
          searchTerms: []
        },
        {
          title: 'icon fa-star-half-full',
          searchTerms: []
        },
        {
          title: 'icon fa-star-half-o',
          searchTerms: []
        },
        {
          title: 'icon fa-star-o',
          searchTerms: []
        },
        {
          title: 'icon fa-street-view',
          searchTerms: []
        },
        {
          title: 'icon fa-suitcase',
          searchTerms: []
        },
        {
          title: 'icon fa-sun-o',
          searchTerms: []
        },
        {
          title: 'icon fa-support',
          searchTerms: []
        },
        {
          title: 'icon fa-tablet',
          searchTerms: []
        },
        {
          title: 'icon fa-tachometer',
          searchTerms: []
        },
        {
          title: 'icon fa-tag',
          searchTerms: []
        },
        {
          title: 'icon fa-tags',
          searchTerms: []
        },
        {
          title: 'icon fa-tasks',
          searchTerms: []
        },
        {
          title: 'icon fa-taxi',
          searchTerms: []
        },
        {
          title: 'icon fa-terminal',
          searchTerms: []
        },
        {
          title: 'icon fa-thumb-tack',
          searchTerms: []
        },
        {
          title: 'icon fa-thumbs-down',
          searchTerms: []
        },
        {
          title: 'icon fa-thumbs-o-down',
          searchTerms: []
        },
        {
          title: 'icon fa-thumbs-o-up',
          searchTerms: []
        },
        {
          title: 'icon fa-thumbs-up',
          searchTerms: []
        },
        {
          title: 'icon fa-ticket',
          searchTerms: []
        },
        {
          title: 'icon fa-times',
          searchTerms: []
        },
        {
          title: 'icon fa-times-circle',
          searchTerms: []
        },
        {
          title: 'icon fa-times-circle-o',
          searchTerms: []
        },
        {
          title: 'icon fa-tint',
          searchTerms: []
        },
        {
          title: 'icon fa-toggle-down',
          searchTerms: []
        },
        {
          title: 'icon fa-toggle-left',
          searchTerms: []
        },
        {
          title: 'icon fa-toggle-off',
          searchTerms: []
        },
        {
          title: 'icon fa-toggle-on',
          searchTerms: []
        },
        {
          title: 'icon fa-toggle-right',
          searchTerms: []
        },
        {
          title: 'icon fa-toggle-up',
          searchTerms: []
        },
        {
          title: 'icon fa-trash',
          searchTerms: []
        },
        {
          title: 'icon fa-trash-o',
          searchTerms: []
        },
        {
          title: 'icon fa-tree',
          searchTerms: []
        },
        {
          title: 'icon fa-trophy',
          searchTerms: []
        },
        {
          title: 'icon fa-truck',
          searchTerms: []
        },
        {
          title: 'icon fa-tty',
          searchTerms: []
        },
        {
          title: 'icon fa-umbrella',
          searchTerms: []
        },
        {
          title: 'icon fa-university',
          searchTerms: []
        },
        {
          title: 'icon fa-unlock',
          searchTerms: []
        },
        {
          title: 'icon fa-unlock-alt',
          searchTerms: []
        },
        {
          title: 'icon fa-unsorted',
          searchTerms: []
        },
        {
          title: 'icon fa-upload',
          searchTerms: []
        },
        {
          title: 'icon fa-user',
          searchTerms: []
        },
        {
          title: 'icon fa-user-plus',
          searchTerms: []
        },
        {
          title: 'icon fa-user-secret',
          searchTerms: []
        },
        {
          title: 'icon fa-user-times',
          searchTerms: []
        },
        {
          title: 'icon fa-users',
          searchTerms: []
        },
        {
          title: 'icon fa-video-camera',
          searchTerms: []
        },
        {
          title: 'icon fa-volume-down',
          searchTerms: []
        },
        {
          title: 'icon fa-volume-off',
          searchTerms: []
        },
        {
          title: 'icon fa-volume-up',
          searchTerms: []
        },
        {
          title: 'icon fa-warning',
          searchTerms: []
        },
        {
          title: 'icon fa-wheelchair',
          searchTerms: []
        },
        {
          title: 'icon fa-wifi',
          searchTerms: []
        },
        {
          title: 'icon fa-wrench',
          searchTerms: []
        },
        {
          title: 'icon fa-ambulance',
          searchTerms: []
        },
        {
          title: 'icon fa-subway',
          searchTerms: []
        },
        {
          title: 'icon fa-train',
          searchTerms: []
        },
        {
          title: 'icon fa-mars',
          searchTerms: []
        },
        {
          title: 'icon fa-mars-double',
          searchTerms: []
        },
        {
          title: 'icon fa-mars-stroke',
          searchTerms: []
        },
        {
          title: 'icon fa-mars-stroke-h',
          searchTerms: []
        },
        {
          title: 'icon fa-mars-stroke-v',
          searchTerms: []
        },
        {
          title: 'icon fa-mercury',
          searchTerms: []
        },
        {
          title: 'icon fa-neuter',
          searchTerms: []
        },
        {
          title: 'icon fa-transgender',
          searchTerms: []
        },
        {
          title: 'icon fa-transgender-alt',
          searchTerms: []
        },
        {
          title: 'icon fa-venus',
          searchTerms: []
        },
        {
          title: 'icon fa-venus-double',
          searchTerms: []
        },
        {
          title: 'icon fa-venus-mars',
          searchTerms: []
        },
        {
          title: 'icon fa-file',
          searchTerms: []
        },
        {
          title: 'icon fa-file-o',
          searchTerms: []
        },
        {
          title: 'icon fa-file-text',
          searchTerms: []
        },
        {
          title: 'icon fa-file-text-o',
          searchTerms: []
        },
        {
          title: 'icon fa-cc-amex',
          searchTerms: []
        },
        {
          title: 'icon fa-cc-discover',
          searchTerms: []
        },
        {
          title: 'icon fa-cc-mastercard',
          searchTerms: []
        },
        {
          title: 'icon fa-cc-paypal',
          searchTerms: []
        },
        {
          title: 'icon fa-cc-stripe',
          searchTerms: []
        },
        {
          title: 'icon fa-cc-visa',
          searchTerms: []
        },
        {
          title: 'icon fa-google-wallet',
          searchTerms: []
        },
        {
          title: 'icon fa-paypal',
          searchTerms: []
        },
        {
          title: 'icon fa-bitcoin',
          searchTerms: []
        },
        {
          title: 'icon fa-btc',
          searchTerms: []
        },
        {
          title: 'icon fa-cny',
          searchTerms: []
        },
        {
          title: 'icon fa-dollar',
          searchTerms: []
        },
        {
          title: 'icon fa-eur',
          searchTerms: []
        },
        {
          title: 'icon fa-euro',
          searchTerms: []
        },
        {
          title: 'icon fa-gbp',
          searchTerms: []
        },
        {
          title: 'icon fa-ils',
          searchTerms: []
        },
        {
          title: 'icon fa-inr',
          searchTerms: []
        },
        {
          title: 'icon fa-jpy',
          searchTerms: []
        },
        {
          title: 'icon fa-krw',
          searchTerms: []
        },
        {
          title: 'icon fa-rmb',
          searchTerms: []
        },
        {
          title: 'icon fa-rouble',
          searchTerms: []
        },
        {
          title: 'icon fa-rub',
          searchTerms: []
        },
        {
          title: 'icon fa-ruble',
          searchTerms: []
        },
        {
          title: 'icon fa-rupee',
          searchTerms: []
        },
        {
          title: 'icon fa-shekel',
          searchTerms: []
        },
        {
          title: 'icon fa-sheqel',
          searchTerms: []
        },
        {
          title: 'icon fa-try',
          searchTerms: []
        },
        {
          title: 'icon fa-turkish-lira',
          searchTerms: []
        },
        {
          title: 'icon fa-usd',
          searchTerms: []
        },
        {
          title: 'icon fa-won',
          searchTerms: []
        },
        {
          title: 'icon fa-yen',
          searchTerms: []
        },
        {
          title: 'icon fa-align-center',
          searchTerms: []
        },
        {
          title: 'icon fa-align-justify',
          searchTerms: []
        },
        {
          title: 'icon fa-align-left',
          searchTerms: []
        },
        {
          title: 'icon fa-align-right',
          searchTerms: []
        },
        {
          title: 'icon fa-bold',
          searchTerms: []
        },
        {
          title: 'icon fa-chain',
          searchTerms: []
        },
        {
          title: 'icon fa-chain-broken',
          searchTerms: []
        },
        {
          title: 'icon fa-clipboard',
          searchTerms: []
        },
        {
          title: 'icon fa-columns',
          searchTerms: []
        },
        {
          title: 'icon fa-copy',
          searchTerms: []
        },
        {
          title: 'icon fa-cut',
          searchTerms: []
        },
        {
          title: 'icon fa-dedent',
          searchTerms: []
        },
        {
          title: 'icon fa-files-o',
          searchTerms: []
        },
        {
          title: 'icon fa-floppy-o',
          searchTerms: []
        },
        {
          title: 'icon fa-font',
          searchTerms: []
        },
        {
          title: 'icon fa-header',
          searchTerms: []
        },
        {
          title: 'icon fa-indent',
          searchTerms: []
        },
        {
          title: 'icon fa-italic',
          searchTerms: []
        },
        {
          title: 'icon fa-link',
          searchTerms: []
        },
        {
          title: 'icon fa-list',
          searchTerms: []
        },
        {
          title: 'icon fa-list-alt',
          searchTerms: []
        },
        {
          title: 'icon fa-list-ol',
          searchTerms: []
        },
        {
          title: 'icon fa-list-ul',
          searchTerms: []
        },
        {
          title: 'icon fa-outdent',
          searchTerms: []
        },
        {
          title: 'icon fa-paperclip',
          searchTerms: []
        },
        {
          title: 'icon fa-paragraph',
          searchTerms: []
        },
        {
          title: 'icon fa-paste',
          searchTerms: []
        },
        {
          title: 'icon fa-repeat',
          searchTerms: []
        },
        {
          title: 'icon fa-rotate-left',
          searchTerms: []
        },
        {
          title: 'icon fa-rotate-right',
          searchTerms: []
        },
        {
          title: 'icon fa-save',
          searchTerms: []
        },
        {
          title: 'icon fa-scissors',
          searchTerms: []
        },
        {
          title: 'icon fa-strikethrough',
          searchTerms: []
        },
        {
          title: 'icon fa-subscript',
          searchTerms: []
        },
        {
          title: 'icon fa-superscript',
          searchTerms: []
        },
        {
          title: 'icon fa-table',
          searchTerms: []
        },
        {
          title: 'icon fa-text-height',
          searchTerms: []
        },
        {
          title: 'icon fa-text-width',
          searchTerms: []
        },
        {
          title: 'icon fa-th',
          searchTerms: []
        },
        {
          title: 'icon fa-th-large',
          searchTerms: []
        },
        {
          title: 'icon fa-th-list',
          searchTerms: []
        },
        {
          title: 'icon fa-underline',
          searchTerms: []
        },
        {
          title: 'icon fa-undo',
          searchTerms: []
        },
        {
          title: 'icon fa-unlink',
          searchTerms: []
        },
        {
          title: 'icon fa-angle-double-down',
          searchTerms: []
        },
        {
          title: 'icon fa-angle-double-left',
          searchTerms: []
        },
        {
          title: 'icon fa-angle-double-right',
          searchTerms: []
        },
        {
          title: 'icon fa-angle-double-up',
          searchTerms: []
        },
        {
          title: 'icon fa-angle-down',
          searchTerms: []
        },
        {
          title: 'icon fa-angle-left',
          searchTerms: []
        },
        {
          title: 'icon fa-angle-right',
          searchTerms: []
        },
        {
          title: 'icon fa-angle-up',
          searchTerms: []
        },
        {
          title: 'icon fa-arrow-circle-down',
          searchTerms: []
        },
        {
          title: 'icon fa-arrow-circle-left',
          searchTerms: []
        },
        {
          title: 'icon fa-arrow-circle-o-down',
          searchTerms: []
        },
        {
          title: 'icon fa-arrow-circle-o-left',
          searchTerms: []
        },
        {
          title: 'icon fa-arrow-circle-o-right',
          searchTerms: []
        },
        {
          title: 'icon fa-arrow-circle-o-up',
          searchTerms: []
        },
        {
          title: 'icon fa-arrow-circle-right',
          searchTerms: []
        },
        {
          title: 'icon fa-arrow-circle-up',
          searchTerms: []
        },
        {
          title: 'icon fa-arrow-down',
          searchTerms: []
        },
        {
          title: 'icon fa-arrow-left',
          searchTerms: []
        },
        {
          title: 'icon fa-arrow-right',
          searchTerms: []
        },
        {
          title: 'icon fa-arrow-up',
          searchTerms: []
        },
        {
          title: 'icon fa-arrows-alt',
          searchTerms: []
        },
        {
          title: 'icon fa-caret-down',
          searchTerms: []
        },
        {
          title: 'icon fa-caret-left',
          searchTerms: []
        },
        {
          title: 'icon fa-caret-right',
          searchTerms: []
        },
        {
          title: 'icon fa-caret-up',
          searchTerms: []
        },
        {
          title: 'icon fa-chevron-circle-down',
          searchTerms: []
        },
        {
          title: 'icon fa-chevron-circle-left',
          searchTerms: []
        },
        {
          title: 'icon fa-chevron-circle-right',
          searchTerms: []
        },
        {
          title: 'icon fa-chevron-circle-up',
          searchTerms: []
        },
        {
          title: 'icon fa-chevron-down',
          searchTerms: []
        },
        {
          title: 'icon fa-chevron-left',
          searchTerms: []
        },
        {
          title: 'icon fa-chevron-right',
          searchTerms: []
        },
        {
          title: 'icon fa-chevron-up',
          searchTerms: []
        },
        {
          title: 'icon fa-hand-o-down',
          searchTerms: []
        },
        {
          title: 'icon fa-hand-o-left',
          searchTerms: []
        },
        {
          title: 'icon fa-hand-o-right',
          searchTerms: []
        },
        {
          title: 'icon fa-hand-o-up',
          searchTerms: []
        },
        {
          title: 'icon fa-long-arrow-down',
          searchTerms: []
        },
        {
          title: 'icon fa-long-arrow-left',
          searchTerms: []
        },
        {
          title: 'icon fa-long-arrow-right',
          searchTerms: []
        },
        {
          title: 'icon fa-long-arrow-up',
          searchTerms: []
        },
        {
          title: 'icon fa-backward',
          searchTerms: []
        },
        {
          title: 'icon fa-compress',
          searchTerms: []
        },
        {
          title: 'icon fa-eject',
          searchTerms: []
        },
        {
          title: 'icon fa-expand',
          searchTerms: []
        },
        {
          title: 'icon fa-fast-backward',
          searchTerms: []
        },
        {
          title: 'icon fa-fast-forward',
          searchTerms: []
        },
        {
          title: 'icon fa-forward',
          searchTerms: []
        },
        {
          title: 'icon fa-pause',
          searchTerms: []
        },
        {
          title: 'icon fa-play',
          searchTerms: []
        },
        {
          title: 'icon fa-play-circle',
          searchTerms: []
        },
        {
          title: 'icon fa-play-circle-o',
          searchTerms: []
        },
        {
          title: 'icon fa-step-backward',
          searchTerms: []
        },
        {
          title: 'icon fa-step-forward',
          searchTerms: []
        },
        {
          title: 'icon fa-stop',
          searchTerms: []
        },
        {
          title: 'icon fa-youtube-play',
          searchTerms: []
        },
        {
          title: 'icon fa-adn',
          searchTerms: []
        },
        {
          title: 'icon fa-android',
          searchTerms: []
        },
        {
          title: 'icon fa-angellist',
          searchTerms: []
        },
        {
          title: 'icon fa-apple',
          searchTerms: []
        },
        {
          title: 'icon fa-behance',
          searchTerms: []
        },
        {
          title: 'icon fa-behance-square',
          searchTerms: []
        },
        {
          title: 'icon fa-bitbucket',
          searchTerms: []
        },
        {
          title: 'icon fa-bitbucket-square',
          searchTerms: []
        },
        {
          title: 'icon fa-buysellads',
          searchTerms: []
        },
        {
          title: 'icon fa-codepen',
          searchTerms: []
        },
        {
          title: 'icon fa-connectdevelop',
          searchTerms: []
        },
        {
          title: 'icon fa-css3',
          searchTerms: []
        },
        {
          title: 'icon fa-dashcube',
          searchTerms: []
        },
        {
          title: 'icon fa-delicious',
          searchTerms: []
        },
        {
          title: 'icon fa-deviantart',
          searchTerms: []
        },
        {
          title: 'icon fa-digg',
          searchTerms: []
        },
        {
          title: 'icon fa-dribbble',
          searchTerms: []
        },
        {
          title: 'icon fa-dropbox',
          searchTerms: []
        },
        {
          title: 'icon fa-drupal',
          searchTerms: []
        },
        {
          title: 'icon fa-empire',
          searchTerms: []
        },
        {
          title: 'icon fa-facebook',
          searchTerms: []
        },
        {
          title: 'icon fa-facebook-f',
          searchTerms: []
        },
        {
          title: 'icon fa-facebook-official',
          searchTerms: []
        },
        {
          title: 'icon fa-facebook-square',
          searchTerms: []
        },
        {
          title: 'icon fa-flickr',
          searchTerms: []
        },
        {
          title: 'icon fa-forumbee',
          searchTerms: []
        },
        {
          title: 'icon fa-foursquare',
          searchTerms: []
        },
        {
          title: 'icon fa-ge',
          searchTerms: []
        },
        {
          title: 'icon fa-git',
          searchTerms: []
        },
        {
          title: 'icon fa-git-square',
          searchTerms: []
        },
        {
          title: 'icon fa-github',
          searchTerms: []
        },
        {
          title: 'icon fa-github-alt',
          searchTerms: []
        },
        {
          title: 'icon fa-github-square',
          searchTerms: []
        },
        {
          title: 'icon fa-gittip',
          searchTerms: []
        },
        {
          title: 'icon fa-google',
          searchTerms: []
        },
        {
          title: 'icon fa-google-plus',
          searchTerms: []
        },
        {
          title: 'icon fa-google-plus-square',
          searchTerms: []
        },
        {
          title: 'icon fa-gratipay',
          searchTerms: []
        },
        {
          title: 'icon fa-hacker-news',
          searchTerms: []
        },
        {
          title: 'icon fa-html5',
          searchTerms: []
        },
        {
          title: 'icon fa-instagram',
          searchTerms: []
        },
        {
          title: 'icon fa-ioxhost',
          searchTerms: []
        },
        {
          title: 'icon fa-joomla',
          searchTerms: []
        },
        {
          title: 'icon fa-jsfiddle',
          searchTerms: []
        },
        {
          title: 'icon fa-lastfm',
          searchTerms: []
        },
        {
          title: 'icon fa-lastfm-square',
          searchTerms: []
        },
        {
          title: 'icon fa-leanpub',
          searchTerms: []
        },
        {
          title: 'icon fa-linkedin',
          searchTerms: []
        },
        {
          title: 'icon fa-linkedin-square',
          searchTerms: []
        },
        {
          title: 'icon fa-linux',
          searchTerms: []
        },
        {
          title: 'icon fa-maxcdn',
          searchTerms: []
        },
        {
          title: 'icon fa-meanpath',
          searchTerms: []
        },
        {
          title: 'icon fa-medium',
          searchTerms: []
        },
        {
          title: 'icon fa-openid',
          searchTerms: []
        },
        {
          title: 'icon fa-pagelines',
          searchTerms: []
        },
        {
          title: 'icon fa-pied-piper',
          searchTerms: []
        },
        {
          title: 'icon fa-pied-piper-alt',
          searchTerms: []
        },
        {
          title: 'icon fa-pinterest',
          searchTerms: []
        },
        {
          title: 'icon fa-pinterest-p',
          searchTerms: []
        },
        {
          title: 'icon fa-pinterest-square',
          searchTerms: []
        },
        {
          title: 'icon fa-qq',
          searchTerms: []
        },
        {
          title: 'icon fa-ra',
          searchTerms: []
        },
        {
          title: 'icon fa-rebel',
          searchTerms: []
        },
        {
          title: 'icon fa-reddit',
          searchTerms: []
        },
        {
          title: 'icon fa-reddit-square',
          searchTerms: []
        },
        {
          title: 'icon fa-renren',
          searchTerms: []
        },
        {
          title: 'icon fa-sellsy',
          searchTerms: []
        },
        {
          title: 'icon fa-shirtsinbulk',
          searchTerms: []
        },
        {
          title: 'icon fa-simplybuilt',
          searchTerms: []
        },
        {
          title: 'icon fa-skyatlas',
          searchTerms: []
        },
        {
          title: 'icon fa-skype',
          searchTerms: []
        },
        {
          title: 'icon fa-slack',
          searchTerms: []
        },
        {
          title: 'icon fa-slideshare',
          searchTerms: []
        },
        {
          title: 'icon fa-soundcloud',
          searchTerms: []
        },
        {
          title: 'icon fa-spotify',
          searchTerms: []
        },
        {
          title: 'icon fa-stack-exchange',
          searchTerms: []
        },
        {
          title: 'icon fa-stack-overflow',
          searchTerms: []
        },
        {
          title: 'icon fa-steam',
          searchTerms: []
        },
        {
          title: 'icon fa-steam-square',
          searchTerms: []
        },
        {
          title: 'icon fa-stumbleupon',
          searchTerms: []
        },
        {
          title: 'icon fa-stumbleupon-circle',
          searchTerms: []
        },
        {
          title: 'icon fa-tencent-weibo',
          searchTerms: []
        },
        {
          title: 'icon fa-trello',
          searchTerms: []
        },
        {
          title: 'icon fa-tumblr',
          searchTerms: []
        },
        {
          title: 'icon fa-tumblr-square',
          searchTerms: []
        },
        {
          title: 'icon fa-twitch',
          searchTerms: []
        },
        {
          title: 'icon fa-twitter',
          searchTerms: []
        },
        {
          title: 'icon fa-twitter-square',
          searchTerms: []
        },
        {
          title: 'icon fa-viacoin',
          searchTerms: []
        },
        {
          title: 'icon fa-vimeo-square',
          searchTerms: []
        },
        {
          title: 'icon fa-vine',
          searchTerms: []
        },
        {
          title: 'icon fa-vk',
          searchTerms: []
        },
        {
          title: 'icon fa-wechat',
          searchTerms: []
        },
        {
          title: 'icon fa-weibo',
          searchTerms: []
        },
        {
          title: 'icon fa-weixin',
          searchTerms: []
        },
        {
          title: 'icon fa-whatsapp',
          searchTerms: []
        },
        {
          title: 'icon fa-windows',
          searchTerms: []
        },
        {
          title: 'icon fa-wordpress',
          searchTerms: []
        },
        {
          title: 'icon fa-xing',
          searchTerms: []
        },
        {
          title: 'icon fa-xing-square',
          searchTerms: []
        },
        {
          title: 'icon fa-yahoo',
          searchTerms: []
        },
        {
          title: 'icon fa-yelp',
          searchTerms: []
        },
        {
          title: 'icon fa-youtube',
          searchTerms: []
        },
        {
          title: 'icon fa-youtube-square',
          searchTerms: []
        },
        {
          title: 'icon fa-h-square',
          searchTerms: []
        },
        {
          title: 'icon fa-hospital-o',
          searchTerms: []
        },
        {
          title: 'icon fa-medkit',
          searchTerms: []
        },
        {
          title: 'icon fa-stethoscope',
          searchTerms: []
        },
        {title: 'icon fa-user-md', searchTerms: []}
      ]
    }
  });

  $.components.register('iconpickerWb', {
    mode: 'default',
    defaults: {
      fullClassFormatter: function(value) {
        return 'icon ' + value;
      },
      templates: {
        buttons:
          '<button class="iconpicker-btn iconpicker-btn-cancel btn btn-default btn-sm">取消</button>' +
          ' <button class="iconpicker-btn iconpicker-btn-accept btn btn-primary btn-sm">确认</button>',
        search:
          '<input type="search" class="form-control iconpicker-search" placeholder="查找图标">'
      },
      icons: [
        {
          title: 'icon wb-dashboard',
          searchTerms: []
        },
        {
          title: 'icon wb-inbox',
          searchTerms: []
        },
        {
          title: 'icon wb-cloud',
          searchTerms: []
        },
        {
          title: 'icon wb-bell',
          searchTerms: []
        },
        {
          title: 'icon wb-book',
          searchTerms: []
        },
        {
          title: 'icon wb-bookmark',
          searchTerms: []
        },
        {
          title: 'icon wb-tag',
          searchTerms: []
        },
        {
          title: 'icon wb-library',
          searchTerms: []
        },
        {
          title: 'icon wb-share',
          searchTerms: []
        },
        {
          title: 'icon wb-reply',
          searchTerms: []
        },
        {
          title: 'icon wb-refresh',
          searchTerms: []
        },
        {
          title: 'icon wb-move',
          searchTerms: []
        },
        {
          title: 'icon wb-chat',
          searchTerms: []
        },
        {
          title: 'icon wb-chat-working',
          searchTerms: []
        },
        {
          title: 'icon wb-chat-text',
          searchTerms: []
        },
        {
          title: 'icon wb-chat-group',
          searchTerms: []
        },
        {
          title: 'icon wb-envelope',
          searchTerms: []
        },
        {
          title: 'icon wb-envelope-open',
          searchTerms: []
        },
        {
          title: 'icon wb-user',
          searchTerms: []
        },
        {
          title: 'icon wb-user-circle',
          searchTerms: []
        },
        {
          title: 'icon wb-users',
          searchTerms: []
        },
        {
          title: 'icon wb-user-add',
          searchTerms: []
        },
        {
          title: 'icon wb-grid-9',
          searchTerms: []
        },
        {
          title: 'icon wb-grid-4',
          searchTerms: []
        },
        {
          title: 'icon wb-menu',
          searchTerms: []
        },
        {
          title: 'icon wb-layout',
          searchTerms: []
        },
        {
          title: 'icon wb-fullscreen',
          searchTerms: []
        },
        {
          title: 'icon wb-fullscreen-exit',
          searchTerms: []
        },
        {
          title: 'icon wb-expand',
          searchTerms: []
        },
        {
          title: 'icon wb-contract',
          searchTerms: []
        },
        {
          title: 'icon wb-arrow-expand',
          searchTerms: []
        },
        {
          title: 'icon wb-arrow-shrink',
          searchTerms: []
        },
        {
          title: 'icon wb-desktop',
          searchTerms: []
        },
        {
          title: 'icon wb-mobile',
          searchTerms: []
        },
        {
          title: 'icon wb-signal',
          searchTerms: []
        },
        {
          title: 'icon wb-power',
          searchTerms: []
        },
        {
          title: 'icon wb-more-horizontal',
          searchTerms: []
        },
        {
          title: 'icon wb-more-vertical',
          searchTerms: []
        },
        {
          title: 'icon wb-globe',
          searchTerms: []
        },
        {
          title: 'icon wb-map',
          searchTerms: []
        },
        {
          title: 'icon wb-flag',
          searchTerms: []
        },
        {
          title: 'icon wb-pie-chart',
          searchTerms: []
        },
        {
          title: 'icon wb-stats-bars',
          searchTerms: []
        },
        {
          title: 'icon wb-pluse',
          searchTerms: []
        },
        {
          title: 'icon wb-home',
          searchTerms: []
        },
        {
          title: 'icon wb-shopping-cart',
          searchTerms: []
        },
        {
          title: 'icon wb-payment',
          searchTerms: []
        },
        {
          title: 'icon wb-briefcase',
          searchTerms: []
        },
        {
          title: 'icon wb-search',
          searchTerms: []
        },
        {
          title: 'icon wb-zoom-in',
          searchTerms: []
        },
        {
          title: 'icon wb-zoom-out',
          searchTerms: []
        },
        {
          title: 'icon wb-download',
          searchTerms: []
        },
        {
          title: 'icon wb-upload',
          searchTerms: []
        },
        {
          title: 'icon wb-sort-asc',
          searchTerms: []
        },
        {
          title: 'icon wb-sort-des',
          searchTerms: []
        },
        {
          title: 'icon wb-graph-up',
          searchTerms: []
        },
        {
          title: 'icon wb-graph-down',
          searchTerms: []
        },
        {
          title: 'icon wb-replay',
          searchTerms: []
        },
        {
          title: 'icon wb-edit',
          searchTerms: []
        },
        {
          title: 'icon wb-pencil',
          searchTerms: []
        },
        {
          title: 'icon wb-rubber',
          searchTerms: []
        },
        {
          title: 'icon wb-crop',
          searchTerms: []
        },
        {
          title: 'icon wb-eye',
          searchTerms: []
        },
        {
          title: 'icon wb-eye-close',
          searchTerms: []
        },
        {
          title: 'icon wb-image',
          searchTerms: []
        },
        {
          title: 'icon wb-gallery',
          searchTerms: []
        },
        {
          title: 'icon wb-video',
          searchTerms: []
        },
        {
          title: 'icon wb-camera',
          searchTerms: []
        },
        {
          title: 'icon wb-folder',
          searchTerms: []
        },
        {
          title: 'icon wb-clipboard',
          searchTerms: []
        },
        {
          title: 'icon wb-order',
          searchTerms: []
        },
        {
          title: 'icon wb-file',
          searchTerms: []
        },
        {
          title: 'icon wb-copy',
          searchTerms: []
        },
        {
          title: 'icon wb-add-file',
          searchTerms: []
        },
        {
          title: 'icon wb-print',
          searchTerms: []
        },
        {
          title: 'icon wb-calendar',
          searchTerms: []
        },
        {
          title: 'icon wb-time',
          searchTerms: []
        },
        {
          title: 'icon wb-trash',
          searchTerms: []
        },
        {
          title: 'icon wb-plugin',
          searchTerms: []
        },
        {
          title: 'icon wb-extension',
          searchTerms: []
        },
        {
          title: 'icon wb-memory',
          searchTerms: []
        },
        {
          title: 'icon wb-settings',
          searchTerms: []
        },
        {
          title: 'icon wb-scissor',
          searchTerms: []
        },
        {
          title: 'icon wb-wrench',
          searchTerms: []
        },
        {
          title: 'icon wb-hammer',
          searchTerms: []
        },
        {
          title: 'icon wb-lock',
          searchTerms: []
        },
        {
          title: 'icon wb-unlock',
          searchTerms: []
        },
        {
          title: 'icon wb-volume-low',
          searchTerms: []
        },
        {
          title: 'icon wb-volume-high',
          searchTerms: []
        },
        {
          title: 'icon wb-volume-off',
          searchTerms: []
        },
        {
          title: 'icon wb-pause',
          searchTerms: []
        },
        {
          title: 'icon wb-play',
          searchTerms: []
        },
        {
          title: 'icon wb-stop',
          searchTerms: []
        },
        {
          title: 'icon wb-musical',
          searchTerms: []
        },
        {
          title: 'icon wb-random',
          searchTerms: []
        },
        {
          title: 'icon wb-reload',
          searchTerms: []
        },
        {
          title: 'icon wb-loop',
          searchTerms: []
        },
        {
          title: 'icon wb-text',
          searchTerms: []
        },
        {
          title: 'icon wb-bold',
          searchTerms: []
        },
        {
          title: 'icon wb-italic',
          searchTerms: []
        },
        {
          title: 'icon wb-underline',
          searchTerms: []
        },
        {
          title: 'icon wb-format-clear',
          searchTerms: []
        },
        {
          title: 'icon wb-text-type',
          searchTerms: []
        },
        {
          title: 'icon wb-table',
          searchTerms: []
        },
        {
          title: 'icon wb-attach-file',
          searchTerms: []
        },
        {
          title: 'icon wb-paperclip',
          searchTerms: []
        },
        {
          title: 'icon wb-link-intact',
          searchTerms: []
        },
        {
          title: 'icon wb-link',
          searchTerms: []
        },
        {
          title: 'icon wb-link-broken',
          searchTerms: []
        },
        {
          title: 'icon wb-indent-increase',
          searchTerms: []
        },
        {
          title: 'icon wb-indent-decrease',
          searchTerms: []
        },
        {
          title: 'icon wb-align-justify',
          searchTerms: []
        },
        {
          title: 'icon wb-align-left',
          searchTerms: []
        },
        {
          title: 'icon wb-align-center',
          searchTerms: []
        },
        {
          title: 'icon wb-align-right',
          searchTerms: []
        },
        {
          title: 'icon wb-list-numbered',
          searchTerms: []
        },
        {
          title: 'icon wb-list-bulleted',
          searchTerms: []
        },
        {
          title: 'icon wb-list',
          searchTerms: []
        },
        {
          title: 'icon wb-emoticon',
          searchTerms: []
        },
        {
          title: 'icon wb-quote-right',
          searchTerms: []
        },
        {
          title: 'icon wb-code',
          searchTerms: []
        },
        {
          title: 'icon wb-code-working',
          searchTerms: []
        },
        {
          title: 'icon wb-code-unfold',
          searchTerms: []
        },
        {
          title: 'icon wb-chevron-right',
          searchTerms: []
        },
        {
          title: 'icon wb-chevron-left',
          searchTerms: []
        },
        {
          title: 'icon wb-chevron-left-mini',
          searchTerms: []
        },
        {
          title: 'icon wb-chevron-right-mini',
          searchTerms: []
        },
        {
          title: 'icon wb-chevron-up',
          searchTerms: []
        },
        {
          title: 'icon wb-chevron-down',
          searchTerms: []
        },
        {
          title: 'icon wb-chevron-up-mini',
          searchTerms: []
        },
        {
          title: 'icon wb-chevron-down-mini',
          searchTerms: []
        },
        {
          title: 'icon wb-arrow-left',
          searchTerms: []
        },
        {
          title: 'icon wb-arrow-right',
          searchTerms: []
        },
        {
          title: 'icon wb-arrow-up',
          searchTerms: []
        },
        {
          title: 'icon wb-arrow-down',
          searchTerms: []
        },
        {
          title: 'icon wb-dropdown',
          searchTerms: []
        },
        {
          title: 'icon wb-dropup',
          searchTerms: []
        },
        {
          title: 'icon wb-dropright',
          searchTerms: []
        },
        {
          title: 'icon wb-dropleft',
          searchTerms: []
        },
        {
          title: 'icon wb-sort-vertical',
          searchTerms: []
        },
        {
          title: 'icon wb-triangle-left',
          searchTerms: []
        },
        {
          title: 'icon wb-triangle-right',
          searchTerms: []
        },
        {
          title: 'icon wb-triangle-down',
          searchTerms: []
        },
        {
          title: 'icon wb-triangle-up',
          searchTerms: []
        },
        {
          title: 'icon wb-check-circle',
          searchTerms: []
        },
        {
          title: 'icon wb-check',
          searchTerms: []
        },
        {
          title: 'icon wb-check-mini',
          searchTerms: []
        },
        {
          title: 'icon wb-close',
          searchTerms: []
        },
        {
          title: 'icon wb-close-mini',
          searchTerms: []
        },
        {
          title: 'icon wb-plus-circle',
          searchTerms: []
        },
        {
          title: 'icon wb-plus',
          searchTerms: []
        },
        {
          title: 'icon wb-minus-circle',
          searchTerms: []
        },
        {
          title: 'icon wb-minus',
          searchTerms: []
        },
        {
          title: 'icon wb-alert-circle',
          searchTerms: []
        },
        {
          title: 'icon wb-alert',
          searchTerms: []
        },
        {
          title: 'icon wb-help-circle',
          searchTerms: []
        },
        {
          title: 'icon wb-help',
          searchTerms: []
        },
        {
          title: 'icon wb-info-circle',
          searchTerms: []
        },
        {
          title: 'icon wb-info',
          searchTerms: []
        },
        {
          title: 'icon wb-warning',
          searchTerms: []
        },
        {
          title: 'icon wb-heart',
          searchTerms: []
        },
        {
          title: 'icon wb-heart-outline',
          searchTerms: []
        },
        {
          title: 'icon wb-star',
          searchTerms: []
        },
        {
          title: 'icon wb-star-half',
          searchTerms: []
        },
        {
          title: 'icon wb-star-outline',
          searchTerms: []
        },
        {
          title: 'icon wb-thumb-up',
          searchTerms: []
        },
        {
          title: 'icon wb-thumb-down',
          searchTerms: []
        },
        {
          title: 'icon wb-small-point',
          searchTerms: []
        },
        {
          title: 'icon wb-medium-point',
          searchTerms: []
        },
        {title: 'icon wb-large-point', searchTerms: []}
      ]
    }
  });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("formatter", {
        mode: "init",
        defaults: {
            persistent: true
        },

        init: function(context) {
            if (!$.fn.formatter) {
                return;
            }

            var defaults = $.components.getDefaults("formatter"),
                browserName = navigator.userAgent.toLowerCase(),
                ieOptions;

            if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
                ieOptions = {
                    persistent: false
                };
            } else {
                ieOptions = {};
            }

            $('[data-plugin="formatter"]', context).each(function() {
                var options = $.extend({}, defaults, ieOptions, $(this).data());
                if (options.pattern) {
                    options.pattern = options.pattern
                        .replace(/\[\[/g, "{{")
                        .replace(/\]\]/g, "}}");
                }
                $(this).formatter(options);
            });
        }
    });
})(window, document, jQuery);

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

(function(window, document, $) {
    "use strict";

    $.components.register("gridstack", {
        mode: "init",
        defaults: {
            cellHeight: 80,
            verticalMargin: 20
        },
        init: function(context) {
            if (!$.fn.gridstack) {
                return;
            }

            var defaults = $.components.getDefaults("gridstack");

            $('[data-plugin="gridstack"]', context).each(function() {
                var options = $.extend(true, {}, defaults, $(this).data());

                $(this).gridstack(options);
            });
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("highlight", {
        mode: "init",
        defaults: {},
        init: function(context) {
            if (typeof hljs === "undefined") {
                return;
            }

            $('[data-plugin="highlight"]', context).each(function(i, block) {
                hljs.highlightBlock(block);
            });
        }
    });
})(window, document, jQuery);

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

(function(window, document, $) {
    "use strict";

    $.components.register("iCheck", {
        mode: "default",
        defaults: {
            checkboxClass: "icheckbox_minimal",
            radioClass: "iradio_minimal"
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("input-group-file", {
        api: function() {
            $(document).on(
                "change",
                ".input-group-file [type=file]",
                function() {
                    var $this = $(this);
                    var $text = $(this)
                        .parents(".input-group-file")
                        .find(".form-control");
                    var value = "";

                    $.each($this[0].files, function(i, file) {
                        value += file.name + ", ";
                    });
                    value = value.substring(0, value.length - 2);

                    $text.val(value);
                }
            );
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("isotope", {
        mode: "init",
        defaults: {},
        init: function(context) {
            if (typeof $.fn.isotope === "undefined") {
                return;
            }
            var defaults = $.components.getDefaults("isotope");

            var callback = function() {
                $('[data-plugin="isotope"]', context).each(function() {
                    var $this = $(this),
                        options = $.extend(true, {}, defaults, $this.data());

                    $this.isotope(options);
                });
            };
            if (context !== document) {
                callback();
            } else {
                $(window).on("load", function() {
                    callback();
                });
            }
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("appear", {
        defaults: {},
        api: function() {
            if (!$.fn.appear) {
                return;
            }

            $("#admui-pageContent").on(
                "appear",
                '[data-plugin="appear"]',
                function() {
                    var $item = $(this),
                        animate = $item.data("animate");

                    if ($item.hasClass("appear-no-repeat")) {
                        return;
                    }
                    $item
                        .removeClass("invisible")
                        .addClass("animation-" + animate);

                    if ($item.data("repeat") === false) {
                        $item.addClass("appear-no-repeat");
                    }
                }
            );

            $("#admui-pageContent").on(
                "disappear",
                '[data-plugin="appear"]',
                function() {
                    var $item = $(this),
                        animate = $item.data("animate");

                    if ($item.hasClass("appear-no-repeat")) {
                        return;
                    }

                    $item
                        .addClass("invisible")
                        .removeClass("animation-" + animate);
                }
            );
        },

        init: function(context) {
            if (!$.fn.appear) {
                return;
            }
            var defaults = $.components.getDefaults("appear");

            $('[data-plugin="appear"]', context).appear(defaults);
            $('[data-plugin="appear"]', context)
                .not(":appeared")
                .addClass("invisible");
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("knob", {
        mode: "default",
        defaults: {
            min: -50,
            max: 50,
            width: 120,
            height: 120,
            thickness: ".1"
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("labelauty", {
        mode: "default",
        defaults: {
            same_width: true,
            checked_label: "选中",
            unchecked_label: "未选中"
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("strength", {
        mode: "default",
        defaults: {
            showMeter: true,
            showToggle: false,

            templates: {
                toggle:
                    '<div class="checkbox-custom checkbox-primary show-password-wrap"><input type="checkbox" class="{toggleClass}" title="显示/隐藏密码" id="show_password" /><label for="show_password">显示密码</label></div>',
                meter: '<div class="{meterClass}">{score}</div>',
                score: '<div class="{scoreClass}"></div>',
                main:
                    '<div class="{containerClass}">{input}{meter}{toggle}</div>'
            },

            classes: {
                container: "strength-container",
                status: "strength-{status}",
                input: "strength-input",
                toggle: "strength-toggle",
                meter: "strength-meter",
                score: "strength-score"
            },

            scoreLables: {
                invalid: "Invalid",
                weak: "Weak",
                good: "Good",
                strong: "Strong"
            },

            scoreClasses: {
                invalid: "strength-invalid",
                weak: "strength-weak",
                good: "strength-good",
                strong: "strength-strong"
            }
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("treegrid", {
        mode: "default",
        defaults: {
            expanderExpandedClass: "icon wb-triangle-down",
            expanderCollapsedClass: "icon wb-triangle-right"
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
  'use strict';

  $.components.register('wizard', {
    mode: 'default',
    defaults: {
      step: '.steps .step, .pearls .pearl',
      buttonLabels: {
        back: '上一步',
        next: '下一步',
        finish: '完成'
      },
      templates: {
        buttons: function() {
          var options = this.options;
          return (
            '<div class="wizard-buttons"><a class="btn btn-default btn-outline" href="#' +
            this.id +
            '" data-wizard="back" role="button">' +
            options.buttonLabels.back +
            '</a><a class="btn btn-primary btn-outline float-right ml-10" href="#' +
            this.id +
            '" data-wizard="next" role="button">' +
            options.buttonLabels.next +
            '</a><a class="btn btn-success btn-outline float-right" href="#' +
            this.id +
            '" data-wizard="finish" role="button">' +
            options.buttonLabels.finish +
            '</a></div>'
          );
        }
      },
      classes: {
        step: {
          done: 'done',
          error: 'error',
          active: 'active',
          disabled: 'disabled',
          activing: 'activing',
          loading: 'loading'
        },
        pane: {
          active: 'active',
          activing: 'activing'
        },
        button: {
          hide: 'd-none d-sm-block',
          disabled: 'disabled'
        }
      }
    }
  });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("jstree", {
        mode: "default",
        defaults: {}
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("timepicker", {
        mode: "default",
        defaults: {
            lang: {
                am: "上午",
                pm: "下午",
                AM: "上午",
                PM: "下午",
                decimal: ".",
                mins: "分钟",
                hr: "小时",
                hrs: "小时"
            },
            timeFormat: "ag:i"
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    /*global Ladda*/

    $.components.register("ladda", {
        mode: "init",
        defaults: {
            timeout: 2000
        },
        init: function() {
            if (typeof Ladda === "undefined") {
                return;
            }

            var defaults = $.components.getDefaults("ladda");
            Ladda.bind('[data-plugin="ladda"]', defaults);
        }
    });

    $.components.register("laddaProgress", {
        mode: "init",
        defaults: {},
        init: function() {
            if (typeof Ladda === "undefined") {
                return;
            }

            var defaults = $.components.getDefaults("laddaProgress"),
                options = $.extend({}, defaults, {
                    callback: function(instance) {
                        var progress = 0;
                        var interval = setInterval(function() {
                            progress = Math.min(
                                progress + Math.random() * 0.1,
                                1
                            );
                            instance.setProgress(progress);

                            if (progress === 1) {
                                instance.stop();
                                clearInterval(interval);
                            }
                        }, 300);
                    }
                });
            Ladda.bind('[data-plugin="laddaProgress"]', options);
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("magnificPopup", {
        mode: "default",
        defaults: {
            type: "image",
            closeOnContentClick: true,
            /*image: {
                verticalFit: true
            },*/
            tClose: "关闭 (ESC)",
            tLoading: "加载中...",
            gallery: {
                tPrev: "上一张",
                tNext: "下一张",
                tCounter: "%curr% / %total%"
            },
            image: {
                tError: '<a href="%url%" target="_blank">图片</a> 加载失败'
            },
            ajax: {
                tError: '<a href="%url%" target="_blank">内容</a> 加载失败'
            }
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("masonry", {
        mode: "init",
        defaults: {
            itemSelector: ".masonry-item"
        },
        init: function(context) {
            if (typeof $.fn.masonry === "undefined") {
                return;
            }
            var defaults = $.components.getDefaults("masonry");

            //var callback = function () {
            $('[data-plugin="masonry"]', context).each(function() {
                var $this = $(this),
                    options = $.extend(true, {}, defaults, $this.data());

                $this.masonry(options);
            });
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("matchHeight", {
        mode: "init",
        defaults: {},
        init: function(context) {
            if (typeof $.fn.matchHeight === "undefined") {
                return;
            }
            var defaults = $.components.getDefaults("matchHeight");

            $('[data-plugin="matchHeight"]', context).each(function() {
                var $this = $(this),
                    options = $.extend(true, {}, defaults, $this.data()),
                    matchSelector = $this.data("matchSelector");

                if (matchSelector) {
                    $this.find(matchSelector).matchHeight(options);
                } else {
                    $this.children().matchHeight(options);
                }
            });
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("material", {
        init: function(context) {
            $(".form-material", context).each(function() {
                var $this = $(this);

                if ($this.data("material") === true) {
                    return;
                }

                var $control = $this.find(".form-control");

                // Add hint label if required
                if ($control.attr("data-hint")) {
                    $control.after(
                        "<div class=hint>" +
                            $control.attr("data-hint") +
                            "</div>"
                    );
                }

                if ($this.hasClass("floating")) {
                    // Add floating label if required
                    if ($control.hasClass("floating-label")) {
                        var placeholder = $control.attr("placeholder");
                        $control
                            .attr("placeholder", null)
                            .removeClass("floating-label");
                        $control.after(
                            "<div class=floating-label>" +
                                placeholder +
                                "</div>"
                        );
                    }

                    // Set as empty if is empty
                    if (
                        $control.val() === null ||
                        $control.val() === "undefined" ||
                        $control.val() === ""
                    ) {
                        $control.addClass("empty");
                    }
                }

                // Support for file input
                if ($control.next().is("[type=file]")) {
                    $this.addClass("form-material-file");
                }

                $this.data("material", true);
            });
        },
        api: function() {
            function _isChar(e) {
                if (typeof e.which === "undefined") {
                    return true;
                } else if (typeof e.which === "number" && e.which > 0) {
                    return (
                        !e.ctrlKey &&
                        !e.metaKey &&
                        !e.altKey &&
                        e.which !== 8 &&
                        e.which !== 9
                    );
                }
                return false;
            }

            $(document)
                .on(
                    "keydown.site.material paste.site.material",
                    ".form-control",
                    function(e) {
                        if (_isChar(e)) {
                            $(this).removeClass("empty");
                        }
                    }
                )
                .on(
                    "keyup.site.material change.site.material",
                    ".form-control",
                    function() {
                        var $this = $(this);
                        if (
                            $this.val() === "" &&
                            (typeof $this[0].checkValidity !== "undefined" &&
                                $this[0].checkValidity())
                        ) {
                            $this.addClass("empty");
                        } else {
                            $this.removeClass("empty");
                        }
                    }
                )
                .on("focus", ".form-material-file", function() {
                    $(this)
                        .find("input")
                        .addClass("focus");
                })
                .on("blur", ".form-material-file", function() {
                    $(this)
                        .find("input")
                        .removeClass("focus");
                })
                .on("change", ".form-material-file [type=file]", function() {
                    var $this = $(this);
                    var value = "";
                    $.each($this[0].files, function(i, file) {
                        value += file.name + ", ";
                    });
                    value = value.substring(0, value.length - 2);
                    if (value) {
                        $this.prev().removeClass("empty");
                    } else {
                        $this.prev().addClass("empty");
                    }
                    $this.prev().val(value);
                });
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("multiSelect", {
        mode: "default",
        defaults: {}
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("nestable", {
        mode: "default",
        defaults: {}
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("nprogress", {
        mode: "init",
        defaults: {
            minimum: 0.15,
            trickleRate: 0.07,
            trickleSpeed: 360,
            showSpinner: false,
            template:
                '<div class="bar" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        },
        init: function() {
            if (typeof NProgress === "undefined") {
                return;
            }
            var defaults = $.components.getDefaults("nprogress");
            NProgress.configure(defaults);
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
  'use strict';

  $.components.register('owlCarousel', {
    mode: 'default',
    defaults: {
      loop: true,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        }
      }
    }
  });
})(window, document, jQuery);

(function(window, document, $) {
  'use strict';

  $.components.register('panel', {
    api: function() {
      $(document).on('click.site.panel', '[data-toggle="panel-fullscreen"]', function(e) {
        var api = $(this)
          .closest('.panel')
          .data('panel-api');
        api.toggleFullscreen();

        e.preventDefault();
      });

      $(document).on('click.site.panel', '[data-toggle="panel-collapse"]', function(e) {
        var api = $(this)
          .closest('.panel')
          .data('panel-api');
        api.toggleContent();

        e.preventDefault();
      });

      $(document).on('click.site.panel', '[data-toggle="panel-close"]', function(e) {
        var api = $(this)
          .closest('.panel')
          .data('panel-api');
        api.close();

        e.preventDefault();
      });

      $(document).on('click.site.panel', '[data-toggle="panel-refresh"]', function(e) {
        var $item = $(this);
        var api = $item.closest('.panel').data('panel-api');
        var callback = $item.data('loadCallback');

        if ($.isFunction(window[callback])) {
          api.load(window[callback]);
        } else {
          api.load();
        }

        e.preventDefault();
      });
    },

    init: function(context) {
      $('.panel', context).each(function() {
        var $this = $(this);

        var isFullscreen = false;
        var isClose = false;
        var isCollapse = false;
        var isLoading = false;

        var $fullscreen = $this.find('[data-toggle="panel-fullscreen"]');
        var $collapse = $this.find('[data-toggle="panel-collapse"]');
        var $loading;
        var self = this;
        var api = {
          load: function(callback) {
            var type = $this.data('loader-type');
            if (!type) {
              type = 'default';
            }

            $loading = $(
              '<div class="panel-loading">' +
                '<div class="loader loader-' +
                type +
                '"></div>' +
                '</div>'
            );

            $loading.appendTo($this);

            $this.addClass('is-loading');
            $this.trigger('loading.uikit.panel');
            isLoading = true;

            if ($.isFunction(callback)) {
              callback.call(self, this.done);
            }
          },
          done: function() {
            if (isLoading === true) {
              $loading.remove();
              $this.removeClass('is-loading');
              $this.trigger('loading.done.uikit.panel');
            }
          },
          toggleContent: function() {
            if (isCollapse) {
              this.showContent();
            } else {
              this.hideContent();
            }
          },

          showContent: function() {
            if (isCollapse !== false) {
              $this.removeClass('is-collapse');

              if ($collapse.hasClass('wb-plus')) {
                $collapse.removeClass('wb-plus').addClass('wb-minus');
              }

              $this.trigger('shown.uikit.panel');

              isCollapse = false;
            }
          },

          hideContent: function() {
            if (isCollapse !== true) {
              $this.addClass('is-collapse');

              if ($collapse.hasClass('wb-minus')) {
                $collapse.removeClass('wb-minus').addClass('wb-plus');
              }

              $this.trigger('hidden.uikit.panel');
              isCollapse = true;
            }
          },

          toggleFullscreen: function() {
            if (isFullscreen) {
              this.leaveFullscreen();
            } else {
              this.enterFullscreen();
            }
          },
          enterFullscreen: function() {
            if (isFullscreen !== true) {
              $this.addClass('is-fullscreen');

              if ($fullscreen.hasClass('wb-expand')) {
                $fullscreen.removeClass('wb-expand').addClass('wb-contract');
              }

              $this.trigger('enter.fullscreen.uikit.panel');
              isFullscreen = true;
            }
          },
          leaveFullscreen: function() {
            if (isFullscreen !== false) {
              $this.removeClass('is-fullscreen');

              if ($fullscreen.hasClass('wb-contract')) {
                $fullscreen.removeClass('wb-contract').addClass('wb-expand');
              }

              $this.trigger('leave.fullscreen.uikit.panel');
              isFullscreen = false;
            }
          },
          toggle: function() {
            if (isClose) {
              this.open();
            } else {
              this.close();
            }
          },
          open: function() {
            if (isClose !== false) {
              $this.removeClass('is-close');
              $this.trigger('open.uikit.panel');

              isClose = false;
            }
          },
          close: function() {
            if (isClose !== true) {
              $this.addClass('is-close');
              $this.trigger('close.uikit.panel');

              isClose = true;
            }
          }
        };

        if ($this.hasClass('is-collapse')) {
          isCollapse = true;
        }

        $this.data('panel-api', api);
      });
    }
  });
})(window, document, jQuery);

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

(function(window, document, $) {
    "use strict";

    /*global plyr*/

    $.components.register("plyr", {
        mode: "init",
        default: {
            i18n: {
                restart: "重新开始",
                rewind: "向后 {seektime} 秒",
                play: "播放",
                pause: "暂停",
                forward: "向前 {seektime} 秒",
                buffered: "缓冲",
                currentTime: "当前时间",
                duration: "持续时间",
                volume: "声音",
                toggleMute: "切换静音",
                toggleCaptions: "切换字幕",
                toggleFullscreen: "切换全屏"
            }
        },
        init: function() {
            if (typeof plyr === "undefined") {
                return;
            }

            (function(d, u) {
                var a = new XMLHttpRequest(),
                    b = d.body;

                // Check for CORS support
                if ("withCredentials" in a) {
                    a.open("GET", u, true);
                    a.send();
                    a.onload = function() {
                        var c = d.createElement("div");
                        c.style.display = "none";
                        c.innerHTML = a.responseText;
                        b.insertBefore(c, b.childNodes[0]);
                    };
                }
            })(document, "https://cdn.plyr.io/1.1.5/sprite.svg");

            plyr.setup();
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("rating", {
        mode: "init",
        defaults: {
            targetKeep: true,
            icon: "font",
            starType: "i",
            starOff: "icon wb-star",
            starOn: "icon wb-star orange-600",
            cancelOff: "icon wb-minus-circle",
            cancelOn: "icon wb-minus-circle orange-600",
            starHalf: "icon wb-star-half orange-500",
            cancelHint: "取消评分",
            hints: ["很差", "差", "一般", "好", "非常好"]
        },
        init: function(context) {
            if (!$.fn.raty) {
                return;
            }

            var defaults = this.defaults;

            $('[data-plugin="rating"]', context).each(function() {
                var $this = $(this);

                var options = $.extend(true, {}, defaults, $this.data());

                if (options.hints && typeof options.hints === "string") {
                    options.hints = options.hints.split(",");
                }

                $this.raty(options);
            });
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("select2", {
        mode: "default",
        defaults: {
            width: "style",
            language: "zh-CN"
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("selectable", {
        mode: "init",
        defaults: {
            allSelector: ".selectable-all",
            itemSelector: ".selectable-item",
            rowSelector: "tr",
            rowSelectable: false,
            rowActiveClass: "active",
            onChange: null
        },
        init: function(context) {
            if (!$.fn.asSelectable) {
                return;
            }
            var defaults = $.components.getDefaults("selectable");

            $(
                '[data-plugin="selectable"], [data-selectable="selectable"]',
                context
            ).each(function() {
                var options = $.extend({}, defaults, $(this).data());
                $(this).asSelectable(options);
            });
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("slidePanel", {
        mode: "manual",
        defaults: {
            closeSelector: ".slidePanel-close",
            mouseDragHandler: ".slidePanel-handler",
            loading: {
                template: function(options) {
                    return (
                        '<div class="' +
                        options.classes.loading +
                        '">' +
                        '<div class="loader loader-default"></div>' +
                        "</div>"
                    );
                },
                showCallback: function(options) {
                    this.$el.addClass(options.classes.loading + "-show");
                },
                hideCallback: function(options) {
                    this.$el.removeClass(options.classes.loading + "-show");
                }
            }
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
  'use strict';

  $.components.register('mCustomScrollbar', {
    mode: 'default',
    defaults: {
      scrollInertia: 300,
      theme: 'dark',
      autoHideScrollbar: true
    }
  });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("summernote", {
        mode: "default",
        defaults: {
            height: 300,
            dialogsInBody: true
        }
    });
})(window, document, jQuery);

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

(function(window, document, $) {
    "use strict";

    $.components.register("table", {
        mode: "api",
        api: function() {
            var touch = typeof document.ontouchstart !== "undefined",
                type = "click";

            if (touch) {
                type = "touchstart";
            }

            $(document).on(type, ".table-section", function(e) {
                if (
                    "checkbox" !== e.target.type &&
                    "button" !== e.target.type &&
                    "a" !== e.target.tagName.toLowerCase() &&
                    !$(e.target).parent("div.checkbox-custom").length
                ) {
                    if ($(this).hasClass("active")) {
                        $(this).removeClass("active");
                    } else {
                        $(this)
                            .siblings(".table-section")
                            .removeClass("active");
                        $(this).addClass("active");
                    }
                }
            });
        }
    });
})(window, document, jQuery);

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

(function(window, document, $) {
    "use strict";

    $.components.register("taskList", {
        mode: "api",
        api: function() {
            $(document).on(
                "change.site.task",
                '[data-role="task"]',
                function() {
                    var $list = $(this),
                        $checkbox = $list.find('[type="checkbox"]');
                    if ($checkbox.is(":checked")) {
                        $list.addClass("task-done");
                    } else {
                        $list.removeClass("task-done");
                    }
                }
            );

            $('[data-role="task"]').trigger("change.site.task");
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("toastr", {
        mode: "api",
        defaults: {},
        api: function() {
            if (typeof toastr === "undefined") {
                return;
            }
            var defaults = $.components.getDefaults("toastr");

            $("#admui-pageContent").on(
                "click.site.toastr",
                '[data-plugin="toastr"]',
                function(e) {
                    e.preventDefault();

                    var $this = $(this),
                        options = $.extend(true, {}, defaults, $this.data()),
                        message = options.message || "",
                        type = options.type || "info",
                        title = options.title || undefined;

                    switch (type) {
                        case "success":
                            toastr.success(message, title, options);
                            break;
                        case "warning":
                            toastr.warning(message, title, options);
                            break;
                        case "error":
                            toastr.error(message, title, options);
                            break;
                        case "info":
                            toastr.info(message, title, options);
                            break;
                        default:
                            toastr.info(message, title, options);
                    }
                }
            );
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("toolbar", {
        mode: "init",
        defaults: {
            adjustment: 15,
            zIndex: 1900
        },
        init: function(context) {
            if (!$.fn.toolbar) {
                return;
            }

            var defaults = $.components.getDefaults("toolbar");

            $('[data-plugin="toolbar"]', context).each(function() {
                var $this = $(this);
                var content = $this.data("toolbar");

                var options = $.extend(true, {}, defaults);

                if (content) {
                    options.content = content;
                }

                $this.toolbar(options);
            });
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("twbsPagination", {
        mode: "default",
        defaults: {
            first:
                '<span class="icon fa-angle-double-left" title="第一页"></span>',
            prev: '<span class="icon fa-angle-left" title="上一页"></span>',
            next: '<span class="icon fa-angle-right" title="下一页"></span>',
            last:
                '<span class="icon fa-angle-double-right" title="最后一页"></span>'
        }
    });
})(window, document, jQuery);

(function(window, document, $) {
    "use strict";

    $.components.register("webuiPopover", {
        mode: "default",
        defaults: {
            trigger: "click",
            width: 320,
            multi: true,
            cloaseable: false,
            style: "",
            delay: 300,
            padding: true
        }
    });
})(window, document, jQuery);
