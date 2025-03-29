import { GoDotFill } from "react-icons/go";
import FILM from '../assets/film.jpg'
import YONILE from '../assets/yonile.jpg'
import TASK from '../assets/task.jpg'
import MK from '../assets/MK.jpg'
import E_KIDAME from '../assets/E-KIDAME.jpg'
import { TbIrregularPolyhedron } from "react-icons/tb";
import { FaUikit } from "react-icons/fa";
import './additinal-style.css'
import { SiMaterialformkdocs } from "react-icons/si";
import { PiFilmReelLight } from "react-icons/pi";
import { MdAddTask } from "react-icons/md";
function Projects() {
    const OpenProjectLinks = (projectLink) => {
        if (projectLink == 'jo-films') {
            window.open('https://jo-films.vercel.app/')
        } else if (projectLink == 'task') {
            window.open('https://taski-manager.vercel.app/')
        } else if (projectLink == 'yonile') {
            window.open('https://yonile-digitals.vercel.app/')
        } else if (projectLink == 'mk-clean') {
            window.open('https://mk-cleaning.vercel.app/')
        } else if (projectLink == 'e-com') {
            window.open('https://e-kidame.vercel.app/')
        }
    }
    return (<>
        <div className="projects h-[auto] w-full">
            <center>
                <h1 className=" w-[100px] h-[25px] rounded-[10px] border-1 border-[#3be8ff] flex items-center justify-center text-[#3be8ff]"><GoDotFill />Projects</h1>
            </center>

            <div className="flex-card-section mt-[50px]">

                <center>
                    <div className="card-one-o-1  transition-all overflow-hidden cursor-pointer duration-500 pt-[40px] mt-[40px] bg-linear-to-b from-[#0084ff] to-[#002fff02] w-[80%] text-[white] h-[auto] md:h-[750px] rounded-[10px]">
                        <h1 className="font-bold text-[25px] flex justify-center items-center"><PiFilmReelLight />&nbsp; Film Platform</h1>
                        <div className="absolute-part ">
                            <button className="w-[200px] h-[40px] bg-cyan-600 cursor-pointer rounded-[20px]" onClick={() => OpenProjectLinks('jo-films')}>Visit Site</button>
                        </div>
                        <img className="mt-[30px] w-[100%]" src={FILM} />
                    </div>


                    <div className="card-one-o-1  transition-all overflow-hidden cursor-pointer duration-500 pt-[40px] mt-[40px] bg-linear-to-b from-[#0084ff] to-[#002fff02] w-[80%] text-[white] h-[auto] md:h-[750px] rounded-[10px]">
                        <h1 className="font-bold text-[25px] flex justify-center items-center"><MdAddTask />&nbsp; Task Management App</h1>
                        <div className="absolute-part ">
                            <button className="w-[200px] h-[40px] bg-cyan-600 cursor-pointer rounded-[20px]" onClick={() => OpenProjectLinks('task')}>Visit Site</button>
                        </div>
                        <img className="mt-[30px] w-[100%]" src={TASK} />
                    </div>

                    <div className="card-one-o-1  transition-all overflow-hidden cursor-pointer duration-500 pt-[40px] mt-[40px] bg-linear-to-b from-[#0084ff] to-[#002fff02] w-[80%] text-[white] h-[auto] md:h-[750px] rounded-[10px]">
                        <h1 className="font-bold text-[25px] flex justify-center items-center"><FaUikit />&nbsp; Yonile Digitals</h1>
                        <div className="absolute-part ">
                            <button className="w-[200px] h-[40px] bg-cyan-600 cursor-pointer rounded-[20px]" onClick={() => OpenProjectLinks('yonile')}>Visit Site</button>
                        </div>
                        <img className="mt-[30px] w-[100%]" src={YONILE} />
                    </div>

                    <div className="card-one-o-1  transition-all overflow-hidden cursor-pointer duration-500 pt-[40px] mt-[40px] bg-linear-to-b from-[#0084ff] to-[#002fff02] w-[80%] text-[white] h-[auto] md:h-[750px] rounded-[10px]">
                        <h1 className="font-bold text-[25px] flex justify-center items-center"><SiMaterialformkdocs />&nbsp; MK Cleaning Service</h1>
                        <div className="absolute-part ">
                            <button className="w-[200px] h-[40px] bg-cyan-600 cursor-pointer rounded-[20px]" onClick={() => OpenProjectLinks('mk-clean')}>Visit Site</button>
                        </div>
                        <img className="mt-[30px] w-[100%]" src={MK} />
                    </div>
                    <div className="card-one-o-1  transition-all overflow-hidden cursor-pointer duration-500 pt-[40px] mt-[40px] bg-linear-to-b from-[#0084ff] to-[#002fff02] w-[80%] text-[white] h-[auto] md:h-[750px] rounded-[10px]">
                        <h1 className="font-bold text-[25px] flex justify-center items-center"><TbIrregularPolyhedron />&nbsp; E-commerce </h1>
                        <div className="absolute-part ">
                            <button className="w-[200px] h-[40px] bg-cyan-600 cursor-pointer rounded-[20px]" onClick={() => OpenProjectLinks('e-com')}>Visit Site</button>
                        </div>
                        <img className="mt-[30px] w-[100%]" src={E_KIDAME} />
                    </div>
                </center>


            </div>

        </div>
    </>)
}
export default Projects