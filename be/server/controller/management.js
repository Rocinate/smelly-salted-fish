import management from '../models/management'

const getList = async function(ctx, next) {
  const data = ctx.request.body
  const pageList = await management.getList(data)
  ctx.response.body = {
    code: 200,
    message: '',
    data: pageList
  }
}

export default {
  getList
}