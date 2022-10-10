import { useRef } from "react";
import Link from "next/link";
export default function Nav(props)
{
    let navRef = useRef();
return(
<div className="flex w-[100%]">
<div className="absolute top-0 left-[100%]  md:translate-x-0 w-[50%] transition-none md:left-[50%] md:w-[50%] -z-10 h-[5%] bg_class bg-pink-600" ></div>
    <div className="absolute bg-black bg-opacity-40 top-0 z-40 left-0 w-[100%] h-[100%] " ref={navRef} style={{transform:"translateX(-100%)"}}>
    
        <div className="flex mt-20 gap-10 ml-[45%] mr-auto flex-col">
        <Link href="/"><span className="text-3xl text-white">Home</span></Link>
        <Link href="/services"><span className="text-3xl text-white">Services</span></Link>
        <Link href="/gallery"><span className="text-3xl text-white">Gallery</span></Link>
        <Link href="/about"><span className="text-3xl text-white">About</span></Link>

        </div>
        <div className="absolute text-3xl text-white top-[5%] left-[90%]" onClick={(e)=>{navRef.current.style.transform="translateX(-100%)"}}>X</div>

    </div>
<a className="float-left mt-[1%]" href="/"><img src="/images/logo.png"></img></a>
<div className="flex mr-0 md:mr-20 ml-auto  gap-6">
    <img src="/images/user-icon.png"></img>
    <img src="/images/bag-icon.png"></img>
    <img src="/images/search-icon.png"></img>
    <img src="/images/toogle-icon.png" onClick={(e)=>{
        navRef.current.style.transform = "translateX(0%)";
    }}></img>
</div>

</div>)

}