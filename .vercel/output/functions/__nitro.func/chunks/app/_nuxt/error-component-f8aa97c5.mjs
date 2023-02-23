import { u as useRouter, c as clearError } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, inject, computed, h } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { c as cB, a as cE, b as c, u as useTheme, f as useConfig, o as configProviderInjectionKey, h as createKey, j as useThemeClass, m as commonLight } from './light-f4ea2db0.mjs';
import { u as useLocale, N as NBaseIcon } from './Icon-bf15a431.mjs';
import { _ as __nuxt_component_1 } from './Button-95b07872.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'ufo';
import 'defu';
import '../../nitro/vercel.mjs';
import 'node-fetch-native/polyfill';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'lodash-es';
import 'css-render';
import '@css-render/plugin-bem';
import 'vooks';
import 'seemly';

const EmptyIcon = /* @__PURE__ */ defineComponent({
  name: "Empty",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      h("path", { d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z", fill: "currentColor" }),
      h("path", { d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z", fill: "currentColor" })
    );
  }
});
const commonVars = {
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
const self = (vars) => {
  const { textColorDisabled, iconColor, textColor2, fontSizeSmall, fontSizeMedium, fontSizeLarge, fontSizeHuge } = vars;
  return Object.assign(Object.assign({}, commonVars), {
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeHuge,
    textColor: textColorDisabled,
    iconColor,
    extraTextColor: textColor2
  });
};
const emptyLight = {
  name: "Empty",
  common: commonLight,
  self
};
const emptyLight$1 = emptyLight;
const style = cB("empty", `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [cE("icon", `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [c("+", [cE("description", `
 margin-top: 8px;
 `)])]), cE("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), cE("extra", `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);
const emptyProps = Object.assign(Object.assign({}, useTheme.props), { description: String, showDescription: {
  type: Boolean,
  default: true
}, showIcon: {
  type: Boolean,
  default: true
}, size: {
  type: String,
  default: "medium"
}, renderIcon: Function });
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "Empty",
  props: emptyProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Empty", "-empty", style, emptyLight$1, props, mergedClsPrefixRef);
    const { localeRef } = useLocale("Empty");
    const NConfigProvider = inject(configProviderInjectionKey, null);
    const mergedDescriptionRef = computed(() => {
      var _a, _b, _c;
      return (_a = props.description) !== null && _a !== void 0 ? _a : (_c = (_b = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedComponentPropsRef.value) === null || _b === void 0 ? void 0 : _b.Empty) === null || _c === void 0 ? void 0 : _c.description;
    });
    const mergedRenderIconRef = computed(() => {
      var _a, _b;
      return ((_b = (_a = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Empty) === null || _b === void 0 ? void 0 : _b.renderIcon) || (() => h(EmptyIcon, null));
    });
    const cssVarsRef = computed(() => {
      const { size } = props;
      const { common: { cubicBezierEaseInOut }, self: { [createKey("iconSize", size)]: iconSize, [createKey("fontSize", size)]: fontSize, textColor, iconColor, extraTextColor } } = themeRef.value;
      return {
        "--n-icon-size": iconSize,
        "--n-font-size": fontSize,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-text-color": textColor,
        "--n-icon-color": iconColor,
        "--n-extra-text-color": extraTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("empty", computed(() => {
      let hash = "";
      const { size } = props;
      hash += size[0];
      return hash;
    }), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedRenderIcon: mergedRenderIconRef,
      localizedDescription: computed(() => {
        return mergedDescriptionRef.value || localeRef.value.description;
      }),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const { $slots, mergedClsPrefix, onRender } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(
      "div",
      { class: [`${mergedClsPrefix}-empty`, this.themeClass], style: this.cssVars },
      this.showIcon ? h("div", { class: `${mergedClsPrefix}-empty__icon` }, $slots.icon ? $slots.icon() : h(NBaseIcon, { clsPrefix: mergedClsPrefix }, { default: this.mergedRenderIcon })) : null,
      this.showDescription ? h("div", { class: `${mergedClsPrefix}-empty__description` }, $slots.default ? $slots.default() : this.localizedDescription) : null,
      $slots.extra ? h("div", { class: `${mergedClsPrefix}-empty__extra` }, $slots.extra()) : null
    );
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    console.log(props.error);
    useRouter();
    const retry = () => window.location.href = props.error.url;
    const handleError = () => clearError({ redirect: "/" });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NEmpty = __nuxt_component_0;
      const _component_n_button = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-10" }, _attrs))}><h1 class="text-2xl text-center mb-2"> \u51FA\u4E86\u70B9\u9519 - ${ssrInterpolate((_a = props.error) == null ? void 0 : _a.statusCode)}</h1>`);
      _push(ssrRenderComponent(_component_NEmpty, { description: "\u4F60\u4EC0\u4E48\u4E5F\u627E\u4E0D\u5230" }, {
        extra: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_button, { onClick: retry }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u91CD\u8BD5`);
                } else {
                  return [
                    createTextVNode("\u91CD\u8BD5")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_n_button, { onClick: handleError }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u56DE\u5230\u9996\u9875`);
                } else {
                  return [
                    createTextVNode("\u56DE\u5230\u9996\u9875")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_n_button, { onClick: retry }, {
                default: withCtx(() => [
                  createTextVNode("\u91CD\u8BD5")
                ]),
                _: 1
              }),
              createVNode(_component_n_button, { onClick: handleError }, {
                default: withCtx(() => [
                  createTextVNode("\u56DE\u5230\u9996\u9875")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=error-component-f8aa97c5.mjs.map
