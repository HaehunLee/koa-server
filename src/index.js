// Koa 서버 생성
const Koa = require('koa');
// koa-router
const Router = require('koa-router');
// body parser
const bodyParser = require('koa-bodyparser');

// api router 등록
const api = require('./api');

const app = new Koa();
const router = new Router();

// api 라우터 설정
router.use('/api', api.routes());

// 라우터 적용전 bodyParser적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

// 라우터 설정
router.get('/', ctx => {
    ctx.body = '홈';
})

router.get('/about/:name?', ctx => {
    const { name } = ctx.params;
    // name 존재 유무에 따라 다른 결과 출력
    ctx.body = name ? `${name}의 소개` : '소개';
})

router.get('/posts', ctx => {
    const { id } = ctx.query;
    // id의 존재 유무에 따라 다른 결과 출력
    ctx.body = id? `포스트 #${id}` : '포스트 아이디가 없습니다.';
})

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

