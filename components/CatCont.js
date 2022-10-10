export default function CatCont(props)
{
    return(<div className={"w-[80%] sm:w-[50%] md:w-[20%] h-[10%] border-[2px] border-slate-500 rounded-md"}  >
        <img src={props.src} className=" h-[20vh] w-[55%] ml-auto mr-auto mt-[2vh]"></img>
        <h1 className="w-fit ml-auto mr-auto font-serif font-semibold text-xl">{props.name}</h1>

    </div>)
}