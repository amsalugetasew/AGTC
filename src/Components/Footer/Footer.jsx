import React from 'react'
import "./Footer.scss"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import img1 from "../../Image/GMW.jpg"
function Footer() {
  return (
    <>
    <div className='footer'>
        <div className="footer1">Address
        <div className="footer1">Gondar Addis Gafat Technology College</div>
        <div className="footer2">Address: kebele 16</div>
        <div className="footer2">Gondar City</div>
        <div className="footer2">Tel:+251582110481</div>
        <div className="footer2">Phone:+251940961646</div>
        </div>
        <div>
        <div className="footer1">Follow Us
            <div className="footer1">AGTC<FacebookRoundedIcon className='facebook'/> </div>
            <div className="footer2">Instagram</div>
            <div className="footer2">Linkdin</div>
            <div className="footer2">AGTC<TelegramIcon/></div>
        </div>
        </div>
        <div>
        <div className="footer1">AGTC Connected
        <div className="footer1"><img src={img1} alt="img1" className="img"/>GMW Digital Solution </div>
        <div className="footer2">HERCA</div>
        <div className="footer2">Developer Address
        <div className="footer7">Phone: +251928531589</div>
        <div className="footer7"> Email: amslugetasew12@gmail.com</div>
        </div>
        </div>
        </div>        
    </div>
     <div className="footer3">Copyright &copy; 2022 Addiss Gafat Technology College</div></>
  )
}

export default Footer