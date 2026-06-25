import {useEffect,useRef} from "react";


function GalaxyBubble(){


const canvasRef=useRef();



useEffect(()=>{


const canvas=canvasRef.current;

const ctx=canvas.getContext("2d");


canvas.width=window.innerWidth;

canvas.height=550;



let bubbles=[];



for(let i=0;i<40;i++){


bubbles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*50+20,

speed:Math.random()+0.5


});


}





function animate(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



bubbles.forEach(b=>{


b.y-=b.speed;



if(b.y<-100){

b.y=canvas.height+100;

}



let gradient=ctx.createRadialGradient(

b.x-10,

b.y-10,

5,

b.x,

b.y,

b.size

);



gradient.addColorStop(
0,
"white"
);


gradient.addColorStop(
0.3,
"#38bdf8"
);



gradient.addColorStop(
1,
"transparent"
);



ctx.beginPath();


ctx.arc(

b.x,

b.y,

b.size,

0,

Math.PI*2

);


ctx.fillStyle=gradient;


ctx.fill();


});



requestAnimationFrame(animate);


}



animate();


},[]);



return(

<canvas

ref={canvasRef}

className="galaxy-footer"

/>

)


}



export default GalaxyBubble;