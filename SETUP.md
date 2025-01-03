# Setup

```
mkdir career-web
```

```
pnpm init
```

```
corepack use pnpm@8.10.0
```

---

## VSC 프로젝트 폴더로 이동 후 pnpm-workspace.yaml파일 생성

```
pnpm-workspace.yaml
```

-   pnpm-workspace.yaml에 해당 내용 입력

```
packages:
  - "apps/*"
  - "packages/*"
```

---

## careet-web/apps : Shell Project 생성

```
mkdir apps
```

```
cd apps
```

```
pnpm create mf-app
```

```
Pick the name of your app: shell
Project Type: Application
Port number: 3000
Framework: react
Language: typescript
CSS: CSS
```

-   루트로 이동

```
cd ..
```

---

## 프로젝트 의존성 설치

```
pnpm i
```

-   career-web/apps/shell/src/package.json 에서 react 버전 확인

```
    "devDependencies":
        "@types/react": "^18.2.0",
        "@types/react-dom": "^18.2.0",
```

```
pnpm i
```

---

## WorkSpace 이름 수정

-   career-web/package.json 이름 수정

```
"name": "@career-web/monorepo",
```

-   career-web/apps/shell/src/package.json 에서도 이름 수정

```
"name": "@career-web/shell",
```

-   pnpm 다시 install

```
pnpm i
```

---

## Turborepo setup

```
pnpm -w add turbo -D
```

-   설치 후 career-web/turbo.json 생성, 이후 실행

```
pnpm dev
```

---

## port 삭제 명령어

```
kill-port 3000
```

## ui-kit packages 생성

```
mkdir packages
```

```
cd packages
```

```
pnpm create vite ui-kit --template react-swc-ts
```

```
cd ..
```

-   설치 완료 후 의존성 설치

```
pnpm i
```

```
pnpm --filter @career-web/ui-kit add vite-plugin-dts -D
```

```
pnpm --filter @career-web/ui-kit build
```

```
pnpm --filter @career-web/shell start:live
```

-   컴포넌트 구현을 위한 react-icons 셋업

```
pnpm --filter @career-web/ui-kit add react-icons
```

# Setup for React Icons to Implement Components

```
pnpm --filter @career-web/ui-kit add react-icons
```

# Shell router package 설정

```
cd packages
```

```
pnpm create vite shell-router --template react-swc-ts
```

```
cd ..
```

```
pnpm i
```

-   shell-router package.json 셋업 이후

```
pnpm --filter @career-web/shell-router add vite-plugin-dts -D
```

-   shell-router vite.config.ts 셋업
