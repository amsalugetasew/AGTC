import Footer from '../../Components/Footer/Footer'
import TopMenu from '../../Components/TopMenu/TopMenu'
import MainTop from './MainTop'
import MainMenu from './menu'
function Main() {
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
                    </div>
                    <div className="col-md-6 main">
                    </div>
                </div>
            </div>
            <div className="bottom2">
                <Footer />
            </div>
            <div className="footer3">Copyright &copy; 2022 Addiss Gafat Technology College</div>
        </div>
    )
}

export default Main