import './Main.scss'
import SideNav from './SideNav'
import MainContent from './MainContent'

function Main() {
    return (
        <div className='main'>
           <div className="side-nav">
           <SideNav />
           </div>
           <div className="main-content">
           <MainContent />
           </div>
        </div>
    )
}

export default Main