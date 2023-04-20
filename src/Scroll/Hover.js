import React,{useRef} from "react";
import "./Hover.css"
const Hover = ()=>{
        const bg = useRef(null);
        const thumb = useRef(null);
        const img = useRef(null);
    function scroll(){
        const bgH=bg.current.clientHeight;
        const imgH=img.current.clientHeight;
        const scrollVal = bgH - imgH;
        thumb.current.style.top  = scrollVal +'px';

    }

    return(
        <div className="wrap">
            <div className="bg" ref={bg}
            onMouseOver={()=>{scroll()}}
            onMouseLeave={()=>{thumb.current.style.top = 0;}}
            >
                <a href="#" className="thumb" ref={thumb}>
                    <span ref={img}></span>
                </a>
            </div>

        </div>
    )
};

export default Hover;