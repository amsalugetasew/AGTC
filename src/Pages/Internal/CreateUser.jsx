import React from 'react'
import TopMenu from '../../Components/TopMenu/TopMenu'
import MainTop from './MainTop'
import MainMenu from './menu'
function CreateUser() {
  return (
    <div className='MainContainer'>
    <div className="maintop">
                {/* <MainTop /> */}
                <TopMenu />
            </div>
            <div className="MainMenu">
                <MainMenu />
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-md-3">
                    <div>Assign Role</div>
                    </div>
                    <div className="col-md-6 main">
                    </div>
                </div>
            </div>
    
    </div>

  )
}

export default CreateUser