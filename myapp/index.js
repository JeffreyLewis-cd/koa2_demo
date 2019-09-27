//引入Koa
const koa = require('koa');
const app = new koa();

//配置中间件
app.use(async (ctx) => {
    ctx.body = 'hello koa2 666'
});

//监听端口
app.listen(3006);
