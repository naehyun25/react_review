import {Link} from "react-router-dom";

const Footerlink =() => {
    return(
        <>
        <Link to={"/footerIndex"}>Footer</Link>
        <Link to={"/footer1"}>Footer1</Link>
        <Link to={"/footer2"}>Footer2</Link>
        </>

    )

}
export default Footerlink;