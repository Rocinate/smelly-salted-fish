import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './server/router'
import serve from 'koa-static'
import path from 'path'

const app = new Koa()
app.use(bodyParser())
app.use(async function(ctx, next) {
  try{
    await next()
  } catch(err) {
    if(err.status === 401) {
      ctx.status = 200
      ctx.body = {
        code: 401,
        message: '没有权限'
      }
    } else {
      throw err
    }
  }
})
router(app)
app.use(serve(path.resolve('dist')))
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})

module.exports = app