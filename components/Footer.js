import LinkContainer from "./LinkContainer";

export default function Footer(props)
{
    return(
    <div className="flex flex-col h-fit lg:h-[60vh] bg-black bg-opacity-90 mt-[10%]">
        <div className="text-6xl lg:text-4xl font-serif font-bold text-white ml-[10%] md:ml-[25%] mt-[2%]">FarmFund</div>
<div className="text-white flex flex-col md:flex-row gap-16 ml-[10%] mr-auto md:ml-auto mt-[2%]">
<div className="flex flex-col gap-4">
   <div className="text-4xl text-white">Menus</div>
   <a href="#"><LinkContainer text="Company"></LinkContainer></a>
   <a href="#"><LinkContainer text="About"></LinkContainer></a>
   <a href="#"><LinkContainer text="Partners"></LinkContainer></a>
   <a href="#"><LinkContainer text="Something else"></LinkContainer></a>
  
   
</div>
<div className="w-[3px] h-[90%] hidden md:block bg-white"></div>
<div className="flex flex-col gap-4 ">
<div className="text-4xl text-white">Useful Links</div>
<a href="#"><LinkContainer text="Company"></LinkContainer></a>
   <a href="#"><LinkContainer text="About"></LinkContainer></a>
   <a href="#"><LinkContainer text="Partners"></LinkContainer></a>
   <a href="#"><LinkContainer text="Something else"></LinkContainer></a>
   
</div>
<div className="w-[3px] h-[90%] hidden md:block bg-white"></div>
<div className="flex flex-col gap-4">
   <div className="text-lg ">Follow us</div>
   <div className="flex gap-3 mb-[10%]">
      <a href="#"><img src="/images/fb-icon.png"></img></a>
      <a href="#"><img src="/images/instagram-icon.png"></img></a>
      <a href="#"><img src="/images/twitter-icon.png"></img></a>
      <a href="#"><img src="/images/linkedin-icon.png"></img></a>
   
   </div>
</div>
</div>
    </div>)
}