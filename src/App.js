import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


import MouseGlow from "./components/MouseGlow";
import CursorTrail from "./components/CursorTrail";
import ParticleBackground from "./components/ParticleBackground";
import ScrollAnimation from "./components/ScrollAnimation";
import Loader from "./components/Loader";
import ThemeToggle from "./components/ThemeToggle";


import GalaxyBackground from "./components/GalaxyBackground";

function App(){


return(


<>


<ParticleBackground/>


<Loader/>

<GalaxyBackground/>

<MouseGlow/>


<CursorTrail/>

<ThemeToggle/>


<Navbar/>




<ScrollAnimation>

<Hero/>

</ScrollAnimation>





<ScrollAnimation>

<About/>

</ScrollAnimation>





<ScrollAnimation>

<Skills/>

</ScrollAnimation>





<ScrollAnimation>

<Projects/>

</ScrollAnimation>





<ScrollAnimation>

<Experience/>

</ScrollAnimation>





<ScrollAnimation>

<Contact/>

</ScrollAnimation>





<ScrollAnimation>

<Footer/>

</ScrollAnimation>



</>


)

}


export default App;