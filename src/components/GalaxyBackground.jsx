import "./GalaxyBackground.css";
import { Canvas, useFrame,} from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";


function GalaxyMove(){


const group = useRef();


useFrame(({mouse})=>{


group.current.rotation.x = mouse.y * 0.2;

group.current.rotation.y = mouse.x * 0.3;


});



return(


<group ref={group}>


<Stars

radius={120}

depth={60}

count={6000}

factor={5}

fade

speed={1}


/>


</group>


)


}




function GalaxyBackground(){


return(


<div className="galaxy">


<Canvas>


<GalaxyMove/>


</Canvas>


</div>


)

}


export default GalaxyBackground;