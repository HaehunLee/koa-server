# Koa 프레임워크 실습
- node express와 비슷한 커스텀 서버 프레임워크로, express와는 async,await 정식지원 등의 차이가 있다.

- 패키지 정보 생성
    ```js
    $ npm init -y
    $ yarn init -y
    ```

- Koa 프레임워크 설치
    ```js
    $ npm install koa
    $ yarn add koa
    ```

- run server
    ```js
    $ node src
    ```

- nodemon
    - 코드 변경 시, 서버를 자동으로 재시작시켜줌.
    ```
    $ npm install --dev nodemon
    $ yarn add --dev nodemon
    ```
    - package.json ( scripts 수정 )
    ```json
    "scripts": {
        "start": "node src",
        "start:dev" : "nodemon --watch src/ src/index.js"
    },
    ```
    - 서버 재시작
    ```js
    $ npm run start     // 서버 재시작이 필요 없을 때
    $ yarn start

    $ npm run start:dev // 서버 재시작이 필요할 때
    % yarn start:dev 
    ```
    

- koa-router
    - Koa의 라우터 기능 라이브러리
    ```js
    $ npm install koa-router
    $ yarn add koa-router
    ```

- koa-bodyparser
    - POST/PUT/PATCH 메서드의 Request Body에 JSON형식 데이터를
     넣을 때, 파싱하여 서버에서 사용할 수 있게 해주는 미들 웨어
    ```js
    $ npm install koa-bodyparser
    $ yarn add koa-bodyparser
    ```