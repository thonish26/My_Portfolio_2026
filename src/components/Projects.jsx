import "./Projects.css";
import TiltCard from "./TiltCard";


function Projects(){


const projects=[


{
title:"Billing System",
tech:"Java • MySQL",
desc:"Retail billing system with inventory management, GST calculation and bill generation.",
link:"https://github.com/thonish26/Billing-Management-System.git"
},


{
title:"Library Management",
tech:"Java • MySQL",
desc:"Library automation system with book issue, return tracking and fine calculation.",
link:"https://github.com/thonish26/library-management-system"
},


{
title:"Income & Expense System",
tech:"Java • Spring Boot • MySQL",
desc:"Secure application to track daily financial transactions.",
link:"https://github.com/thonish26/Income_Expense-in-SpringBoot.git"
},


{
title:"BookMyShow",
tech:"React • Express • MySQL",
desc:"Movie ticket booking application with seat selection and booking.",
link:"https://github.com/thonish26/bookmyshow-clone"
}


];





return(


<section className="projects" id="projects">


<div className="look-text">

LOOK - AT - MY

</div>



<h2>
Projects
</h2>



<div className="projects-container">


{

projects.map((p,index)=>(



<TiltCard

key={index}

className="project-card"

>


<div className="card-inner">



<div className="card-front">


<h3>
{p.title}
</h3>


<h4>
{p.tech}
</h4>


<p>
Hover to see details
</p>


</div>





<div className="card-back">


<h3>
{p.title}
</h3>


<p>
{p.desc}
</p>



<a

href={p.link}

target="_blank"

rel="noreferrer"

>


<button>

View Project

</button>


</a>


</div>



</div>


</TiltCard>



))


}


</div>


</section>


)

}


export default Projects;