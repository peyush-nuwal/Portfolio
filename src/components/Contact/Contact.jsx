import { animate, motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast ,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,

      staggerChildren: 0.2,
    },
  },
};


const Contact = () => {
    const ref = useRef();
    const form=useRef()
    const inView = useInView(ref, { rootMargin: "-50%" });

       
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_gxe293x', 'template_dvpklhc', form.current,  'alyIm38apMaaZxcIGzkG7')
          .then(
            () => {
                toast.success('email send successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    });
            },
            (error) => {
                toast.error(error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    });
            },
          );
      };


  return (
    <motion.div
      className="h-screen relative max-w-[900px] flex flex-col md:flex-row  m-auto items-center justify-center  md:px-10 lg:0  lg:gap-8  contact-div "
      initial="initial"
      whileInView={"animate"}
      ref={ref}
      variants={variants}
    
    >
        <ToastContainer/>
      <motion.div className="h-screen lg:full flex-1 flex   flex-col px-10 py-20  gap-6" variants={variants}>
        <motion.h1 variants={variants} className="text-6xl font-semibold ">
          Let's work together
        </motion.h1>
        <motion.div variants={variants}  >
          <h2 className="contact-h2">Mail</h2>
          <span className="contant-span">piyushnawal19@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} >
          <h2 className="contact-h2">phone</h2>
          <span className="contant-span">+919784926439</span>
        </motion.div>
        <motion.div variants={variants } >
          <h2 className="contact-h2">Address</h2>
          <span className="contant-span">
            Daulatgarh,asind
            <br />
            311301, bhilwara{" "}
          </span>
        </motion.div>
      </motion.div>
      <motion.div
        className=" flex-1 relative  h-screen w-full  flex items-center justify-center   mt-20 md:mt-0"
       
       
      >
        <motion.div initial={{opacity:1}}  whileInView={{opacity:0}} transition={{delay:2,duration:2}} className="absolute  w-full flex justify-center items-center top-0 left-0 z-[-1] stroke-[orange] " >
        <svg  className="stroke-[orange]" width="450px" height="500px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path
 initial={{pathLength:0}} animate={inView&&{pathLength:1}} transition={{ delay:0.8,duration:2}} d="M17.4009 19.2C15.8965 20.3302 14.0265 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V13.5C21 14.8807 19.8807 16 18.5 16C17.1193 16 16 14.8807 16 13.5V8M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="orange" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
        </motion.div>
        <motion.form
        ref={form}
           onSubmit={sendEmail}
          className=" flex flex-col h-full  w-full justify-center   gap-6 absolute top-0 left-0 p-16  md:p-0 "
            initial={{opacity:0}}  whileInView={{opacity:1}} transition={{delay:4,duration:2}}
         >
          <input
            type="text"
            placeholder="Name"
            name="from_name"
            required
            className="min-h-12 pl-3 rounded-md  border-[lightgray] border-[1px]  bg-transparent"
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            className="min-h-12 pl-3 rounded-md  border-[lightgray] border-[1px]  bg-transparent"
          />
          <textarea
            
            id=""
            placeholder="Message"
            name="Message"
            row={8}
            className=" min-h-20 px-3 pt-3 rounded-md  border-[lightgray] border-[1px]  bg-transparent"
          />
          <button className="bg-[orange] rounded-md min-h-12  text-xl text-[black]">
            submit
          </button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
