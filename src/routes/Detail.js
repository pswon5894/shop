import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav';

import {Context1} from './../App.js'
import { addItem } from "./store.js";
import { useDispatch } from "react-redux";
import { useLike } from "../hooks/like.js";
import axios from "axios";

let YellowBtn = styled.button`
  background : ${props => props.bg};
  color : ${props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 10px;
`

let Box = styled.div`
  background : grey;
  padding : 20px;
`

// style-components 장점 페이지 로딩시간 단축

function Detail(props){

  let {재고} = useContext(Context1)
  //보관함 해체함수

  let [count, setCount] = useState(0)
  let {id} = useParams();
  // id = parseInt(id)
  let 찾은상품 = props.shoes.find(x => x.id == id);
  let [alert, setAlert] = useState(true)
  let [탭, 탭변경] = useState(0)
  let dispatch = useDispatch()


//   서버에서 이름을 가져와서 html에 보여주는 코드를 작성
// 하지만 서버가 없기 때문에 public 폴더에 username.json 파일을 만들고
// 파일엔 "Kim" 이라는 단어하나를 저장
// /username.json으로 GET 요청시 "Kim"을 가져올 수 있음

  // let [username, setUsername] =useState('');

  // useEffect(()=>{
  //   axios.get('/username.json').then((r) =>{
  //     console.log(r.data)
  //     setUsername(r.data)
  //   })
  // }, [])

  
  useEffect(()=>{
    
    // console.log(찾은상품.id);
    let 꺼낸거 = localStorage.getItem('watched')
    꺼낸거 = JSON.parse(꺼낸거)
    꺼낸거.push(찾은상품.id) //array에 자료추가
    
    꺼낸거 = new Set(꺼낸거) //array에서 중복제거, set 자료형
    꺼낸거 = Array.from(꺼낸거)
    localStorage.setItem('watched', JSON.stringify(꺼낸거))
  // 그 페이지에 보이는 상품id 가져와서
  // localStorage에 watched 항목에 추가
  }, [])

  // let [num, setNum] = useState(' ')
  // useState( () => {
  //   if(isNaN(num) == true){
  //     alert('숫자만 입력 바람')
  //   }
  // } ,[num])

  // return(
  //   <input onChange={(e) => {setNum(e.target.value)}}/>
  // )

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

  

  return(
    <div className="container">
      {
        alert == true
        ? <div className="alert alert-warning">
        2초 이내 구매시 할인
      </div>
      : null
      }
      <Box>
        <YellowBtn bg="blue">버튼</YellowBtn>
        <YellowBtn bg="yellow">버튼</YellowBtn>
      </Box>

      {count}
      <button onClick={() => { setCount(count+1) }}>버튼</button>
  
  <div className="row">
    <div className="col-md-6">
      <img src={'https://codingapple1.github.io/shop/shoes'+(찾은상품.id+1) +'.jpg'} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{찾은상품.title}</h4>
      <p>{찾은상품.content}</p>
      <p>{찾은상품.price}원</p>
      <button className="btn btn-danger" onClick={() => {
        dispatch(addItem( {id : 1, name : 'Red Knit', count : 1})) //상세페이지에 따라 바뀌개 구현, 추가된 상품은 숫자만 늘어나게 구현 필요
      }}>주문하기</button> 
    </div>

    <Nav variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link eventKey="link0" onClick={()=> 탭변경(0)}>버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link1" onClick={()=> 탭변경(1)}>버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link2" onClick={()=> 탭변경(2)}>버튼2</Nav.Link>
      </Nav.Item>
    </Nav>
    <TabContent shoes={props.shoes} 탭={탭}/>

      {/* {탭 == 0 ? <div>내용0</div> : null}
      {탭 == 1 ? <div>내용1</div> : null}
      {탭 == 2 ? <div>내용2</div> : null} */}
  
  </div>

</div>
  )
}
function TabContent({탭}){

  let [fade, setFade] = useState(' ')
  let {재고} = useContext(Context1)

  useEffect(() => {
    setTimeout(() => {setFade('end')}, 10)

    return () => {
      setFade(' ')
    }
  }, [탭])
  //리액트 18 의 automatic batching 기능으로 근접한 state변경함수를 변경마다가 아닌 변경이 다되고 나서 마지막에 재렌더링 하기 때문에 시간딜레이로 따로 돌리는 것임

  // let [like, setLike] =useState(0)
  // function addLike(){
  //   setLike(a=>a+1)
  // }
  let [like, addLike] = useLike()
      
  return (
    <div className={`start ` + fade }>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}

      {/* {like} <span onClick={()=>{setLike(like + 1)}}>♥</span> */}
      {/* {like} <span onClick={()=>{setLike((a)=>{return a + 1}) }}>♥</span> */}
      {/* {like} <span onClick={()=>{setLike((a)=> a + 1) }}>♥</span> */}
      {like} <span onClick={()=>{addLike() }}>♥</span>

    </div>
  )
}

export default Detail;