import homeImage from '../assets/home-page.svg'
import { PiMouseScrollDuotone } from "react-icons/pi";
function HomePage() {
    function animationFunction() {
        setTimeout(() => {
            document.querySelector(".message-section").style.opacity = "1"
            document.querySelector(".message-section").style.paddingTop = "40px"
        }, 5000);
        setTimeout(() => {
            document.querySelector(".heading-section").style.opacity = "1"
        }, 5500);
        setTimeout(() => {
            document.querySelector(".line-anime").style.width = "80%"
            document.querySelector(".line-anime").style.opacity = "1"
        }, 6000);
        setTimeout(() => {
            document.querySelector(".intro-section").style.marginTop = "10px"
            document.querySelector(".intro-section").style.opacity = "1"
        }, 6500);
        setTimeout(() => {
            document.querySelector(".discription").style.opacity = "1"
        }, 7000);
        setTimeout(() => {
            document.querySelector(".button-section").style.opacity = "1"
            document.querySelector(".button-section").style.marginLeft = "0px"
        }, 7500);
        setTimeout(() => {
            document.getElementById("scale-button").style.scale = "1.0"
            document.getElementById("scale-button").style.opacity = "1"
        }, 8000);
        setTimeout(() => {
            document.querySelector(".scroll-down").style.opacity = "1"
        }, 8500);
    }
    animationFunction()
    return (<>
        <div className="message-section opacity-0 transition-all duration-800 pt-[100px] lg:pt-[140px] h-screen w-[100%] lg:w-full grid items-center justify-center z-10">
            <div className="message-area flex items-center justify-around  lg:w-full flex-wrap ">
                <div className="heading-message mt-[120px] w-[90%] lg:w-[800px] ">
                    <h1 className="heading-section mt-[40px]  duration-800 transition-all text-[40px] opacity-0">Full-Stack <span className='text-blue-500 font-bold'>Developer</span> & UI Designer—Turning Ideas Into Functional Beauty.</h1>
                    <hr className='line-anime opacity-0 transition-all duration-700 mt-[20px] w-[0%] border-2 border-blue-500 rounded-2xl' />
                    <h1 className="intro-section opacity-0 duration-800 text-[30px] transition-all mt-[50px]">Hi, <span className='text-blue-500'>I’m </span>Yohanes Mulugeta.</h1>
                    <h2 className='discription transition-all opacity-0 duration-800 text-[#9b9b9b] italic font-bold'>I build robust full-stack applications and craft intuitive UI designs—bridging code and creativity for seamless user experiences.</h2>
                    <div className=" flex items-center mt-[30px]  flex-wrap">
                        <button className='button-section transition-all duration-800 opacity-0  ml-[120px] h-[45px] w-[250px] bg-blue-600 border-blue-600 cursor-pointer  rounded-[10px]' onClick={() => window.location.href = "/projects"}>Explore Projects</button>
                        <a href='/CV.pdf' download><button id='scale-button' className=' transition-all duration-800 opacity-0 scale-[1.06] sm:mt-[0px] mt-[10px] ml-[0px] md:ml-[20px] h-[45px] w-[150px] rounded-[10px] text-blue-600 cursor-pointer bg-blue-200'>Download CV</button></a>
                    </div>
                </div>
                <div className="image-icon mt-[100px] ml-0px md:ml-[120px]">
                    <img src={homeImage} className='w-[200px] lg:w-[550px] drop-shadow-2xl ' />
                </div>
            </div>
            <div className="scroll-down opacity-0 text-blue-500 flex items-center justify-center ">
                <PiMouseScrollDuotone className='z-10' size={35} />
            </div>
        </div>

    </>)
}
export default HomePage