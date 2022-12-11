import { useRef, useState } from "react";
import Carousel from "./Carousel";
export default function Carouseler(props)
{
    let conRef = useRef();
    let [itemIndex,setItemIndex] = useState(0);    
     children= [<Carousel key={1}/>,<Carousel />]
   controls = [<div className='w-10 h-10 bg-[url("/images/left-icon.png")] bg-pink-600 bg-no-repeat bg-center rounded-full' key={1}></div>,
   <div className='w-10 h-10 bg-[url("/images/right-icon.png")] bg-black bg-no-repeat bg-center rounded-full' key={2}></div>]
    if(controls)
    {
      return(<div className={" " + props.tailwind} >
      <div className="flex flex-col lg:flex-row">
      {props.before}
     
      </div>
      <div className="flex flex-col w-full h-full overflow-hidden" >
      <div className="flex h-full "  ref={conRef} style={{width:children.length*100 +"%",transition:"transform .5s ease-out",transform:`translateX(-${itemIndex/children.length*100}%)`}}>
        {children}
      </div>
     <div className="flex gap-4"> <div className="z-20" onClick={(e)=>
    {console.log("control clicked : right");
    if(itemIndex < 0)
    {setItemIndex(0);return};
    if(itemIndex == children.length -1 )
    {return} 
     setItemIndex(itemIndex+1)}}>{controls[0]}</div>
<div className="z-20" onClick={(e)=>{
    console.log("control clicked : left ");
    if(itemIndex < 0)
    {setItemIndex(0);return};
    setItemIndex(itemIndex-1)}}>{controls[1]}</div></div>
      </div>
  
      </div>
      
      )  
    }
    return (
        <div className={" " + props.tailwind}>
        <div className="flex flex-col lg:flex-row" >
        <div className="flex  h-full "  ref={conRef} style={{width:children.length*100 +"%",transition:"transform .5s ease-out",transform:`translateX(-${itemIndex/children.length*100}%)`}}>
            {children}
        </div>
        <div className="flex gap-4">
        
        <div className="p-4 bg-red-300"     onClick={(e)=>{if(itemIndex < 1) {return}setItemIndex(itemIndex-1) }}>{"<"}</div>
           <div className="p-4 bg-blue-300" onClick={(e)=>{if(itemIndex == children.length -1) {return}setItemIndex(itemIndex+1) }}> {">"}</div>
          
        </div>
        </div>
        </div>

)

}
