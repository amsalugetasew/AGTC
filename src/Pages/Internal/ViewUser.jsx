import React from 'react'
import TopMenu from '../../Components/TopMenu/TopMenu'
import MainTop from './MainTop'
import MainMenu from './menu'
function ViewUser() {
  return (
    <div className='MainContainer'>
    <div className="maintop">
    <TopMenu />
                {/* <MainTop /> */}
            </div>
            <div className="MainMenu">
                <MainMenu />
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-md-3">
                    <div>View User</div>
                    </div>
                    <div className="col-md-6 main">
                    </div>
                </div>
            </div>
    
    </div>
  )
}

export default ViewUser