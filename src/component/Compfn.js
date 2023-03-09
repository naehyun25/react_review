import "./Comp.css"
const CompFn = () => {
    const str = "변수입니다."
    return (
        <>
         <h2 className="yaong">자식 함수형 컴포넌트</h2>
         <h2>{str}</h2>
        </>
    )
}
const CompFn2 = () => {
    return(
        <>
         <p>둘째 CompFn2 입니다.</p>
        </>
    )
}
const Talk =() => {
    return(
        <>
        <h1>익명함수일때</h1>
        </>
    )
}
const C =function(){
    return(<p>안녕하세요</p>)
  }
export {CompFn,CompFn2,Talk,C} ;