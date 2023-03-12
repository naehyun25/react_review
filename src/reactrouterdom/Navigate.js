import { useNavigate } from "react-router-dom";

export default function Navigate(){
    let navigate=useNavigate()
    return(
        <>
        <button onClick={()=>{
            navigate('/')
        }}>
            홈으로 가기
        </button>
        <button onClick={()=>{
            navigate('-1')
        }}>뒤로가기</button>
        <button onClick={()=>{
            navigate ('/footer2')
        }}>푸터2</button>
        </>

    )
}