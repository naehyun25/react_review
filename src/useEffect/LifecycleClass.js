import React, {Component} from "react";

class Life extends Component {
    constructor(props){
        super(props);
        // 매게변수 props 에게 최상위 권한을 준다 = super
        this.state = {time:0};
        console.log("constructor실행");
    }
    updateTime = ()=>{
        this.setState({
            time : this.state.time +1
        });
    };
    componentDidMount(){
        console.log("componentDidMount입니다");
    };
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    

    render(){
        return(
        <>
        <h1>{this.state.time}</h1>
        <button onClick={this.updateTime} >1더함</button>
        </>
        )
    }

}
export default Life;
//constructor 먼저 실행되고 render 함수 실행
//constructor->render->componentDidMount
//업데이트시 , state가 업데이트 될때마다 render 함수가 실행된다.
//constructor->render->componentDidMount->render ->componentDidupdate
//한번만 불러오는건 didmount 에 넣어야하고,(첫 render 시점에 한번만 실행)
//render, didupdate 는 값이 바뀔때마다 호출되니까 ->잘못넣으면 콜백지옥