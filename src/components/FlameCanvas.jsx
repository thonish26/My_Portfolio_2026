import {useEffect,useRef} from "react";


function FlameCanvas(){


const canvasRef = useRef();



useEffect(()=>{


const canvas = canvasRef.current;

const ctx = canvas.getContext("2d");



canvas.width = window.innerWidth;

canvas.height = window.innerHeight;



let particles=[];



for(let i=0;i<80;i++){


particles.push({


x:canvas.width/2,

y:canvas.height/2,


size:Math.random()*8+2,


speedX:(Math.random()-0.5)*2,


speedY:(Math.random()-0.5)*2,


alpha:Math.random()


});


}





function animate(){


ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);





particles.forEach(p=>{


p.x += p.speedX;

p.y += p.speedY;



p.alpha -=0.005;



if(p.alpha<=0){


p.x=canvas.width/2;

p.y=canvas.height/2;

p.alpha=1;


}




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

`rgba(255,120,0,${p.alpha})`

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



});



requestAnimationFrame(animate);


}



animate();



},[]);



return(


<canvas

ref={canvasRef}

className="flame-canvas"

/>


)

}



export default FlameCanvas;