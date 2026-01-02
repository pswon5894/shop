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

redux의 state 변경하는 법
-state 수정해주는 함수 만들고 원할 때 그함수 실행을 store.js에 요청
1. state 변경해주는 함수
2. export
3. dispatch(state변경함수())

//디스트럭처링 문법, 오른쪽 자료를 변수로 뺴는 문법
//디스트럭처링(Destructuring) 문법은 배열이나 객체의 구조를 '파괴'하여 그 안의 값들을 개별 변수에 쉽게 할당하는 ES6 기능으로, 코드 가독성을 높이고 반복적인 할당을 줄여줍니다. 주요 형태는 배열 디스트럭처링 (대괄호 [] 사용)과 객체 디스트럭처링 (중괄호 {} 사용)이 있으며, 나머지 요소는 ...rest 구문으로 받을 수 있고, 기본값 설정 및 속성 이름 변경(객체)도 가능합니다.

리액트 자주쓰는 if문 작성패턴 5가지

1.컴포넌트 안에서 쓰는 if/else

function Component() {
  if ( true ) {
    return <p>참이면 보여줄 HTML</p>;
  } else {
    return null;
  }
}
컴포넌트에서 JSX를 조건부로 보여주고 싶을때.

자바스크립트 if문은 return () 안의 JSX 내에서는 사용 불가능
<div> if (어쩌구) {저쩌구} </div> // 불가능

보통 return + JSX 전체를 출력하는 if문을 작성

else 생략이 가능 (아래)

function Component() {
  if ( true ) {
    return <p>참이면 보여줄 HTML</p>;
  } 
  return null;
} 

왜냐면 자바스크립트 function 안에선 return 이라는 키워드를 만나면 return 밑에 있는 코드는 더이상 실행되지 않음

2. JSX안에서 쓰는 삼항연산자
조건문 ? 조건문 참일때 실행할 코드 : 거짓일 때 실행할 코드

3. && 연산자로 if 역할 대신하기

true && '안녕';
false && '안녕';
true && false && '안녕';

맨 윗 코드는 '안녕'이 남고
중간 코드는 false가 남고
맨 아래 코드는 false가 남음


 && 연산자로 축약

function Component() {
  return (
    <div>
      {
        1 === 1
        ? <p>참이면 보여줄 HTML</p>
        : null
      }
    </div>
  )
} 

function Component() {
  return (
    <div>
      { 1 === 1 && <p>참이면 보여줄 HTML</p> }
    </div>
  )
}

4. switch / case 조건문

이것도 기본 문법인데 if문이 중첩해서 여러개 달려있는 경우에 가끔 씁니다.

 

 

function Component2(){
  var user = 'seller';
  if (user === 'seller'){
    return <h4>판매자 로그인</h4>
  } else if (user === 'customer'){
    return <h4>구매자 로그인</h4>
  } else {
    return <h4>그냥 로그인</h4>
  }
}
▲ if문을 저렇게 연달아 여러개 써야되는 상황들이 있으면 

자바스크립트 switch 문법을 이용하면 괄호를 조금 더 줄일 수 있습니다. 


function Component2(){
  var user = 'seller';
  switch (user){
    case 'seller' :
      return <h4>판매자 로그인</h4>
    case 'customer' :
      return <h4>구매자 로그인</h4>
    default : 
      return <h4>그냥 로그인</h4>
  }
}
▲ switch 문법 어떻게 쓰냐면 
 
1. switch (검사할변수){} 이거부터 작성하고
2. 그 안에 case 검사할변수가이거랑일치하냐 : 를 넣어줍니다.
3. 그래서 이게 일치하면 case : 밑에 있는 코드를 실행해줍니다.
4. default : 는 그냥 맨 마지막에 쓰는 else문과 동일합니다.

장점은 if문 연달아쓸 때 코드가 약간 줄어들 수 있는데
조건식란에서 변수하나만 검사할 수 있다는게 단점입니다. 


5. object/array 자료형 응용 

if문으로 분기하지 않고 배열로 자료 만들고 상태 변화에따라서 배열에서 뽑아써서 if문을 간단히 표현하는 방법


