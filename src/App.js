import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { createContext, useEffect, useState } from 'react';
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js'
import axios from 'axios'
import Cart from './routes/Cart.js'
import { useQuery } from '@tanstack/react-query';

export let Context1 = createContext();
//Context는 state 보관함임

function App() {

  useEffect(()=> {
    localStorage.setItem('watched', JSON.stringify([]))
  }, [])

  //누가 detail 페이지 접속하면 //Detail.js에 useEffect 만들기
  // 그 페이지에 보이는 상품id 가져와서
  // localStorage에 watched 항목에 추가

  // let obj = {name: 'kim'}
  // localStorage.setItem('data', JSON.stringify(obj))
  // let 꺼낸거 = localStorage.getItem('data')

  // console.log(JSON.parse(꺼낸거));

  let [shoes, setShoes] = useState(data)
  let [재고] = useState([10, 11, 12])
  let navigate = useNavigate();
  //훅 , 유용한것이 들어있는 함수

  let result = useQuery({
    queryKey: ['getName'],
    // refetchOnWindowFocus: false, //창으로 복귀시 ajax 요청 재전송 x
    queryFn: () => 
      axios.get('https://codingapple1.github.io/userdata.json')
      .then(a => a.data)
  })
  //useEffect + axios 안쓰고 이걸 쓰는 이유, result에 실시간으로 ajax 상태가 저장, 상태체크 쉬움

  return (
    <div className="App">
      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {result.isPending && '로딩중'}
            {result.isError && '에러남'}
            {result.isSuccess && result.data.name}

          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg"></div>
          <div className="container">
          <div className="row">
            {
              shoes.map((a, i)=>{
                return (
                  <Card shoes={shoes[i]} i={i+1}></Card>
                )
              })
            }
          </div>
          </div>
          
          <button onClick={()=> {
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((결과) => {
              console.log(결과.data)
              let copy = [...shoes, ...결과.data];
              setShoes(copy);
            })
            .catch(()=> {
              console.log('요청 실패')
            })
          }}>추가 상품</button>
          </>
        } />
        <Route path="/detail/:id" element={
          <Context1.Provider value={{재고, shoes}}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />

        {/* <Route path="*" element = {<div>없는페이지</div>} /> */}

        <Route path="/about" element={<About/> } >
          <Route path="member" element={<div>멤버임</div> } />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>

        <Route path="/cart" element={ <Cart/> }/>

      </Routes>

        
      {/* nested routes, 여러 유사한 페이지 필요할 때 사용 */}

      <Routes>
        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}/>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}/>
        </Route>
      </Routes>

    </div>
  );
}

function Event(){
  return(
    <div>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </div>
  )
}

function About(){
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props){
  return(
    <div className="col-md-4">
          <img src={'https://codingapple1.github.io/shop/shoes' + props.i +'.jpg'} width="80%"/>
          <h4>{ props.shoes.title }</h4>
          <p>{ props.shoes.price }</p>
        </div>
  )
}

export default App;