const Router = require('koa-router');
const posts = require('./posts');

const api = new Router();

// posts 라우트 연결
api.use('/posts', posts.routes());

api.get('/test', ctx => {
    ctx.body = 'test 성공';
});

// 라우터 내보내기
module.exports = api;