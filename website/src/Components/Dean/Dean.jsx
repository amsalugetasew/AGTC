import React from 'react'
import Footer from '../Footer/Footer';
import Image from '../Image/Image';
import MenuIndex from '../Menu/MenuIndex';
// import Navbar from '../Navbar/Navbar';
import TopMenu from '../TopMenu/TopMenu';
import "./Dean.scss";
import img1 from "../../Image/image0.jpg"
function Dean() {
  return (
    <div className='dean'>
         <div className="topmenu">
                <TopMenu />
            </div>
            {/* <div className="homeContainer">
                <Navbar />
            </div> */}
            <div className="menuContainer">
                <MenuIndex />
            </div>
            <div className="image">
                <Image />
            </div>
            <div className="content">
                <p className="p1">dean, aragaw</p>
                <div className='images'>
                    <img src={img1} alt="1" className="img1" />
                    <p className="img">dean, aragaw</p>
                </div>
            </div>
            <div className="bottom2">
                <Footer />
            </div>
            <div className="footer3">Copyright &copy; 2022 Addiss Gafat Technology College</div>
    </div>
  )
}

export default Dean