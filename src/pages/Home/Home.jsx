import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'

export default function Home() {
  return (
    <div className="home"> 
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="hero banner" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="caption" className='caption-img'/>
          <p>
            Discovering his ties to a secret ancient order, a young man living in a modern
            Istanbul embarks on a quest to save the city from an immortal enemy.
            <div className="hero-btns">
              <button className='btn'>
                <img src={play_icon} alt="play icon"/>
                <span>Play</span>
              </button>
              <button className='btn dark-btn'>
                <img src={info_icon} alt="info icon"/>
                More Info
              </button>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}
