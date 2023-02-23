import { defineEventHandler, createError } from 'h3';

const errorHandle = defineEventHandler((event) => {
  const id = parseInt(event.context.params.id);
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID \u5E94\u8BE5\u662F\u4E00\u4E2A\u6574\u6570"
    });
  }
  return "ok";
});

export { errorHandle as default };
//# sourceMappingURL=error-handle.mjs.map
