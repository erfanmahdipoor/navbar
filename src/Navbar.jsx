import React, { useEffect, useRef, useState } from 'react'

import { FaBars ,FaTwitter } from "react-icons/fa";
// ,FaTwitter,fatimes
import {links,socials} from './data'
const Navbar = () => {
    const [showLink ,setShowLink]=useState(false)
    const containerRef =useRef(null)
    const linksRef =useRef(null)
     useEffect(()=>{
          const linksHeight=linksRef.current.getBoundingClientRect().height;
          console.log(linksHeight);
         if(showLink){
            containerRef.current.style.height =` ${linksHeight}`
         }else{
            containerRef.current.style.height = "0px"
         }
     },[showLink])



  return (
    <nav>
        <div className='container'>
            <div className='nav-logo'>
                <button className='nav-toggle' onClick={()=>{setShowLink(!showLink)}}>
                    {showLink?<FaTwitter/>:<FaBars/>}
                </button>
                <img src='download.png' alt="logo" />
            </div>

            
            <div className={`${showLink? 'nav-link active' : 'nav-link'}`} ref={containerRef}>
                <ul className='link' ref={linksRef}>
                {
                    links.map((link)=>{
                       const {id,url,text}=link
                       return(
                        <li key={id}>
                           <a href={url}>{text}</a>
                        </li>
                       )
                    })
                }
              </ul>
            </div>
            
            <ul className='nav-social'>
                 {
                    socials.map((social)=>{
                        const {id,url,icon}=social
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                 })
                 }
            </ul>
        </div>

    </nav>
  )
}

export default Navbar