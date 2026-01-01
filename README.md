# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

외부파일에서 export로 참조 
라우터, nested 라우터

styled-component로 css가 아닌 js에서 스타일 꾸미는 방법
// style-components 장점 페이지 로딩시간 단축

리액트 라이프 사이클에 hook을 걸어서 mount, update, unmount 에서 작동 시킬수 있다
//훅 , 유용한것이 들어있는 함수

useEffect(() => {
    setTimeout(()=> {setAlert(false)}, 2000)
  }, [])

  // }, [])
  //컴포넌트 mount시 1회만 실행, 없으면 mount, update시 실행됨


  // useEffect(()=>{
  //   return () =>{

  //   }
  // }, [])

  // unmount시 1회 코드 실행


  // useEffect안에 있는 코드는 html 렌더링 후에 동작, 느린작업어 넣어둔다면 어떨까?, 서버에서 데이터 가저오는 작업, 타이머 장착

  ajax = 서버에 새로고침 없이 get요청
  ajax 이용한 get 요청은 axios.get('url)

transition 이해 안됨

props는 부모-> 자식으로 객체, 배열, 함수 등 모든 JavaScript 값을 보낼 수 있고, 자식 컴포넌트에서는 전달받은 객체(예: props.propName) 형태로 데이터를 사용합니다. 이는 단방향 데이터 흐름
context api(리액트 기본문법)와 redux 등 외부라이브러리 는 더 멀리도 전송 가능

context API 특징 state변경시 쓸데없는 것 까지 재렌더링 -> 성능 이슈
나중에 컴포넌트 재사용이 어려움

Redux 라이브러리를 사용하면 컴포넌트들이 props 없이 state 공유가능
redux js파일을 만들어서 state를 보관해서 꺼내 사용

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
