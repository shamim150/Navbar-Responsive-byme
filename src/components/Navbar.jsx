import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Li } from "./Layer/Li";
import Container from "./Layer/Container";
import { PiDotsNineFill } from "react-icons/pi";

const Navbar = () => {

  let [show, setShow] = useState(false)

  useEffect (()=>{
    function widthSize(){
      if(window.innerWidth > 735.99){
        setShow(true)
      }else{
        setShow(false)
      }
    }
    widthSize()
    window.addEventListener("resize", widthSize)
  },[])





  return (
    <Container className=" relative flex md:justify-center justify-end items-center md-y-8 py-4 px-3 md:px-0">
      <Link>
        <img
          className="absolute top-1/2 md:left-0 left-4 -translate-y-1/2 z-50"
          src="../../public/Logo.png"
          alt=""
        />
      </Link>

     {
      show &&
      <ul className="flex md:justify-center items-center gap-x-10 md:flex-row flex-col bg-slate-400 md:bg-transparent  absolute top-full left-0 md:static p-6 md:p-0 w-full md:w-auto">

      <Li className="!text-primary" to="/" alo={"Home"} />
      <Li to="/shop" alo={"Shop"} />
      <Li to="about" alo={"About"} />
      <Li to="contact" alo={"Contact"} />
      <Li to="journalist" alo={"Journal"} />
    </ul>
     }

      <div onClick={()=> setShow(!show)} className="flex md:hidden">
      <PiDotsNineFill/>

      </div>
    </Container>
  );
};

export default Navbar;
