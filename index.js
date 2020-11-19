const Koa = require("koa");
const KoaRouter = require("koa-router");
const render = require("koa-ejs");
const path = require("path");
const static = require("koa-static")

const app = new Koa();
const router = new KoaRouter();

// 配置路由模块
app.use(router.routes()).use(router.allowedMethods());
app.use(static(__dirname+'/public'))

//配置模板文件夹
render(app, {
  root: path.resolve(__dirname, "./views"),
  layout: "layout",
  viewExt: "html",
  debug: false,
  cache: false,
});

router.get("/", index);

// 函数声明
async function index(ctx) {
  await ctx.render("index", {
    title: "Things i love...."
  });
}

const port = process.env.PORT || 5001;
app.listen(port, () => console.log("Server Started...."));
