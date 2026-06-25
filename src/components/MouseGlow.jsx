import {useEffect,useRef} from "react";

import "./MouseGlow.css";


function MouseGlow(){


const glowRef = useRef();



useEffect(()=>{


let mouse={

x:0,

y:0

};


let current={

x:0,

y:0

};



const move=(e)=>{


mouse.x=e.clientX;

mouse.y=e.clientY;


};



window.addEventListener(
"mousemove",
move
);




function animate(){


current.x += (mouse.x-current.x)*0.08;

current.y += (mouse.y-current.y)*0.08;



if(glowRef.current){


glowRef.current.style.transform =


`translate3d(${current.x}px,${current.y}px,0)`;



}



requestAnimationFrame(animate);



}



animate();



return()=>{


window.removeEventListener(
"mousemove",
move
);


}



},[]);




return(


<div

ref={glowRef}

className="mouse-glow"


></div>


)


}


export default MouseGlow;