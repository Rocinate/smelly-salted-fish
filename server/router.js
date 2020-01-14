import KoaRouter from 'koa-router'
import jwt from 'koa-jwt'
import UserController from './controller/user'
import management from './controller/management'

const router = KoaRouter()
export default function(app) {
  router.post('/user/info',UserController.getInfo)
  router.post('/user/login',UserController.login)
  router.post('/management/list',jwt({secret: 'vue-koa-demo'}),management.getList)
  app.use(router.routes())
     .use(router.allowedMethods())
}