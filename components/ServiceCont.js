export default function ServiceCont(props)
{
    let defaultSrc = props.src;
    return(<div className="flex flex-col gap-3">
    <h1 className="text-4xl lg:text-xl font-semibold w-fit ml-auto mr-auto">{props.title}</h1>
    <img src={props.src} className="w-fit ml-auto mr-auto" onMouseEnter={(e)=>{if(props.noChange){return;} e.target.src="/images/box-3.png"}} onMouseLeave={(e)=>{e.target.src = defaultSrc}}></img>
    <p className="text-2xl lg:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum totam deleniti </p>
</div>)
}