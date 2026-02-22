import "./Header.css"
import HeaderGirlImg from "../../assets/Header/wave-image.png"
import sliderBg from "../../assets/Header/slider-bg.jpg"
const MainContainer = () => {
    return (
        <>
            <div id="mainContainer" style={{ backgroundImage: `url(${sliderBg})`, backgroundRepeat: "no-repeat" }}>
                <div className="container">

                    <div id="greetings-container"></div>
                    <section id="top-hello-section">
                        <p>Welcome to my portfolio<span><i className="fa-solid fa-heart"></i></span></p>
                    </section>
                    {/* <!-- <div className="top-name">
                        <span>made with love</span>
                        <span>by</span>
                        <p>sarita</p>
                    </div> --> */}
                </div>
                <div className="plane"></div>
                <div className="imageContainer">
                    <img src={HeaderGirlImg} alt="girls-header-image" />
                </div>
            </div>
        </>
    )
}

export default MainContainer