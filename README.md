# Sample-template

여러 모듈의 호환성 테스트, 작업환경 확인 등을 위한 샘플 템플릿입니다.
수정이 필요한 사항들 피드백 부탁드립니다.

## Official Docs && versions

- node.js - LTS (16.16.0)
- ✅ [React](https://ko.reactjs.org/) (18.2.0)
- ✅ [NextJS](https://nextjs.org/) (12.2.2)
- ✅ [React-Hook-Form](https://react-hook-form.com/) (^7.33.1)
- ✅ [Typescript](https://www.typescriptlang.org/) (4.7.4)
- ✅ [Tailwindcss](https://www.tailwindcss.com) (^3.1.6)
- ✅ [Storybook](https://storybook.js.org/) (^6.5.9)
- ✅ [Axios](https://axios-http.com/kr/docs/api_intro) (^0.27.2)
- ✅ [SWR](https://swr.vercel.app/ko) (^1.3.0)
- ✅ [Jest](https://jestjs.io/)
- ✅ [Import SVG as React Component (SVGR)](https://react-svgr.com/)

## Commands

### 👉 `yarn install`

### 👉 `yarn dev`

Run the project in the dev mode.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 👉 `yarn storybook`

Runs storybook.

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

## 폴더 구조

```
public // 공용 static files
├── image
└── asset

// 어플리케이션 구성 소스 모음
src
├──commons // 공용 소스 모음
│  ├── hooks // custom hook 모음
│  ├── swr_keys // swr에서 사용되는 key 상수화
│      ├── local.ts // 로컬 state key
│      └── server.ts // 서버 url key
│  └── utils // 공용 함수, 상수들 모음
├──component // 컴포넌트들 모음
│  ├── atoms // 공통적으로 사용되는 소규모 컴포넌트들
│  └── layouts // pages 에서 사용되는 레이아웃 모음
└──stories // storybook에서 사용되는 story 모음

pages // Page 컴포넌트, 폴더/파일구조로 라우팅 결정. ❗ 상세내용은 추후결정
├── _app.tsx
├── index.tsx
└── api // api wrapping

styles // 스타일 관련 파일 모음
└── tailwind.css

```

#### Path alias 설정

- "@Components/\*": ["src/components/*"],
- "@Hooks/\*": ["src/commons/hooks/*"],
- "@Utils/\*": ["src/commons/utils/*"],
- "@SWR_Keys/\*": ["src/commons/swr_keys/*"]

## 테스트 환경, vscode extensions 모음

`node.js -v 16.16.0`
`tailwind css IntelliSense `
`Prettier`
`Eslint`

## 추가 참조 사이트 모음

### Tailwind class override

https://www.npmjs.com/package/tailwind-merge https://github.com/richardgill/tailwind-override

## Storybook sample - Fluent UI

https://628d031b55e942004ac95df1-zkusndujfr.chromatic.com/?path=/docs/concepts-introduction--page

https://github.com/microsoft/fluentui

https://chakra-ui.com/docs/styled-system/gradient

### Tailwind template/component sample

- Flowbite
- https://flowbite-react.com/badges
- Tailwindui
- https://tailwindui.com/

### Tailwind classname extrator

https://usewindy.com/?ref=Blog-CTA

### Css to tailwind converter

⭐️ https://transform.tools/css-to-tailwind
https://tailwind-converter.netlify.app/

<!-- ### 👉 `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

> If you get an error that contained this line:

Use this command:

`brew install watchman`

### 👉`yarn build`

Builds the app for production to the `.next` folder.\
It correctly bundles NextJS in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed! -->
