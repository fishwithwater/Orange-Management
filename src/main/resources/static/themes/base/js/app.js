
(function(window, document, $) {
  /* global toastr */

  /* 通用功能模块（可配置增加，也可扩展） */

  var app;

  // ajax请求完成时通用操作
  $.ajaxSetup({
    complete: function(xhr) {
      // 响应头sessionstatus超时时跳转到登出页面
      if (xhr.getResponseHeader('sessionstatus') === 'timeout') {
        toastr.warning('由于您长时间没有操作，登录已过期，请重新登录！');

        setTimeout(function() {
          window.top.location.href = '/logout';
        }, 1000);
      }
    }
  });

  // 配置项
  app = {
    pageAside: function() {
      // 小屏幕下侧边栏（展开&收起）操作
      var pageAside = $('.page-aside');
      var isOpen = pageAside.hasClass('open');

      pageAside.toggleClass('open', !isOpen);
    },
    getOperPermission: function() {
      var path = window.location.pathname;
      var result;

      $.ajax({
        url: $.configs.ctx + '/public/data/system/operation/operauths.json',
        type: 'GET',
        async: false,
        data: {requestUrl: path},
        dataType: 'JSON',
        success: function(res) {
          if (res.success) {
            result = res.data;
          } else {
            console.warn(res.msg);
          }
        },
        error: function(err) {
          console.log(err);
        }
      });
      return result;
    },
    run: function() {
      var self = this;

      // 侧边栏开关
      $(document).on('click', '.page-aside-switch', function(e) {
        self.pageAside();
        e.stopPropagation();
      });
    }
  };

  // 公有属性和方法（可扩展）
  window.App = $.queueModal.extend(app);
})(window, document, jQuery);
