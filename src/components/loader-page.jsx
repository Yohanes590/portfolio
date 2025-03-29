import './loader-anime.css'
function Loader() {
    const loader_anime = () => {
        setTimeout(() => {
            const loaderElement = document.querySelector(".loader-part")
            loaderElement.style.display = "none"
        }, 5000);
    }
    loader_anime()
    return (<>
        <div className="loader-part fixed w-[100%] h-[100%] z-50 bg-[#000000] flex justify-center items-center">
            <div className="box-anime">
                <div id="page">
                    <div id="container">
                        <div id="ring"></div>
                        <div id="ring"></div>
                        <div id="ring"></div>
                        <div id="ring"></div>
                        <div id="h3">Jo Portfolio</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Loader