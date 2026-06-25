import "./About.css";

import Lottie from "lottie-react";

import developerAnimation from "../assets/developer.json";


function About(){


return(


<section className="about" id="about">



<div className="about-left">



<div className="about-text">


<span>A</span>

<span>B</span>

<span>O</span>

<span>U</span>

<span>T</span>


</div>





<div className="about-animation">


<Lottie

animationData={developerAnimation}

loop={true}

/>



</div>




</div>







<div className="about-right">



<h2>

About Me

</h2>




<p>


I am a passionate 

<span className="tech">

Full Stack Developer

</span>

with strong skills in

<span className="java">

Java

</span>,

<span className="spring">

Spring Boot

</span>,

<span className="react">

React

</span>,

Node.js and MySQL.


</p>





<p>


Through hands-on projects including

<span className="tech">

BookMyShow Clone 

</span>,

Income & Expense Tracker,

Billing System and Library Management System,

I have experience building modern web applications.



</p>





<p>


My technical expertise includes REST APIs,

Spring Security, React Components,

database design and responsive UI development.



</p>






<p>


My experience as a Business Manager in Digital Marketing improved my communication,

leadership and client management skills.



</p>





</div>



</section>



)



}



export default About;