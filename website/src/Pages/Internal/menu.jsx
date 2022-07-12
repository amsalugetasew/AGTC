import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"
import profile from "../../Image/image0.jpg"
export default function menu() {
  return (
    <div>
         <ul>
        {/* <li><Link to="/Home">Account</Link></li> */}
        <li><Link to="/Login/Internal/Main/PostNews">Post News</Link></li>
        <li><Link to="/Login/Internal/Main/RemoveNews">Remove News</Link></li>
        <li><Link to="">Account ▾</Link>
        <ul class="dropdown">
                <li><Link to="/Login/Internal/Main/Account/list">All lists</Link></li>
                <li><Link to="/Login/Internal/Main/Account/Create">Assign Role</Link></li>
                {/* <li><Link to="/Login/Internal/Main/Account/Activate">Activate</Link></li> */}
                <li><Link to="/Login/Internal/Main/Account/ChangePassword">Change Password</Link></li>
                {/* <li><img src={profile} alt="profile" /> </li> */}
                {/* {/* <li><Link to="/Home/Other/List">Change Password</Link></li */}
                {/* <li><Link to="/Home/Other/ts">test</Link></li>  */}
            </ul>
        </li>
        <li className='logout'><Link to="/Signips">Logout</Link></li>
        <li><img src={profile} className="imges" alt="profile" /> </li>
        </ul>
    </div>
  )
}
