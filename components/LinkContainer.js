export default function LinkContainer(props)
{
    return(<div>
         <div className="flex relative gap-10">
    <span className="w-[10px] h-[10px] absolute translate-y-[-50%]  top-[50%] bg-pink-600 rounded-full"></span> <span className="text-2xl ml-5 hover:text-pink-600">{props.text}</span></div>
    </div>)
}