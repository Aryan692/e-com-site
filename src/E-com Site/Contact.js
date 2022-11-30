import React,{useState} from 'react';
import emailjs from '@emailjs/browser';

import { useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const Contact = () => {

    const {isAuthenticated , user} = useAuth0();


    const [ setDone] = useState(); 
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_efd6btr', 'template_qnef8e8', form.current, 'UQwh4hheM92tcIS1Q')
        .then((result) => {
            setDone(true);

            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    return(<>
    
    <div className='main-div flex flex-col items-center justify-center gap-5 mt-[2rem]'>
        <h1 className='heading font-sans text-2xl'>Feel free to contact us</h1>     
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110471.12527500224!2d78.20056746795476!3d30.08780871830061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e67cf93f111%3A0xcc78804a6f941bfe!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1664560070622!5m2!1sen!2sin"
     width="100%" 
     height="350" 
     style={{border: 0 }}
     allowFullScreen=""
     loading="lazy"
     referrerPolicy="no-referrer-when-downgrade"></iframe>


     <div className='form-div h-[50vh] w-[70vh] border-none flex flex-col items-center justify-center  mt-[3rem]'>

        <form ref={form} onSubmit={sendEmail}  className='form flex flex-col gap-4 m-4 items-center'>
            <input className='inp1 w-[17rem] h-[2.5rem] rounded-md border-[2px] border-black' type="text" name='username' placeholder='Enter your name' required autoComplete='off' value={isAuthenticated ? user.name : ""} />
            <input className='inp2 w-[17rem] h-[2.5rem] rounded-md border-[2px] border-black' type="email" name='email' placeholder='Enter your email' required autoComplete='off' value={isAuthenticated? user.email : ""} />
            <textarea className='inp3 w-[17rem] rounded-md border-[2px] border-black' placeholder='write something...' id='message' name="message" cols="20" rows="5"></textarea>
            <button  className='submit-btn border-[2px] w-[4.5rem] h-[2rem] bg-blue-700 text-white hover:bg-white hover:border-blue-700 hover:text-blue-700 rounded-md shadow-2xl transition-all ease-in'>Submit</button>
        </form>


     </div>
     </div>



     
    </>);
}

export default Contact;