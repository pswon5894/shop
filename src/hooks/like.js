import axios from "axios";
import { useEffect, useState } from "react"

export function useLike(){
    let [like, setLike] = useState(0)
      function addLike(){
        setLike(a=>a+1)
      }

      return [like, addLike];
}

//use 붙은 것들은 custom hook이라고 부른다
//useState 이런 코드들은 항상 컴포넌트 함수 안에만 얌전히 적어야합니다.
//실수로 html 안에 넣거나 if문 안에 넣거나 그러면 큰일나기 때문에 그런 상황을 방지하기 위해서


// export function useUsername(){
//     let [username, setUsername] =useState('');
//   useEffect(()=>{
//     axios.get('/username.json').then((r) =>{
//       console.log(r.data)
//       setUsername(r.data)
//     })
//   }, [])
//   return username;
// }

//   서버에서 이름을 가져와서 html에 보여주는 코드를 작성
// 하지만 서버가 없기 때문에 public 폴더에 username.json 파일을 만들고
// 파일엔 "Kim" 이라는 단어하나를 저장
// /username.json으로 GET 요청시 "Kim"을 가져올 수 있음

// 이렇게 함수 만들놓고 원하는 곳에서 useUsername() 을 사용했다고 합니다.
// 유저 이름을 못가져오거나 실패하는 경우엔 뭘 보여줄지 예외상황 처리도 알아서 해봅시다.