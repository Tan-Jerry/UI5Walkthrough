const Koa = require("koa");
const koaStatic = require("koa-static");
const koaLogger = require("koa-logger");

const app = new Koa();
app.use(koaLogger());
app.use(koaStatic("webapp"));


const port = process.env.PORT || 8000;
app.listen(port);
console.info(`server listen on port: ${port}`);