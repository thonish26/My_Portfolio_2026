import "./Skills.css";
import TiltCard from "./TiltCard";


import {
FaHtml5,
FaCss3Alt,
FaJs,
FaReact,
FaNodeJs,
FaBootstrap
} from "react-icons/fa";

import {
SiSpringboot,
SiMysql,
SiMongodb,
SiExpress,
SiDocker,
SiGithub
} from "react-icons/si";


function Skills(){


const skills=[


{
name:"HTML",
icon:<FaHtml5/>
},


{
name:"CSS",
icon:<FaCss3Alt/>
},


{
name:"JavaScript",
icon:<FaJs/>
},


{
name:"React",
icon:<FaReact/>
},


{
name:"Spring Boot",
icon:<SiSpringboot/>
},


{
name:"Node.js",
icon:<FaNodeJs/>
},


{
name:"Express.js",
icon:<SiExpress/>
},


{
name:"MySQL",
icon:<SiMysql/>
},


{
name:"MongoDB",
icon:<SiMongodb/>
},


{
name:"Docker",
icon:<SiDocker/>
},


{
name:"GitHub",
icon:<SiGithub/>
},


{
name:"Bootstrap",
icon:<FaBootstrap/>
}



];




return(


<section className="skills" id="skills">


<h2>
Skills
</h2>



<div className="skills-container">


{

skills.map((skill,index)=>(


<TiltCard key={index} className="skill-card">

    


<div className="skill-icon">
    

{skill.icon}

</div>


<h3>
{skill.name}
</h3>


</TiltCard>


))


}



</div>


</section>


);


}


export default Skills;