경우에 따라서 다른 html 태그들을 보여주고 싶은 경우"
if문 여러개 혹은 삼항연산자 여러개를 작성해야겠죠? 근데 이렇게 작성할 수도 있습니다.

 


예를 들면 쇼핑몰에서 상품설명부분을 탭으로 만든다고 합시다.
탭이 뭐냐면 그냥 경우에 따라서 상품정보 / 배송정보 / 환불약관 내용을 보여주고 싶은겁니다.

 

현재 state가 info면 <p>상품정보</p>
현재 state가 shipping이면 <p>배송정보</p>
현재 state가 refund면 <p>환불약관</p>
이런걸 보여주자는겁니다.

 

일단 state를 만들어놓고 if문으로 state를 검사하는 문법을 써야할 것 같지만
이번엔 if문이 아니라 자바스크립트 object 자료형에 내가 보여주고 싶은 HTML을 다 담습니다.

 

function Component() {
  var 현재상태 = 'info';
  return (
    <div>
      {
        { 
           info : <p>상품정보</p>,
           shipping : <p>배송관련</p>,
           refund : <p>환불약관</p>
        }[현재상태]
      }

    </div>
  )
} 
▲ 원래 JSX 상에서 html 태그들은 저렇게 object에 담든, array에 담든 아무 상관없습니다.

암튼 이렇게 object 자료형으로 HTML을 다 정리해서 담은 다음

마지막에 object{} 뒤에 [] 대괄호를 붙여서 "key값이 현재상태인 자료를 뽑겠습니다" 라고 써놓는겁니다.

 

그럼 이제 현재상태라는 변수의 값에 따라서 원하는 HTML을 보여줄 수 있습니다.
만약에 var 현재상태가 'info'면 info 항목에 저장된 <p>태그가 보여질 것이고
만약에 var 현재상태가 'refund'면 refund 항목에 저장된 <p>태그가 보여지겠죠? 

아주 간단하고 직관적인 if문이 완성되었습니다.
이제 if/else 몰라도 조건부로 html 보여주기 가능 
(예제에선 귀찮아서 state가 아니라 var 변수를 만들었습니다)

 

혹은 변수에 저장해서 써도 깔끔해질 것 같긴 합니다 

 

var 탭UI = { 
  info : <p>상품정보</p>,
  shipping : <p>배송관련</p>,
  refund : <p>환불약관</p>
}

function Component() {
  var 현재상태 = 'info';
  return (
    <div>
      {
        탭UI[현재상태]
      }
    </div>
  )
} 

localStorage는 key: value 형태로 저장, 삭제 전까지 안날라감
session storage 휘발성 저장, 껏다 키면 날라감

localStorage.setItem('age', '20')
localStorage.getItem('age')

로컬스토리지는 문자만 저장하는 하지만 array/object를 json 파일로 저장하면 됨
json을 다시 array/object로 변경하면됨

Tanstack Query
장점1. ajax 요청 성공/실패/로딩중 상태를 쉽게 파악할 수 있습니다
장점2. 틈만나면 알아서 ajax 재요청해줍니다.
장점3. ajax로 가져온 결과는 state 공유 필요없음, 캐싱을 알아서 해줌, 다른 컴포넌트에서도 사용가능, props 불필요, 중복 알아서 감지해서 중복요청제거

크롬 확장 프로그램 redux devtools

meme props가 변할떄만 재렌더링 해줌
많이 쓰면 안좋음, 기존props와 신규 props를 비교할 것임

브라우저는 싱글 스레드

progressive web app -모바일 앱처럼 설치할 수 있는 웹사이트
앱처럼 오프라인에서도 동작가능(service worker + cache storage 덕분)
푸시알림 구현가능
ios, android 앱으로 발행 가능 pwa builder

//use 붙은 것들은 custom hook이라고 부른다
//useState 이런 코드들은 항상 컴포넌트 함수 안에만 얌전히 적어야합니다.
//실수로 html 안에 넣거나 if문 안에 넣거나 그러면 큰일나기 때문에 그런 상황을 방지하기 위해서

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
