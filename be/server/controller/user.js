import user from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const login = async function (ctx, next) {
  const data = ctx.request.body
  const userInfo = await user.getUserByName(data.username)
  if(userInfo !== null) {
    if(!bcrypt.compareSync(data.password,userInfo.password)) {
      ctx.response.body = {
        code: 400,
        message: '密码错误',
        data: {}
      }
    } else {
      const userToken = {
        name: userInfo.username,
        id: userInfo.id
      }
      const secret = 'vue-koa-demo'
      const token = jwt.sign(userToken,secret)
      ctx.response.body = {
        code: 200,
        token: token
      }
    }
  } else {
    ctx.response.body = {
      code: 400,
      message: '用户不存在！'
    }
  }
}

const getInfo = async function(ctx, next) {
  const id = ctx.params.id
  const info = await user.getUserById(id)
  if(info !== null) {
    ctx.response.body = {
      code: 200,
      message: '',
      data: info
    }
  } else {
    ctx.response.body = {
      code: 401,
      message: '查无此人',
      data: {}
    }
  }
}

export default {
  login,
  getInfo
}