import React, {useState, useEffect} from "react";
import axios from "axios";

const DataPage = ()=>{
    const [datas, setDatas]=useState([0]);
    //데이터가 products 하위[배열] -> 안의 {객체}라 배열을 넣어줌

    useEffect(()=>{ //콜백지옥을 막기 위해 사용
    const url = "https://dc7726eb-ed09-44d9-9ce5-697822933d54.mock.pstmn.io/products";
    axios
    .get(url)
    .then((result)=>{
        const datas = result.data.products;//객체를 반환
        setDatas(datas);//데이터가 then 에서 반환한 객체 안에 배열(안의 객체 )형태이다.
    })
    .catch((error) => {
        console.log(error);
    })
},[]);//서버통신은 처음 렌더링될때만 하면 된다.

    return(
    <div className = "product-list">
        {/* datas는 배열안의 객체 형태라 map 함수를 이용한다. */}
        {datas.map((data,idx) => {
            return(
                // key는 react 에서 식별할 수 있는 값으로 고유값(html의 id)
                <div className="product-card" key={idx}> 
                <img src = {data.imageUrl} alt = {data.imgalt}/>
                <span className="product-name">{data.name}</span>
                </div>
                
            )
        })}
    </div>
    )
}; 

export default DataPage;