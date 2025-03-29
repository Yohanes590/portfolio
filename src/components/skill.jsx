import { FaServer } from 'react-icons/fa';
import { SiMongodb } from "react-icons/si";
function Skill() {
    return (<>

        <div className="skill-section h-screen w-full flex justify-evenly items-center flex-wrap">
            <div className="progrees_card_section mt-[30px]">
                <div className="index-of-pro">
                    <h1>HTML / HTML5</h1>
                    <progress class="progress h-[15px] w-[220px] md:w-[400px] progress-accent mt-[15px]" value="97" max="100"></progress>
                </div>
                <div className="index-of-pro">
                    <h1>CSS / CSS3</h1>
                    <progress class="progress h-[15px] w-[220px] md:w-[400px] progress-info  mt-[15px]" value="90" max="100"></progress>
                </div>
                <div className="index-of-pro">
                    <h1>Java Script</h1>
                    <progress class="progress h-[15px] w-[220px] md:w-[400px] progress-warning  mt-[15px]" value="77" max="100"></progress>
                </div>
                <div className="index-of-pro">
                    <h1>React Vite</h1>
                    <progress class="progress h-[15px] w-[220px] md:w-[400px] progress-secondary  mt-[15px]" value="70" max="100"></progress>
                </div>
                <div className="index-of-pro">
                    <h1>Tailwind CSS</h1>
                    <progress class="progress h-[15px] w-[220px] md:w-[400px]  mt-[15px]" value="88" max="100"></progress>
                </div>
            </div>
            <div className="card-section flex flex-wrap justify-evenly">
                <div className="card w-[90%] md:w-[400px] md:mt-[0px] mt-[20px] border-l-[8px] border-l-cyan-400 h-[500px] bg-[#1915ff15] pl-[40px] pt-[50px] pr-[40px]">
                    <h1 className="text-[30px] font-bold flex items-center">PROJECTS
                        <span className='ml-[10px] bg-[#002fff3a] text-[#00f7ff] w-[50px] h-[50px] flex justify-center items-center rounded-[50%]'><FaServer /></span>
                    </h1>
                    <p className="mt-[10px]">I’ve built over four production-ready applications
                        with the MERN stack, each solving unique real-world
                        problems. From a fast-paced e-commerce platform
                        handling live transactions to a sleek video
                        streaming service with intuitive UX, a
                        productivity-focused task management app,
                        and high-performance landing pages—I thrive
                        on turning ideas into functional, user-centric
                        software. My approach blends clean code, scalable
                        architecture, and a focus on delivering tangible value,
                        for businesses or end-users.</p>
                </div>
                <div className="card md:w-[450px] ml-[0px] md:mt-[0px] mt-[40px] border-l-[8px] border-l-cyan-600 md:ml-[30px] w-[90%] h-[500px] bg-[#1915ff3f] pl-[40px] pt-[50px] pr-[40px]">
                    <h1 className="text-[30px] font-bold flex items-center">Technical Expertise
                        <span className='ml-[10px] bg-[#002fff3a] text-[#00f7ff] w-[50px] h-[50px] flex justify-center items-center rounded-[50%]'><SiMongodb /></span>
                    </h1>
                    <p className="mt-[10px]">
                        I build secure MERN applications using JWT authentication, including a
                        streaming platform for 1,000+ users that reduced unauthorized access by 95%.
                        My e-commerce solutions implement stateless token sessions for 24/7 transactions
                        without security compromises. Specializing in full-stack architecture, I optimize
                        React-MongoDB systems with secure REST APIs, token rotation, and HTTP-only cookies.
                        This approach delivers both protection and performance for streaming services,
                        marketplaces, and SaaS products.
                    </p>
                </div>
            </div>
        </div>
    </>)
}
export default Skill