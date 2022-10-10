import { useRef, useState } from "react";
export default function Carouseler(props)
{
    let conRef = useRef();
    let [itemIndex,setItemIndex] = useState(0);    
    if(props.controls)
    {
      return(<div className={" " + props.tailwind} >
      <div className="flex flex-col lg:flex-row">
      {props.before}
     
      </div>
      <div className="flex flex-col w-full h-full overflow-hidden" >
      <div className="flex h-full "  ref={conRef} style={{width:props.children.length*100 +"%",transition:"transform .5s ease-out",transform:`translateX(-${itemIndex/props.children.length*100}%)`}}>
        {props.children}
      </div>
     <div className="flex gap-4"> <div className="z-20" onClick={(e)=>
    {console.log("control clicked : right");
    if(itemIndex < 0)
    {setItemIndex(0);return};
    if(itemIndex == props.children.length -1 )
    {return} 
     setItemIndex(itemIndex+1)}}>{props.controls[0]}</div>
<div className="z-20" onClick={(e)=>{
    console.log("control clicked : left ");
    if(itemIndex < 0)
    {setItemIndex(0);return};
    setItemIndex(itemIndex-1)}}>{props.controls[1]}</div></div>
      </div>
      {/* <div className="absolute font-bold text-xl z-30" style={{top:"3%",left:"4%"}}>{itemIndex}</div> */}
      </div>
      
      )  
    }
    return (
        <div className={" " + props.tailwind}>
        <div className="flex flex-col lg:flex-row" >
        <div className="flex  h-full "  ref={conRef} style={{width:props.children.length*100 +"%",transition:"transform .5s ease-out",transform:`translateX(-${itemIndex/props.children.length*100}%)`}}>
            {props.children}
        </div>
        <div className="flex gap-4">
        
        <div className="p-4 bg-red-300"     onClick={(e)=>{if(itemIndex < 1) {return}setItemIndex(itemIndex-1) }}>{"<"}</div>
           <div className="p-4 bg-blue-300" onClick={(e)=>{if(itemIndex == props.children.length -1) {return}setItemIndex(itemIndex+1) }}> {">"}</div>
          
        </div>
        </div>
        </div>

)

}