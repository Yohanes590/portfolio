import AboutImage from '../assets/photo-shope.png'
import { RiCodeSSlashFill } from "react-icons/ri";
import { FaReact } from 'react-icons/fa'
function AboutSection() {
    return (<>
        <div className="about-section h-screen transition-all duration-400 w-full">
            <div className="latter-section h-[90%] w-full flex items-center justify-evenly flex-wrap">
                <div className="image">
                    <img className='w-[400px] md:w-[700px]   rounded-b-[50%] transform scale-x-[-1]' src={AboutImage} />
                </div>
                <div className="about-text w-[800px]">
                    <h1 className="text-[40px]">About <span className="text-blue-500 font-bold">Me ?</span></h1>
                    <p>I’m a passionate full-stack developer specializing in React, Node.js, and MongoDB. I build clean, scalable web applications that turn ideas into user-friendly experiences. Constantly learning, I’m also exploring cybersecurity and AI to create innovative, secure solutions. Beyond coding, I thrive on problem-solving, performance optimization, and staying ahead of tech trends. Let’s build something amazing together!</p>
                    <div className="flex-card-section flex flex-wrap justify-between mt-[25px]">
                        <div className="card-one flex items-center pl-[30px] w-[390px] rounded-[10px] h-[200px] backdrop-blur-2xl bg-[#1915ff34] border-1 transition-all duration-500 shadow-transparent border-b-blue-500 border-b-4 hover:shadow-blue-500 shadow-[0_0_10px] border-transparent hover:border-blue-400 mt-[20px]">
                            <div className="text-area">
                                <div className="icons bg-blue-900 w-[50px] h-[50px] items-center justify-center rounded-[50%] flex text-[#00e1ff]"><RiCodeSSlashFill size={20} /></div>
                                <h1 className='mt-[15px] font-bold text-[18px]'>Full-Stuck Web Developemnt Skill</h1>
                                <p className='text-[14px] mt-[5px] text-[#ececec]'>I develop bulletproof, scalable web applications for high-impact businesses and creative personal projects.</p>
                            </div>
                        </div>
                        <div className="card-one flex items-center pl-[30px] w-[390px] rounded-[10px] h-[200px] backdrop-blur-2xl  bg-[#1915ff34] border-1 transition-all duration-500 shadow-transparent border-b-blue-500 border-b-4 hover:shadow-blue-500 shadow-[0_0_10px] border-transparent hover:border-blue-400 mt-[20px]">
                            <div className="text-area">
                                <div className="icons bg-blue-900 w-[50px] h-[50px] items-center justify-center rounded-[50%] flex text-[#00e1ff]"><FaReact size={20} /></div>
                                <h1 className='mt-[15px] font-bold text-[18px]'>UI design</h1>
                                <p className='text-[14px] mt-[5px] text-[#ececec]'>I craft stunning UI/UX designs with modern technology stacks, ensuring quality and innovation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default AboutSection