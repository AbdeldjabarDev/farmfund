import ServicesComp from "../components/Services";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function Services(props)
{
    return(
        <div className="w-[100%]" >
           <Nav></Nav>
            <div className="flex flex-col gap-72">
            <ServicesComp></ServicesComp>
        <Footer></Footer>
            </div>

        </div>
       
    )
}