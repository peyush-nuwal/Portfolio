import { motion } from 'framer-motion'
import React from 'react'

const Links = () => {
   const links=['HomePage',"Services","Portfolio","Contact"]

   const variants={
      open:{
          transition:{
           staggerChildren:0.2,
          }
      },
      close:{
         transition:{
           staggerChildren:0.04,

           staggerDirection:-1,
         }
      }
   }
   const itemVariants={
    open:{
       y:0,
       opacity:1
    },
    close:{
      y:50,
      opacity:0,
    }
 }
  return (
    <motion.div variants={variants} className='flex flex-col w-full h-full absolute items-center justify-center gap-5 text-black font-semiBold'>
      {links.map((item)=>(
 <motion.a href={`#${item}`} key={item} className='text-3xl' variants={itemVariants} whileHover={{scale:1.1} }whileTap={{scale:0.9}}>{item}</motion.a>
      ))}
       
    </motion.div>
  )
}

export default Links