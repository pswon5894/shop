import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { createContext, useState } from 'react';
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js'
import axios from 'axios'

export let Context1 = createContext();
//Context는 state 보관함임

function App() {

  let [shoes, setShoes] = useState(data)
  let [재고] = useState([10, 11, 12])

  let navigate = useNavigate();
  //훅 , 유용한것이 들어있는 함수

  return (
    <div className="App">
      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
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