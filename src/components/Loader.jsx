import {useEffect,useState} from "react";

import "./Loader.css";


function Loader(){


const [loading,setLoading]=useState(true);



useEffect(()=>{


const timer=setTimeout(()=>{


setLoading(false);


},2500);



return()=>clearTimeout(timer);



},[]);



if(!loading) return null;



return(


<div className="loader">


<h1>

THONISH

</h1>


<div className="loader-bar"></div>


</div>


)


}



export default Loader;