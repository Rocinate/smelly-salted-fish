import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './server/router'
import serve from 'koa-static'
import path from 'path'
import history from './server/config/history'

const app = new Koa()
app.use(history({
  verbose: true//打出转发日志
}));
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
app.use(serve(path.resolve('../fe/dist')))
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})

module.exports = app