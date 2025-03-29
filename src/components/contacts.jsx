import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt, FaGithub, FaInstagramSquare, FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function ContactPart() {
    const OpenLinks = (linkType) => {
        if (linkType == 'github') {
            window.open('https://github.com/yohanes590/')
        } else if (linkType == 'telegram') {
            window.open('https://t.me/Mrx_Man21')
        } else if (linkType == 'instagram') {
            window.open('https://instagram.com/mrx_man21')
        } else if (linkType == 'linkedin') {
            window.open('https://linkedin.com/in/yohanes-mulugeta-12010532b/')
        }
    }
    return (<>

        <div className="h-screen w-full mt-[100px] flex justify-evenly items-center flex-wrap ">
            <div className="contact-input w-[full]">
                <div>
                    <center>
                        <p className="border-1 text-[12px] h-[30px] flex justify-center items-center text-cyan-400 rounded-[20px] border-cyan-400 w-[100px]">Let's Contact</p>
                    </center>
                    <h1 className="text-center mt-[20px] text-[30px] font-bold">Get In <span className="text-cyan-400">Touch</span></h1>
                    <p className="text-center">Leave here your message</p>
                </div>
                <div className="label-part mt-[70px]">
                    <div class="input-section ">
                        <p>Full Name *</p>
                        <input type="text" className="outline-none mt-[10px] w-[550px] h-[50px] rounded-[7px] bg-[#0051ff4f] pl-[20px]" placeholder="Joe Doe" />
                        <p className="mt-[20px]">Email Address *</p>
                        <input type="text" className="outline-none mt-[10px] w-[550px] h-[50px] rounded-[7px] bg-[#0051ff4f] pl-[20px]" placeholder="example@gmail.com" />
                        <p className="mt-[20px]">Subject *</p>
                        <input type="text" className="outline-none mt-[10px] w-[550px] h-[50px] rounded-[7px] bg-[#0051ff4f] pl-[20px]" placeholder="Main Title" />
                        <p className="mt-[20px]">Explanation *</p>
                        <textarea className="outline-none mt-[10px] w-[550px] h-[250px] rounded-[7px] bg-[#0051ff4f] pl-[20px] pt-[20px]" placeholder="Explain About Your Idea" /><br />
                        <button className="mt-[10px] w-[550px] h-[40px] bg-blue-600 cursor-pointer rounded-[10px]">Send</button>
                    </div>
                </div>
            </div>
            <div className="social-platform">
                <h1 className="text-[25px]">Social Platform's</h1>
                <p>Contact Information</p>
                <hr className="mt-[10px] w-[40%] border-cyan-400 border-3" />
                <div className="icon-label mt-[20px]">

                    <div className="two-by-one flex flex-wrap ">
                        <div className="context w-[350px] cursor-pointer flex  items-center mt-[20px]">
                            <div className="icon-image w-[55px] h-[55px] flex justify-center items-center bg-[#1651aa5d] rounded-[50%] text-cyan-500"><MdEmail size={35} /></div>
                            <div className="icon-label-text ml-[15px] hover:text-[cyan]">jplussince34@gmail.com</div>
                        </div>
                        <div className="context w-[350px] cursor-pointer flex items-center mt-[20px] ml-[30px]">
                            <div className="icon-image w-[55px] h-[55px] flex justify-center items-center bg-[#1651aa5d] rounded-[50%] text-cyan-500"><FaPhoneSquareAlt size={35} /></div>
                            <div className="icon-label-text ml-[15px] hover:text-[cyan]">+251962579755</div>
                        </div>
                    </div>

                    <div className="two-by-one flex flex-wrap ">
                        <div className="context w-[350px] cursor-pointer flex items-center mt-[20px]">
                            <div className="icon-image w-[55px] h-[55px] flex justify-center items-center bg-[#1651aa5d] rounded-[50%] text-cyan-500"><FaGithub size={35} /></div>
                            <div className="icon-label-text ml-[15px] hover:text-[cyan]" onClick={() => OpenLinks('github')}>Git Hub</div>
                        </div>
                        <div className="context w-[350px] cursor-pointer ml-[30px] flex items-center mt-[20px]">
                            <div className="icon-image w-[55px] h-[55px] flex justify-center items-center bg-[#1651aa5d] rounded-[50%] text-cyan-500"><FaInstagramSquare size={35} /></div>
                            <div className="icon-label-text ml-[15px] hover:text-[cyan]" onClick={() => OpenLinks('instagram')}>Instagram</div>
                        </div>
                    </div>


                    <div className="two-by-one flex flex-wrap ">
                        <div className="context w-[350px] cursor-pointer flex items-center mt-[20px]">
                            <div className="icon-image w-[55px] h-[55px] flex justify-center items-center bg-[#1651aa5d] rounded-[50%] text-cyan-500"><FaTelegramPlane size={35} /></div>
                            <div className="icon-label-text ml-[15px] hover:text-[cyan]" onClick={() => OpenLinks('telegram')}>Telegram</div>
                        </div>
                        <div className="context w-[350px] cursor-pointer ml-[30px] flex items-center mt-[20px]">
                            <div className="icon-image w-[55px] h-[55px] flex justify-center items-center bg-[#1651aa5d] rounded-[50%] text-cyan-500"><FaLinkedinIn size={35} /></div>
                            <div className="icon-label-text ml-[15px] hover:text-[cyan]" onClick={() => OpenLinks('linkedin')}>Linked In</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default ContactPart