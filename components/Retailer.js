
import CatCont from "./CatCont";
export default function Retailer(props)
{
    let  current = null;
    let clickFunc = (e)=>{
        
       if(current === null)
       {
        current = e.target;
        return;  
       }
       else
       {
        current.style.backgroundColor = "transparent";
        current.style.color = "black";
        e.target.style.backgroundColor="rgb(219 39 119)";
        e.target.style.color="white";
        current = e.target;
       }
    }
    return(
   <div>
<div className="w-fit ml-auto mr-auto text-4xl lg:text-4xl font-bold flex content-center mt-[10%]">Retailer Categories<img src="/images/img-2.png"></img></div>
    <div className="flex w-[90%] md:w-[60%] lg:gap-14 mt-20 lg:ml-[35%] ml-[30%] cursor-pointer mr-auto ">
        <button className="hover:bg-pink-600 text-2xl  p-2 cursor-pointer transition-none hover:text-white text-black rounded-md" onClick={(e)=>{
            clickFunc(e);
        }}>All</button>
        <button className="hover:bg-pink-600 text-2xl p-2 cursor-pointer transition-none hover:text-white text-black rounded-md" onClick={(e)=>{
            clickFunc(e);
        }}>Milk</button>
        <button className="hover:bg-pink-600 text-2xl  p-2 cursor-pointer transition-none hover:text-white text-black rounded-md" onClick={(e)=>{
            clickFunc(e);
        }}>Fruit</button>
        <button className="hover:bg-pink-600 text-2xl  p-2 cursor-pointer transition-none hover:text-white text-black rounded-md" onClick={(e)=>{
            clickFunc(e);
        }}>Land</button>
        <button className="hover:bg-pink-600 text-2xl  p-2 cursor-pointer transition-none hover:text-white text-black rounded-md" onClick={(e)=>{
            clickFunc(e);
        }}>Animal</button>
    </div>
    <div className="ml-auto mr-auto mt-10 justify-center gap-10 w-[80%] flex flex-wrap" >
        <CatCont src="/images/img-5.png" name="Tomato"></CatCont>
        <CatCont src="/images/img-6.png" name="Tomato"></CatCont>
        <CatCont src="/images/img-7.png" name="Tomato"></CatCont>
        <CatCont src="/images/img-8.png" name="Tomato"></CatCont>
        <CatCont src="/images/img-7.png" name="Tomato"></CatCont>
        <CatCont src="/images/img-8.png" name="Tomato"></CatCont>
        <CatCont src="/images/img-6.png" name="Tomato"></CatCont>
        <CatCont src="/images/img-5.png" name="Tomato"></CatCont>  
    
    </div>
   </div>)
} 