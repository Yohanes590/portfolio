import udacity from '../assets/Udacity.png'
function Certified() {
    return (<>
        <div className="cer-center mt-[100px] md:mt-[0px] h-auto mb-[50px] md:h-screen w-full flex items-center justify-evenly flex-wrap ">
            <div className="cer-part">
                <img src={udacity} className='w-[500px] skew-x-[-2deg]' />
            </div>
            <div className="cer-disc w-[700px]">
                <h1 className='text-[35px] mt-[50px] md:mt-[0px] '>Udacity-Certified in Programming Fundamentals </h1>
                <hr className='mt-[10px] w-[60%] border-2 border-blue-400' /><br />
                <p>

                    I’ve successfully completed Udacity’s Fundamentals
                    of Programming course, solidifying my grasp of core
                    programming concepts. This training equipped me with
                    essential skills in algorithmic problem-solving, control
                    structures, data type management, and debugging—foundational
                    knowledge that informs my approach to writing clean,
                    logical code. The course reinforced my ability to break
                    down complex problems into efficient solutions, a skill I
                    apply daily in my development work.
                </p>
                <div className="buttons mt-[20px] flex flex-wrap">
                    <button className='w-[100%] md:w-[200px] h-[40px] bg-blue-600 cursor-pointer rounded-[10px] ' onClick={() => window.location.href = "/certeficate.pdf"}>View</button>
                    <button className='w-[100%] md:w-[200px] h-[40px] bg-blue-600 cursor-pointer rounded-[10px] ml-0 mt-[10px] md:mt-0 md:ml-[20px]'>
                        <a href='/certeficate.pdf' download >Download certeficate</a>
                    </button>
                </div>
            </div>
        </div>
    </>)
}

export default Certified