import {useEffect,useRef} from "react";

import "./CursorTrail.css";


function CursorTrail(){


const canvasRef = useRef();



useEffect(()=>{


const canvas = canvasRef.current;

const ctx = canvas.getContext("2d");



canvas.width = window.innerWidth;

canvas.height = window.innerHeight;



let particles=[];



window.addEventListener(
"resize",
()=>{


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;


}

);





window.addEventListener(
"mousemove",
(e)=>{


for(let i=0;i<5;i++){


particles.push({


x:e.clientX,


y:e.clientY,


size:Math.random()*6+2,


speedX:(Math.random()-0.5)*3,


speedY:(Math.random()-0.5)*3,


alpha:1



});


}



});






function animate(){


ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);





particles.forEach((p,index)=>{



p.x += p.speedX;

p.y += p.speedY;


p.alpha -=0.03;



let gradient = ctx.createRadialGradient(


p.x,

p.y,

0,


p.x,

p.y,

p.size*5


);



gradient.addColorStop(

0,

`rgba(34,211,238,${p.alpha})`

);



gradient.addColorStop(

0.5,

`rgba(168,85,247,${p.alpha})`

);



gradient.addColorStop(

1,

"transparent"

);




ctx.fillStyle=gradient;



ctx.beginPath();



ctx.arc(

p.x,

p.y,

p.size,

0,

Math.PI*2

);



ctx.fill();



if(p.alpha<=0){

particles.splice(index,1);

}



});





requestAnimationFrame(animate);



}



animate();



},[]);




return(


<canvas

ref={canvasRef}

className="cursor-trail"

/>


)


}


export default CursorTrail;