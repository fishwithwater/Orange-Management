/**
 * admui-basic v2.1.0 (http://www.admui.com/)
 * Copyright 2015-2019 Admui Team
 * Licensed under the Admui License 1.1 (http://www.admui.com/about/license)
 */
(function(window, document, $) {
  'use strict';

  /* global _ */
  /* eslint no-underscore-dangle: ["error", { "allowAfterThis": true, "allow": ["_trigger", "_dequeue"] }] */

  // 自定义功能模块队列扩展（每个功能模块为一个成员）
  $.queueModal = $.queueModal || {};

  $.extend($.queueModal, {
    _queue: {
      prepare: [],
      run: [],
      complete: []
    },
    run: function() {
      var self = this;

      // 运行prepare队列项，完成后触发before.run事件
      this._dequeue('prepare', function() {
        self._trigger('before.run', self);

        // 运行run队列项，完成后触发after.run事件
        self._dequeue('run', function() {
          self._dequeue('complete', function() {
            self._trigger('after.run', self);
          });
        });
      });
    },
    _dequeue: function(name, done) {
      // 获取当前队列成员，执行该成员包含动作
      var self = this;
      // 获取该项队列中方法
      var fn = this.getQueue(name).shift();

      // 该项队列中有数据时继续执行队列中方法
      if (!_.isUndefined(fn)) {
        $.when(fn.call(self)).then(function() {
          self._dequeue(name, done);
        });
      } else if (_.isFunction(done)) {
        // 该项队列中没有数据 & done为function类型时执行该方法
        done.call(self);
      }
    },
    getQueue: function(name) {
      // 获取该项队列数据
      var result = false;
      // 遍历查询是否具有该队列项
      $.each(this._queue, function(key) {
        if (key === name) {
          result = true;
        }
      });

      // 没有该队列项时返回错误信息
      if (!result) {
        console.error('该队列项不存在');
      }

      return this._queue[name];
    },
    extend: function(obj) {
      // 公用模块对象队列扩展方法
      var opt = obj;

      // 遍历队列对象
      $.each(this._queue, function(name, queue) {
        // 自定义对象中有队列项并且为方法时将其推入队列，删除自定义对象中方法
        if (_.isFunction(opt[name])) {
          queue.unshift(opt[name]);

          delete opt[name];
        }
      });

      // 将剩余自定义对象合并到主对象中
      $.extend(this, opt);
      return this;
    },
    _trigger: function(name, obj) {
      // 队列阶段性完成时执行动作
      if (_.isUndefined(name)) {
        return;
      }

      // 触发绑定事件
      $(document).trigger(name + '.app', obj);
    }
  });

  // 实现插件的data-Api注册使用（提前检测和调用）
  $.components = $.components || {};

  $.extend($.components, {
    _components: {},
    register: function(name, obj) {
      // 注册自定义组件
      this._components[name] = obj;
    },
    init: function(name) {
      var self = this;
      var obj;

      // 没有组件名称时遍历初始化所有组件
      if (_.isUndefined(name)) {
        $.each(this._components, function(key) {
          self.init(key);
        });
        return;
      }

      // 获取组件定义对象
      obj = this.get(name);

      // 根据mode类型执行对应的定义方法
      switch (obj.mode) {
        case 'default':
          this._initDefault(name);
          break;
        case 'init':
          this._initComponent(obj);
          break;
        case 'api':
          this._initApi(obj);
          break;
        default:
          this._initApi(obj);
          this._initComponent(obj);
      }
    },
    _initDefault: function(name) {
      // jquery插件以$.fn方式的基本用法
      var defaults;

      if (_.isUndefined($.fn[name])) {
        return;
      }

      // 获取自定义配置参数
      defaults = this.getDefaults(name);

      // 遍历需使用该组件方法元素进行初始化
      $('[data-plugin=' + name + ']').each(function() {
        var $item = $(this);

        $item[name]($.extend(true, {}, defaults, $item.data()));
      });
    },
    _initComponent: function(obj) {
      // jquery插件的高级用法（根据具体需求额外配置的初始化方法,可以重复调用）
      _.isFunction(obj.init) && obj.init.call(obj);
    },
    _initApi: function(obj) {
      // 其他处理（对一些特殊插件根据具体需求额外配置的初始化方法，仅能调用一次）
      var opt = obj;

      // 尚未初始化 & opt.api是function类型时调用该方法
      if (!opt.apiCalled && _.isFunction(opt.api)) {
        opt.api.call(opt);
        // 标记为已完成一次调用
        opt.apiCalled = true;
      }
    },
    getDefaults: function(name) {
      // 获取自定义组件默认配置参数
      return this.get(name).defaults || {};
    },
    get: function(name) {
      // 没有发现注册的自定义组件时返回错误信息
      if (_.isUndefined(this._components[name])) {
        console.error('没有 component:' + name + ' 的任何注册信息！');
      }
      return this._components[name];
    }
  });

  // 配置基本信息
  $.configs = $.configs || {};

  $.extend($.configs, {
    _data: {},
    get: function() {
      // 获取config信息
      var data = this._data;
      var i = 0;
      var key = '';

      // 获取对象及子对象中的配置信息
      for (; i < arguments.length; i += 1) {
        key = arguments[i];
        if (_.isObject(data)) {
          data = data[key];
        } else {
          console.error('没有配置该信息');
          return null;
        }
      }

      return data;
    },
    set: function(name, value) {
      // 设置config信息
      this._data[name] = value;
    },
    extend: function(name, options) {
      // 扩展当前configs对象
      return $.extend(true, this.get(name), options);
    }
  });

  // 获取颜色配置信息
  $.getColor = function(name, level) {
    if (_.isUndefined($.configs.colors)) {
      console.error('不存在颜色配置对象，请检查配置文件');
    }

    if (_.isUndefined($.configs.colors[name])) {
      return undefined;
    }

    // 有level参数时根据level返回颜色值
    if (level && !_.isUndefined($.configs.colors[name][level])) {
      return $.configs.colors[name][level];
    }

    return $.configs.colors[name];
  };

  // 获取定义组件默认参数
  $.concatCpt = function(name, options) {
    return $.extend(true, {}, $.components.getDefaults(name), options);
  };

  // 本地存储对象操作 sessionStorage
  $.sessionStorage = $.sessionStorage || {};

  $.extend($.sessionStorage, {
    set: function(key, value) {
      var data = value;
      // 设置本地seesionStorage存储内容
      if (_.isUndefined(window.sessionStorage)) {
        console.error('该浏览器不支持sessionStorage对象');
      }

      // 没有参数时不存储任何内容
      if (arguments.length === 0) {
        return;
      }

      // 没有存储值时默认为空字符串
      if (_.isUndefined(data)) {
        data = '';
      }

      // 以字符串类型存储数据
      if (_.isObject(data)) {
        data = JSON.stringify(data);
      }

      sessionStorage.setItem(key, data);
    },
    get: function(key) {
      // 获取存储内容
      var value;

      if (!sessionStorage) {
        console.error('该浏览器不支持sessionStorage对象');
      }

      value = sessionStorage.getItem(key);

      // 不存在该存储内容
      if (!value) {
        return null;
      }

      return JSON.parse(value);
    },
    remove: function(key) {
      // 删除指定缓存
      if (!sessionStorage) {
        console.error('该浏览器不支持sessionStorage对象');
      }

      sessionStorage.removeItem(key);
    }
  });

  $.fn.serializeObject = function() {
    var obj = {};
    var array = this.serializeArray();

    $(array).each(function() {
      var name = this.name;
      var value = this.value;

      if (obj[name]) {
        if ($.isArray(obj[name])) {
          obj[name].push(value);
        } else {
          obj[name] = [obj[name], value];
        }
      } else {
        obj[name] = value;
      }
    });
    return obj;
  };
})(window, document, jQuery);
