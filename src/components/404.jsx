import foro from '../assets/404.svg'
function ForOfor() {
    return (<>
        <div className="flex w-full h-screen justify-center items-center">
            <div className="content-setion">
                <center>
                    <h1 className="text-center font-bold text-[100px]">404</h1>
                    <h2 className="text-[30px]">Page Not Found</h2>
                    <img src={foro} className='w-[500px]' />
                    <a href="/">Back To Home</a>
                </center>
            </div>
        </div>
    </>)
}

export default ForOfor

//yohanes-folio.vercel.app