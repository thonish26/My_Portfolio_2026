import {useRef} from "react";

import "./MagneticButton.css";


function MagneticButton({children}){


const btnRef = useRef();



const moveButton=(e)=>{


const btn = btnRef.current;


const rect = btn.getBoundingClientRect();



const x = e.clientX - (rect.left + rect.width/2);

const y = e.clientY - (rect.top + rect.height/2);



btn.style.transform = `

translate(${x*0.25}px,${y*0.25}px)

scale(1.1)

`;



}




const resetButton=()=>{


btnRef.current.style.transform =

"translate(0,0) scale(1)";


}




return(


<button


ref={btnRef}


className="magnetic-btn"


onMouseMove={moveButton}


onMouseLeave={resetButton}


>


{children}


</button>


)


}



export default MagneticButton;