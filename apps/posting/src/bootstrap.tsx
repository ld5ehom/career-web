import inject from "./injector";

// Call the inject function to initialize the router and render the app
// 라우터를 초기화하고 애플리케이션을 렌더링하기 위해 inject 함수 호출
inject({
    // Set the router type to "browser" for client-side routing
    // 클라이언트 사이드 라우팅을 위한 "browser" 라우터 타입 설정
    routerType: "browser",

    // Specify the root DOM element where the app will be mounted
    // 애플리케이션이 마운트될 루트 DOM 요소 지정
    rootElement: document.getElementById("app-posting")!,
});
