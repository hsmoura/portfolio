import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Thesis</li>
        <li>University project</li>
      </ul>
      <div className="container">
        <div className="left">
          <h2>Baby Cry Recorder App</h2>
          <h3>This app was created in the scope of my master thesis, Automatic Recognition of Baby Cry. The thesis consisted in extracting acoustic information from baby cry audios using the Librosa library from python and using pattern recognition and machine learning techniques to create an automatic baby cry classifier that was capable of discerning cries of hunger from cries of pain. Additionally, the android application displayed was created to record and store baby cry audios, with the intent of producing a labeled database for further studies. </h3>
        </div>
        <div className="right">
          <img src="assets/thirdversion.png" alt="" />
        </div>
        
      </div>
    </div>
  )
}
