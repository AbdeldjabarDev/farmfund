import AboutComp from "../components/AboutComp";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function About(props)
{
    return(
    <div className="flex flex-col w-full h-full">
        <Nav></Nav>
        <AboutComp></AboutComp>
<Footer></Footer>
    </div>)
}