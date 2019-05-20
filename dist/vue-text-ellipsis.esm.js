//
//
//
//
//
//
//

var script = {
  mounted: function mounted() {
    console.log(this);
    this.original = this.$slots.default[0].elm.textContent;

    window.addEventListener("resize", this.resize);

    this.resize();
  },

  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },

  methods: {
    resize: function resize() {
      if (this.prevWidth === this.$el.clientWidth) { return; }

      this.prevWidth = this.$el.clientWidth;

      // 対象の要素を、高さにautoを指定し非表示で複製する
      var temporary = this.$el.cloneNode(true),
        style = temporary.style;
      var s = this.original;

      temporary.textContent = this.original;

      // style.display = "none";
      style.position = "absolute";
      style.visibility = "none";
      style.overflow = "visible";
      style.width = this.$el.clientWidth + "px";
      style.height = "auto";

      this.$el.appendChild(temporary);

      // 指定した高さになるまで、20文字ずつ消去していく(最適化のため)
      while (s.length > 0 && temporary.clientHeight > this.$el.clientHeight) {
        s = s.substr(0, s.length - 20);
        temporary.textContent = s + "...";
      }

      s = this.original.substr(0, s.length + 20);
      temporary.textContent = s + "...";

      // 指定した高さになるまで、1文字ずつ消去していく
      while (s.length > 0 && temporary.clientHeight > this.$el.clientHeight) {
        s = s.substr(0, s.length - 1);
        temporary.textContent = s + "...";
      }
      this.$el.removeChild(temporary);

      // 文章を入れ替えて、複製した要素を削除する
      this.$el.textContent = s + "...";
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) { style.element.setAttribute('media', css.media); }
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) { style.element.removeChild(nodes[index]); }
      if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }else { style.element.appendChild(textNode); }
    }
  }
}

var browser = createInjector;

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("p", [_vm._t("default")], 2)
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-50299bb2_0", { source: "p[data-v-50299bb2] {\n  height: 100%;\n}\n\n/*# sourceMappingURL=TextEllipsis.vue.map */", map: {"version":3,"sources":["C:\\git\\github\\vue-text-ellipsis\\src\\TextEllipsis.vue","TextEllipsis.vue"],"names":[],"mappings":"AAqEA;EACA,YAAA;ACpEA;;AAEA,2CAA2C","file":"TextEllipsis.vue","sourcesContent":["<template>\r\n  <p>\r\n    <slot></slot>\r\n  </p>\r\n</template>\r\n\r\n\r\n<script>\r\nexport default {\r\n  mounted() {\r\n    console.log(this);\r\n    this.original = this.$slots.default[0].elm.textContent;\r\n\r\n    window.addEventListener(\"resize\", this.resize);\r\n\r\n    this.resize();\r\n  },\r\n\r\n  beforeDestroy() {\r\n    window.removeEventListener(\"resize\", this.resize);\r\n  },\r\n\r\n  methods: {\r\n    resize() {\r\n      if (this.prevWidth === this.$el.clientWidth) return;\r\n\r\n      this.prevWidth = this.$el.clientWidth;\r\n\r\n      // 対象の要素を、高さにautoを指定し非表示で複製する\r\n      const temporary = this.$el.cloneNode(true),\r\n        style = temporary.style;\r\n      let s = this.original;\r\n\r\n      temporary.textContent = this.original;\r\n\r\n      // style.display = \"none\";\r\n      style.position = \"absolute\";\r\n      style.visibility = \"none\";\r\n      style.overflow = \"visible\";\r\n      style.width = this.$el.clientWidth + \"px\";\r\n      style.height = \"auto\";\r\n\r\n      this.$el.appendChild(temporary);\r\n\r\n      // 指定した高さになるまで、20文字ずつ消去していく(最適化のため)\r\n      while (s.length > 0 && temporary.clientHeight > this.$el.clientHeight) {\r\n        s = s.substr(0, s.length - 20);\r\n        temporary.textContent = s + \"...\";\r\n      }\r\n\r\n      s = this.original.substr(0, s.length + 20);\r\n      temporary.textContent = s + \"...\";\r\n\r\n      // 指定した高さになるまで、1文字ずつ消去していく\r\n      while (s.length > 0 && temporary.clientHeight > this.$el.clientHeight) {\r\n        s = s.substr(0, s.length - 1);\r\n        temporary.textContent = s + \"...\";\r\n      }\r\n      this.$el.removeChild(temporary);\r\n\r\n      // 文章を入れ替えて、複製した要素を削除する\r\n      this.$el.textContent = s + \"...\";\r\n    }\r\n  }\r\n};\r\n</script>\r\n\r\n\r\n<style lang=\"scss\" scoped>\r\np {\r\n  height: 100%;\r\n}\r\n</style>\r\n","p {\n  height: 100%;\n}\n\n/*# sourceMappingURL=TextEllipsis.vue.map */"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-50299bb2";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var component = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

// vue コンポーネントのインポート

// Vue.use() によって実行される install 関数を定義
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('TextEllipsis', component);
}

// Vue.use() のためのモジュール定義を作成
// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// vue が見つかった場合に自動インストールする (ブラウザで <script> タグを用いた場合等)
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

export default component;
export { install };
