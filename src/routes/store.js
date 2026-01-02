import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age : 20},
    reducers : {
      changeName(state){
        // return {name : 'park', age : 20}
        //원래는 위 방법이지만 아래방법으로 간략히 사용
        state.name = 'park'
      },

      increase(state, action){
        state.age += action.payload //페이로드, 화물이라는 뜻, 개발에서 페이로드(Payload)란 전송하고자 하는 핵심 데이터 자체
      },
    }
})
//state 변경함수에 파라미터 뚫는 법

// increase(10) //10개씩 증가
// increase(100)

//state 변경함수를 action 이라고 한다


export let {changeName, increase} = user.actions

//디스트럭처링 문법, 오른쪽 자료를 변수로 뺴는 문법
//디스트럭처링(Destructuring) 문법은 배열이나 객체의 구조를 '파괴'하여 그 안의 값들을 개별 변수에 쉽게 할당하는 ES6 기능으로, 코드 가독성을 높이고 반복적인 할당을 줄여줍니다. 주요 형태는 배열 디스트럭처링 (대괄호 [] 사용)과 객체 디스트럭처링 (중괄호 {} 사용)이 있으며, 나머지 요소는 ...rest 구문으로 받을 수 있고, 기본값 설정 및 속성 이름 변경(객체)도 가능합니다. 

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    addCount(state, action){
      // state.count += 1
      // state[0].count += 1
      // state[action.payload].count++
      let 번호 = state.findIndex((a) => {return a.id == action.payload })
      state[번호].count++
    },
    addItem(state, action){
      state.push(action.payload)
    }
  }
})

export let {addCount, addItem} = cart.actions

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
   }
}) 