import ServiceCont from "./ServiceCont";

export default function ServicesComp(props)
{
    return(
        <div className="mt-20 relative">
        <h1 className="ml-auto mr-auto text-4xl lg:text-4xl font-bold w-fit">Our Services</h1>
          <div className="flex flex-col md:flex-row w-[100%] gap-6 ml-auto mt-20 md:w-[80%]">
            <img className="w-full md:w-[35%]  mr-auto md:mr-[10%] ml-auto md:ml-[-10%] md:absolute top-[0] left-[0] " src="/images/img-4.png"></img>
<div className="flex flex-col md:flex-row gap-2 ml-[12%] lg:mt-[10%] z-10">
<ServiceCont title="Title" src="/images/box-1.png"></ServiceCont>
<ServiceCont title="Title" src="/images/box-2.png" noChange></ServiceCont>
<ServiceCont title="Title" src="/images/box-1.png"></ServiceCont>
</div>

    </div>
        </div>
  )
}