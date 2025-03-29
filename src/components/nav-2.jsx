import { FaHandshake } from 'react-icons/fa';
import { CiMenuFries } from "react-icons/ci";
import { useState } from 'react';
function Nav2() {
    const [menuBull, setMenuBull] = useState(true)
    const openMenuBar = () => {
        if (menuBull == true) {
            setMenuBull(false)
            document.querySelector(".hiden-menu-section").style.display = "flex"
        } else {
            setMenuBull(true)
            document.querySelector(".hiden-menu-section").style.display = "none"
        }
    }
    return (<>
        <div className="nav-bar w-[100%] transition-all duration-800 flex justify-center">
            <div className="nav-section w-[100%] transition-all duration-500 h-[60px] bg-[#132bff1e] backdrop-blur-2xl flex items-center justify-around lg:justify-evenly">
                <div className="logo">
                    <h1 className="text-[20px] font-bold">Yoha<span className='text-blue-500'>nes</span>.</h1>
                </div>
                <div className="button-nav-bar hidden lg:block">
                    <a href="/" className="ml-[30px] transition-all duration-400 hover:text-blue-500 ">Welcome</a>
                    <a href="/about" className="ml-[30px] transition-all duration-400 hover:text-blue-500 ">About Me</a>
                    <a href="/projects" className="ml-[30px] transition-all duration-400 hover:text-blue-500 ">Projects</a>
                    <a href="/certeficate" className="ml-[30px] transition-all duration-400 hover:text-blue-500 ">Certification</a>
                    <a href="/contact" className="ml-[30px] transition-all duration-400 hover:text-blue-500 "> Reach Out</a>
                </div>
                <div className="hireme hidden lg:block">
                    <button onClick={() => window.location.href = "/contact"} className='flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-all duration-400 bg-blue-500 text-white rounded-[7px] w-[200px] h-[40px]'>Let's Collaborate &nbsp; <FaHandshake /></button>
                </div>
                <div onClick={openMenuBar} className="hidden-icons lg:hidden block">
                    <CiMenuFries size={25} />
                </div>

            </div>
        </div>
        <div className="hiden-menu-section w-[90%] ml-[3.5%] rounded-[10px] h-[85%] fixed z-40 bg-[#1414795b] backdrop-blur-2xl hidden items-center justify-center mt-[100px]">
            <div className="flex-area">
                <div className="button-nav-bar ">
                    <a href="/" className="ml-[30px] transition-all duration-400 hover:text-blue-500 text-[18px] ">Welcome</a><br /><br />
                    <a href="/about" className="ml-[30px] transition-all duration-400 hover:text-blue-500 text-[18px] ">About Me</a><br /><br />
                    <a href="/projects" className="ml-[30px] transition-all duration-400 hover:text-blue-500 text-[18px] ">Projects</a><br /><br />
                    <a href="/certeficate" className="ml-[30px] transition-all duration-400 hover:text-blue-500 ">Certification</a><br /><br />
                    <a href="/contact" className="ml-[30px] transition-all duration-400 hover:text-blue-500 text-[18px] "> Reach Out</a><br /><br />
                </div>
                <div className="hireme ">
                    <button onClick={() => window.location.href = "/contact"} className='flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-all duration-400 bg-blue-500 text-white rounded-[7px] w-[200px] h-[40px]'>Let's Collaborate &nbsp; <FaHandshake /></button>
                </div>
            </div>
        </div>
    </>)
}

export default Nav2