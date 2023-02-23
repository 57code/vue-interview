import { e as useState } from '../server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
import 'vooks';
import 'seemly';
import './light-f4ea2db0.mjs';
import 'lodash-es';
import 'css-render';
import '@css-render/plugin-bem';

const useCounter = () => useState("count", () => 1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Counter",
  __ssrInlineRender: true,
  setup(__props) {
    const count1 = useCounter();
    const count2 = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NButton = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}> Counter1: ${ssrInterpolate(unref(count1))} Counter2: ${ssrInterpolate(unref(count2))} <div class="mt-2">`);
      _push(ssrRenderComponent(_component_NButton, {
        onClick: ($event) => {
          count1.value++;
          count2.value++;
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+`);
          } else {
            return [
              createTextVNode("+")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NButton, {
        onClick: ($event) => {
          count1.value--;
          count2.value--;
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`-`);
          } else {
            return [
              createTextVNode("-")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Counter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "count",
  __ssrInlineRender: true,
  setup(__props) {
    const counterRef = ref(Math.round(Math.random() * 1e3));
    const counter = useState("counter", () => Math.round(Math.random() * 1e3));
    const count = useCounter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NButton = __nuxt_component_1;
      const _component_Counter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}> Count: ${ssrInterpolate(unref(count))} Counter: ${ssrInterpolate(unref(counter))} CounterRef: ${ssrInterpolate(unref(counterRef))} <div class="mt-2">`);
      _push(ssrRenderComponent(_component_NButton, {
        onClick: ($event) => {
          counter.value++;
          counterRef.value++;
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+`);
          } else {
            return [
              createTextVNode("+")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NButton, {
        onClick: ($event) => {
          counter.value--;
          counterRef.value--;
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`-`);
          } else {
            return [
              createTextVNode("-")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Counter, null, null, _parent));
      _push(ssrRenderComponent(_component_Counter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/count.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=count-f4475ede.mjs.map
