import Head from 'next/head'
import Nav from '../components/Nav'
import Carouseler from '../components/Carouseler'
import AboutComp from '../components/AboutComp'
import ServicesComp from '../components/Services'
import Retailer from '../components/Retailer'
import ContactComp from '../components/ContactComp'
import Footer from '../components/Footer'
export default function Home() {
  
  return (
    <div className="h-full w-full flex flex-col ">
      <Head>
        <title>FarmFund</title>
        <meta name="description" content="FarmFund : Farming Retail service template website" />
        <link rel="icon" href="/images/logo.png" />
        <meta name="viewport" content='width=device-width,initial-scale=1'/>
      </Head>
      <div className='bg-center bg-no-repeat md:bg-[url("/images/banner-bg.png")] w-full h-[100vh]' style={{backgroundSize:"100%",backgroundPosition:"0% 0%"}}
      >
   <Nav></Nav>
   <Carouseler
   tailwind = "w-[75%] h-[80vh] ml-auto mr-auto overflow-hidden mt-[10%] transition-[ease all 0.5s]"
  
   ></Carouseler>
      </div>
      <AboutComp></AboutComp>
      <ServicesComp></ServicesComp>
<Retailer></Retailer>
<div className='w-[100%] sm:w-[70%] md:w-[50%] h-[40vh] shadow-xl bg-pink-600  rounded-xl  mt-10 mb-10 ml-auto mr-auto flex flex-col pt-[5%]'>
<div className='w-fit ml-auto mr-auto text-2xl md:text-3xl text-white'>Subscribe to our newsletter</div>
<input className='focus:outline-none w-[90%] sm:w-[70%] md:w-[60%] pl-2 mb-[4%] rounded-md ml-auto mr-auto mt-[5%]  h-[20%]'></input>
<button className='w-fit pl-4  pr-4 pt-2 pb-2 bg-black shadow-lg focus:shadow-none hover:bg-slate-800 text-white rounded-md content-center ml-auto mr-auto mt-[2%]'>Subscribe</button>
</div>
<ContactComp></ContactComp>
<Footer></Footer>
    </div>
  )
}
