import {useParams} from "react-router-dom";
const Footer1 = ()=>{
    let {id} = useParams();
    return(
    <div>
        <p>푸터 1입니다.</p>
        <p>url에 입력된 내용은 "{id}"</p>
    </div>
    )
};
export default Footer1;