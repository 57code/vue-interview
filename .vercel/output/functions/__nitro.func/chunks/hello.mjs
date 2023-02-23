import { defineEventHandler } from 'h3';

const hello = defineEventHandler((event) => {
  return {
    message: "hello, nuxt3!"
  };
});

export { hello as default };
//# sourceMappingURL=hello.mjs.map
