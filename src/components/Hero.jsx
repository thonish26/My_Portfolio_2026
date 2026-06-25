import { TypeAnimation } from "react-type-animation";

import "./Hero.css";

import FlameCanvas from "./FlameCanvas";

import MagneticButton from "./MagneticButton";

import GalaxyBackground from "./GalaxyBackground";


function Hero(){


return(


<section className="hero" id="home">


<FlameCanvas/>

<GalaxyBackground/>

<div className="hero-left">



<p className="small-text">

HELLO, I'M

</p>



<h1>

THONISHWARI M

</h1>





<TypeAnimation

sequence={[

"Full Stack Developer", 

2000,

"Java Developer",

2000,

"React Developer",

2000

]}


wrapper="h2"


repeat={Infinity}


/>





<p className="description">

I build modern scalable web applications using Java,
Spring Boot, React, Node.js and MySQL.

</p>





<div className="hero-buttons">



 
          <a href="/resume.pdf" download="THONISH RESUME-1.pdf">
            <MagneticButton>Download Resume</MagneticButton>
          </a>
        
        <a href="https://github.com/thonish26" target="_blank" rel="noreferrer">
          <MagneticButton>GitHub</MagneticButton>
        </a>
        
        <a href="https://www.linkedin.com/in/m-thonish26" target="_blank" rel="noreferrer">
             <MagneticButton>LinkedIn</MagneticButton>
        </a>



</div>





</div>


</section>


)

}


export default Hero;