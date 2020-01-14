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

const add = async function(ctx, next) {
  const data = ctx.request.body
  const status = await management.add(data)
  ctx.response.body = {
    code: 200,
    message: '',
    data: status
  }
}

const del = async function(ctx, next) {
  const data = ctx.request.body
  const status = await management.del(data)
  ctx.response.body = {
    code: 200,
    message: '',
    data: status
  }
}

export default {
  getList,
  add,
  del
}