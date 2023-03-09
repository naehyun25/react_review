import React, {Component} from "react";

class Child2 extends Component{
    render(Props){
        return(
            <>
            <ul>
                <li>저는 {this.props.name}입니다.</li>
                <li>저는 {this.props.age}살입니다.</li>
                <li>저는 {this.props.child}입니다.</li>
            </ul>
            </>
        )
    }
}
export default Child2;