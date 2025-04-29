import "../styles/Child.css";

import React, {useState} from "react";

const Selection = ({applyColor}) => {
    const [style, setStyle] = useState({})

    function handleClick(){
        applyColor(setStyle)
    }

  return <div className="fix-box" style={style} onClick={handleClick}></div>;
};
export default Selection;