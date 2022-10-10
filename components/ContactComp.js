export default function ContactComp(props)
{
    return(<div className="w-[90%] lg:w-[40%] h-[50vh] flex flex-col ml-auto mr-auto mb-[10vh]">
        <div className="flex w-fit ml-auto mr-auto font-bold text-4xl lg:text-4xl">Contact us <img src="/images/img-2.png"></img></div>
       <div className="flex flex-col gap-6 mt-[3%]">
       <input className="w-[90%] rounded-md  h-[40px] border border-slate-500 focus:outline-none pl-3 " placeholder="Name"></input>
        <input className="w-[90%] rounded-md h-[40px] border border-slate-500 focus:outline-none pl-3 " type="email" placeholder="Email"></input>
        <input className="w-[90%] rounded-md h-[40px] border border-slate-500 focus:outline-none pl-3 " placeholder="Subject"></input>
        <input className="w-[90%] rounded-md h-[80px] border border-slate-500 focus:outline-none pl-3 " placeholder="Message" ></input>
        <button className="rounded-md hover:shadow-lg active:shadow-none bg-black pl-3 pr-3 pt-2 pb-2 content-center w-[20%] ml-auto mr-auto text-white dark:border border-white">Submit</button>
       </div>


    </div>)
}