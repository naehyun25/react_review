const Child1 =(props) => {
    /*
    let name = props.name;
    let age = props.age;
    let child = props.child;
    */
    let {name, age, child} = props;

    return(
        <div>
            <ul>
                <li>저는 {name}입니다.</li>
                <li>저는 {age}살입니다.</li>
                <li>저는 {child}입니다.</li>
            </ul>
        </div>
    )
}

export default Child1;