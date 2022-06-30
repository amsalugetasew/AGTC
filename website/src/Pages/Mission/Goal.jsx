import React from 'react'
import "./style.scss"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Image from '../../Components/Image/Image'
import MenuIndex from '../../Components/Menu/MenuIndex'
import TopMenu from '../../Components/TopMenu/TopMenu'
function Goal() {
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
       ጥራት እና ብቃት ያለዉ ትምህርት ለሁሉም ህብረተሰብ ክፍል ማድረስ
        </p>
       </div>
      </div>
      <div className="bottom2">
        <Footer/>
      </div>
    </div>
  )
}

export default Goal