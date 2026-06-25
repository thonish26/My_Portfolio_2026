import "./Navbar.css";
import { useState, useEffect } from "react";


function Navbar(){


const [active,setActive]=useState("home");



useEffect(()=>{


const sections=document.querySelectorAll("section");



const observer=new IntersectionObserver(


(entries)=>{


entries.forEach((entry)=>{


if(entry.isIntersecting){


setActive(entry.target.id);


}


});


},


{
threshold:0.5
}


);



sections.forEach((section)=>{


observer.observe(section);


});



return()=>{


sections.forEach((section)=>{


observer.unobserve(section);


});


}


},[]);





const menu=[

"home",
"about",
"skills",
"projects",
"experience",
"contact"

];





return(


<header>


<div className="logo">

THONISH

</div>



<nav>


{

menu.map((item)=>(


<a

key={item}

href={`#${item}`}

className={
active===item ? "active" : ""
}

>


{
item.charAt(0).toUpperCase()+item.slice(1)
}



</a>


))

}



</nav>



</header>


)

}


export default Navbar;