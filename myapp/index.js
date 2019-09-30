//引入Koa
const koa = require('koa');
const router = require('koa-router')();
const app = new koa();

/*配置路由*/
router.get('/', function (ctx, next) {
    ctx.body = "你好koa930";
});

router.get('/news', (ctx, next) => {
    ctx.body = "新网 page930"
});

router.get('/newscontent', (ctx, next) => {
    let url = ctx.url;
    /*从request 中获取GET请求*/
    let request = ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;
    /*从上下文中直接获取*/
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;
    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    };
    console.log(ctx.body);

});

/*koa动态路由*/
router.get("/product/:aid", async (ctx) => {
    console.log(ctx.params);
    ctx.body = '这是商品页面';
});


app.use(router.routes()); //启动路由
app.use(router.allowedMethods());


//配置中间件
app.use(async (ctx) => {
    ctx.body = '你好 koa2 666'
});

//监听端口
app.listen(3006);
