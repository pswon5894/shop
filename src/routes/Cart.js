import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase, addCount } from './store';

function Cart() {

    let state = useSelector((state)=>{return state})
    //state에는 store에 있는 전체 state가 나온다, ((state)=>{return state.user}) 이런식으로 선택할수도있다
    //js문법((state)=>{return state})를 ((state)=> state) 축약 가능
    // console.log(state.cart[0].name)
    // // store 에 있던 state를 가져와주는 hook

    let dispatch = useDispatch()

    return (
        <div>
          <h6>
            {state.user.name} {state.user.age}의 바구니
            </h6>
            <button onClick={() =>{
              dispatch(increase(2))
            }}>버튼</button>
          

            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {
          state.cart.map((a, i) => //{return } 생략, js문법
        <tr key={i}>
          <td>{state.cart[i].id}</td>
          <td>{state.cart[i].name}</td>
          <td>{state.cart[i].count}</td>
          <td>
            <button onClick={()=>{
              dispatch(addCount(state.cart[i].id)) //id로 지정하면 나중에 글자순 정렬해도 문제 없다
              //chageName() 실행해달라고 store.js에 부탁
            }}>+</button>
          </td>
        </tr>
          )
        }
        
        {/* <tr>
          <td>2</td>
          <td>{state.cart[1].id}</td>
          <td>{state.cart[1].name}</td>
          <td>{state.cart[1].count}</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
        </div>
    )
}

export default Cart