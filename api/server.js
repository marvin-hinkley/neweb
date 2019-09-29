const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const app = new Koa();

//Routes
const routes = ;

//Reference vars
const PORT = 3000;

//logging and error handling
app.use(logger());
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.status = e.status || 500;
    ctx. body = e.message;
    ctx.app.emit('error', e, ctx);
  }
});

//Routes
const router = new Router();
require('./routes/routes')({router})
app.use(router.routes());
app.use(router.allowedMethods());

//Server
const server = app.listen(PORT);

//Export for testing
module.exports = server;
