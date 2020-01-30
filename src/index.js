// Koa 서버 생성
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(ctx.url);
    console.log(1);
    if(ctx.query.authorized !== '1') {
        ctx.status = 401; // Unauthorized
        return ;
    }
    await next();
    console.log('END');
    // async/await 안쓰고
    // next().then(() => {
    //     console.log('END');
    // })
});

app.use((ctx, next) => {
    console.log(2);
    next();
});

// 접속시 hello world 텍스트 반환
app.use((ctx, next) => {
    ctx.body = 'hello world';
});

// 서버 포트 4000번
app.listen(4000, () => {
    console.log('Listening to port 4000');
});

