import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

function Contact(){


const form = useRef();



const sendEmail = (e)=>{


e.preventDefault();



emailjs.sendForm(

"service_uba8eid",

"template_6yemc18",

form.current,

"q33imVNVD-Xys9wt3"


)

.then(()=>{


alert("Message Sent Successfully 🚀");


form.current.reset();


})


.catch((error)=>{


console.log(error);


alert(
"Message Failed : " + error.text
);


});


}




return(


<section className="contact" id="contact">


<h2>
Get In Touch
</h2>



<form

ref={form}

onSubmit={sendEmail}

className="contact-form"


>



<input


type="text"


name="from_name"


placeholder="Your Name"


required


/>



<input


type="email"


name="from_email"


placeholder="Your Email"


required


/>



<input


type="text"


name="subject"


placeholder="Subject"


required


/>



<textarea


name="message"


placeholder="Your Message"


rows="6"


required


></textarea>




<MagneticButton>

Send Message

</MagneticButton>



</form>



</section>


)

}


export default Contact;