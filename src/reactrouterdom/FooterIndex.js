import {Routes, Route,} from "react-router-dom";
import Footer1 from "./Footer1"
import Footer2 from "./Footer2"
import Footerlink from "./Footerlink"
const FooterIndex = ()=>{
    return(
    <div>
        <div>
        <h1>푸터영역입니다.</h1>
        <Routes>
        <Route path="/FooterIndex/*" element={<FooterIndex/>}/>
        <Route path="/footer1" element={<Footer1/>}/>
        <Route path="/footer2" element={<Footer2/>}/>
        </Routes>
        <Footerlink/>
        </div>
        

    </div>
    )};
export default FooterIndex;