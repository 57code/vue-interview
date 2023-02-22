export default defineEventHandler((event) => {
  // 参数类型有问题就抛出异常
  const id = parseInt(event.context.params!.id) as number
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID 应该是一个整数',
    })
  }
  return 'ok'
})