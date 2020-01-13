  import user from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const login = async function (ctx, next) {
  const data = ctx.request.body
  const userInfo = await user.getUserByName(data.user_name)
  if(userInfo !== null) {
    if(!bcrypt.compareSync(data.password,userInfo.dataValues.password)) {
      ctx.response.body = {
        success: false,
        info: '密码错误'
      }
    } else {
      const userToken = {
        name: userInfo.user_name,
        id: userInfo.id
      }
      const secret = 'vue-koa-demo'
      const token = jwt.sign(userToken,secret)
      ctx.response.body = {
        success: true,
        token: token
      }
    }
  } else {
    ctx.response.body = {
      success: false,
      info: '用户不存在！'
    }
  }
}

export default {
  login
}