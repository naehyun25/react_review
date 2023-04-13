import React from "react";
import { connect } from "react-redux";
import {incrementCounter, decrementCounter} from "./reduxActions";

function App({count, incrementCounter, decrementCounter}) {
return(
  <div>
    <h1>카운터:{count}</h1>{/* {count}는 리듀서에 있고, 스토어에 리듀서연결-> /index-> store/ -> /index->App/ */}
    <button onClick={incrementCounter}>+</button>
    <button onClick={decrementCounter}>-</button>
  </div>
  )
}
//상태를 속성과 연결, react-redux 에 문법있음
function mapStateToprops(state){
  return{
    count: state.count
  }
}


export default connect(mapStateToprops,{incrementCounter, decrementCounter})(App);
// connect= 제공 method
//dicpatch 는 connect 안에 들어가있다.(js에서는 따로 써줘야했지만 connect 에 있어서 같이 됨. )
 
//export default App;


