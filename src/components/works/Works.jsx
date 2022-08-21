import { useState } from "react"
import "./works.scss"


export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: "./assets/mobile.png",
      title: "Baby Cry Recording App",
      desc: "This app was created in the scope of my master thesis, Automatic Recognition of Baby Cry. The thesis consisted in extracting acoustic information from baby cry audios using the Librosa library from python and using pattern recognition and machine learning techniques to create an automatic baby cry classifier that was capable of discerning cries of hunger from cries of pain. Additionally, the android application displayed was created to record and store baby cry audios, with the intent of producing a labeled database for further studies.",
      img: "./assets/thirdversion.png"
    },
    {
      id: 2,
      icon: "./assets/mobile.png",
      title: "Music Rating App",
      desc: "Group project that introduced me to android software development, which consisted of a music reviewing app, where users could leave written reviews, having the additional option of linking a Spotify account and listening to the songs. I consider this project important due to both the hard skills and soft skills acquired during its development, since it helped me understand how to create a mobile application using Java and XML and how to create and manage a database using MySQL and Firebase, as well as how to work as a team following an agile development methodology.",
      img: "assets/revappImg.png"
    },
  ];

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 1) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide+1 : 0)
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => ( 
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>University Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>))}
      </div>
      
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")}/>
    </div>
  )
}
