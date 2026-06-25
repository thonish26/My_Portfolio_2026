import {useRef} from "react";

import "./TiltCard.css";


function TiltCard({children,className=""}){


const cardRef = useRef();



const handleMove=(e)=>{


const card = cardRef.current;


const rect = card.getBoundingClientRect();



const x = e.clientX - rect.left;

const y = e.clientY - rect.top;



const centerX = rect.width / 2;

const centerY = rect.height / 2;



const rotateX = (y-centerY)/15;

const rotateY = (centerX-x)/15;



card.style.transform = `

perspective(1000px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

scale(1.05)

`;



}




const reset=()=>{


cardRef.current.style.transform=

`

perspective(1000px)

rotateX(0)

rotateY(0)

scale(1)

`;



}



return(


<div


ref={cardRef}


className={`tilt-card ${className}`}


onMouseMove={handleMove}


onMouseLeave={reset}



>


{children}



</div>


)


}


export default TiltCard;