const Router = require('koa-router');

// posts 라우터 컨트롤러 모듈
const postCtrl = require('./posts.ctrl');

const posts = new Router();

const printInfo = ctx => {
    ctx.body = {
        method : ctx.method,
        path : ctx.path,
        params : ctx.params,
    };
};

posts.get('/', postCtrl.list);
posts.post('/', postCtrl.write);
posts.get('/:id', postCtrl.read);
posts.delete('/:id', postCtrl.remove);
posts.put('/:id', postCtrl.replace);
posts.patch('/:id', postCtrl.update);
module.exports = posts;