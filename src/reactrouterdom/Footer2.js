import { useSearchParams } from "react-router-dom";

const Footer2 = ()=>{
    let [searchParams, setSearchParams]=useSearchParams();
    let id = searchParams.get("id");
    let mode = searchParams.get("mode");
    console.log("id:",id,"mode:",mode)
    return(
    <div>
        <p>푸터 2입니다.</p>
        <button onClick={
            setSearchParams({
                id:3,
                mode:"dark"
            })
        }>
            footer2의 id:3번 mode:dark로 가기
        </button>

    </div>
    )
};
export default Footer2;