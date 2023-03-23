//오늘은 리듀서 1개만 

const initState = {count:0}
const rootReducer = (state=initState, action)=>{
    switch (action.type){
        case "INCREMENT" :
            return{
                ...state, //혹시 state 값이 추가가 되면 전달받으려고 ... 전개 연산자였나 넣은거
                 count: state.count+1
            };
        case "DECREMENT" :
            return{
                ...state, 
                 count: state.count-1
            };
            default: return state;
    }
};
export default rootReducer;
