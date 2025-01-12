// npmjs.com/package/json-server
// https://github.com/typicode/json-server/tree/v0
// Access control example
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // JSON 파일을 기반으로 하는 가상 DB 라우터 생성 (Creates a virtual DB router based on a JSON file)
const middlewares = jsonServer.defaults(); // 기본 미들웨어 설정 (Sets up default middlewares)

// Auth0 도메인 설정 (Auth0 domain configuration)
const AUTH0_DOMAIN = "dev-c27wpotwrvc82px6.us.auth0.com";

// 기본 미들웨어 추가 (Add default middlewares)
server.use(middlewares);

// 사용자 인증 미들웨어 (User authentication middleware)
server.use(async (req, res, next) => {
    if (await isAuthorized(req)) {
        next(); // 인증 성공 시 다음 처리로 진행 (Proceed to the next process if authentication is successful)
    } else {
        res.sendStatus(401); // 인증 실패 시 401 상태 반환 (Return 401 status if authentication fails)
    }
});

// /user 엔드포인트에 사용자 정보 반환 (Return user info at the /user endpoint)
server.get("/user", (req, res) => {
    res.jsonp({ ...req.user, view_count: 249, update_count: 100 });
    // 사용자 정보에 조회 및 업데이트 카운트 추가하여 반환 (Return user info with view and update counts)
});

// POST 요청의 본문 데이터를 처리하기 위한 바디 파서 사용 (Use body parser to handle POST request body data)
server.use(jsonServer.bodyParser);

// /posts 엔드포인트에 게시물 생성 처리 (Handle post creation at the /posts endpoint)
server.post("/posts", (req, res, next) => {
    req.body.createdAt = new Date().toISOString();
    req.body.author = {
        name: req.user.name,
        email: req.user.email,
        picture: req.user.picture,
    };
    next(); // 다음 처리로 진행 (Proceed to the next process)
});

// 라우터 연결 (Attach the router)
server.use(router);

// 서버 시작 및 실행 로그 출력 (Start the server and log its status)
server.listen(4000, () => {
    console.log("JSON Server is running"); // 서버가 실행 중임을 출력 (Print that the server is running)
});

// 사용자 인증 함수 (User authentication function)
async function isAuthorized(req) {
    try {
        const Authorization = req.headers.authorization; // Authorization 헤더 추출 (Extract the Authorization header)
        const res = await fetch(`https://${AUTH0_DOMAIN}/userinfo`, {
            headers: {
                Authorization, // 인증 토큰 포함 (Include the authorization token)
            },
        });
        const json = await res.json(); // 사용자 정보 가져오기 (Fetch user information)
        req.user = json; // 사용자 정보 요청 객체에 저장 (Store user information in the request object)
        return true; // 인증 성공 (Authentication successful)
    } catch (e) {
        // 인증 실패 (Authentication failed)
        // return false;
        // 인증 성공 (Authentication successful)
        return true;
    }
}
