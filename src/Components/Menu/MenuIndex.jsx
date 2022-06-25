import React from 'react'
import { Link } from 'react-router-dom'
import "./inde.scss"
function inde() {
  return (
    <div className='menu'>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        {/* <li><Link to="/Home">Other ▾</Link>
        <ul class="dropdown">
                <li><Link to="/Home/Other/List">All lists</Link></li>
                <li><Link to="/Home/Other/Create">create</Link></li>
                <li><Link to="/Home/Other/Edit">Edit</Link></li>
                <li><Link to="/Home/Other/Navbar">navebar</Link></li>
                <li><Link to="/Home/Other/SignUp">SignUp</Link></li>
            </ul>
        </li> */}
        <li><Link to="">About us ▾</Link>
        <ul class="dropdown">
                <li><Link to="/Home/AboutAGTC/History">History</Link></li>
                <li><Link to="/Home/AboutAGTC/Message">Message from Dean</Link></li>
                <li><Link to="">Facts and Figures</Link></li>
                <li><Link to="">Ranking</Link></li>
            </ul>
        </li>
        <li>
            <Link to="">acadamics ▾</Link>
            <ul class="dropdown">
                <li><Link to="/signips">database administrator level 4</Link></li>
                <li><Link to="/signups">accounting and budgting level(IV)</Link></li>
                <li><Link to="">cadaster surveying level(IV)</Link></li>
                <li><Link to="">automotive technology level(IV)</Link></li>
                <li><Link to="">nursing level(IV)</Link></li>
                <li><Link to="">pharmacy level(IV)</Link></li>
            </ul>
        </li>
        <li><Link to="/Home/Administration">administration</Link></li>
        <li>
            <Link to="">admissions ▾</Link>
            <ul class="dropdown">
                <li><Link to="">Degree Seeking Students</Link></li>
                <li><Link to="">Diploma Seeking Students</Link></li>
                <li><Link to="">Short Term Training Seekers</Link></li>
            </ul>
        </li>
        <li>
        <Link to="">future ▾</Link>
            <ul class="dropdown">
                <li><Link to="">Office Research and Development</Link></li>
                <li><Link to="">Research Center</Link></li>
                <li><Link to="">Research Center</Link></li>
            </ul>
        </li>
        <li>
        <Link to="">Mission and vision ▾</Link>
            <ul class="dropdown">
                <li><Link to="">mission</Link></li>
                <li><Link to="">vision</Link></li>
            </ul>
        </li>
        
        <li><Link to="">Contact</Link></li>
    </ul>
    </div>
  )
}

export default inde


