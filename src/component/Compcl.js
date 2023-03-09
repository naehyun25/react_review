import React , {Component} from "react";
import "./Comp.css";

class CompCl extends Component{
    render(){
        const text = "야옹";
        return(
            <>
            <h2>자식 클래스형 컴포넌트</h2>
            <h2 className="yaong">{text}</h2>
            <hr/>
            </>
        )
    }
}
export default CompCl;
