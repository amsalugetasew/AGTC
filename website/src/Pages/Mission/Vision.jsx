import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import TopMenu from '../../Components/TopMenu/TopMenu'
import MenuIndex from '../../Components/Menu/MenuIndex'
import "./style.scss"
import Image from '../../Components/Image/Image'
function Vision() {
  return (
    <div>
        <div className="topmenu">
        <TopMenu/>
      </div>
      <div className="homeContainer">
        <Navbar/>
      </div>
      <div className="menuContainer">
        <MenuIndex/>
      </div>
      <div className="image">
        <Image/>
      </div>
      <div className='mainContent'>
      <div className="content"> 
       <p>
       ሰልጣኞች በልዩ ልዩ  የሙያ ደረጃዎች በማሰልጠንና በብቃት በዓለም አቀፍ ገቢያ ሙያተኛ የሚሆኑ፣የግል ሀብት ያፈሩ ሙያተኞች ሆነዉ ማየት 
        </p>
       </div>
      </div>
      <div className="bottom2">
        <Footer/>
      </div>
    </div>
  )
}

export default Vision