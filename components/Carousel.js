export default function Carousel(props)
{
    return(
        <div className='w-[100%] h-[65vh] md:h-[40vh] flex flex-wrap '>
<div className='mt-[3%] flex flex-col md:flex-row'>
<div>
<div className='text-5xl lg:text-3xl'>Retailers</div>
<span className='text-5xl lg:text-3xl text-red-300 font-bold'> Directory</span>
<div className="text-3xl lg:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, alias ipsa odio pariatur tenetur quasi hic dolor odit voluptate aliquam!</div>
</div>
<img src="/images/img-1.png" className='ml-auto w-fit h-[30vh]' style={{verticalAlign:"middle"}}></img>
</div>

   </div>
    )
}