export default function AboutComp(props)
{
    return(
        <div className="flex w-[90%] ml-6 md:ml-auto mr-auto h-[80%] md:h-[60%] gap-4 flex-col md:flex-row mb-[10%]">
            <div className="top-[30%] md:translate-y-[30%]  flex flex-col gap-10 md:w-[70%] sm:w-[60%] w-[90%]">
            <div className="font-bold text-5xl md:text-4xl mt-[30%] w-[100%] flex ">About FarmFund<span><img className="ml-2" src="/images/img-2.png"></img></span></div>
            <p className="text-3xl lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus sint optio inventore enim pariatur ducimus perferendis autem et magni.</p>
            <div className="bg-slate-900 text-white text-3xl lg:text-lg pl-4 pr-4 rounded-lg w-fit pt-2 pb-2 text-center content-center hover:bg-slate-700">Read more</div>
            </div>
            <img className="h-[100%] w-[80%] md:[w-50%] mt-[20%]" src="/images/img-3.png"></img>

        </div>
    )
}