import './SideNav.scss'
import MenuItems from '../components/MenuItems'
import DirectMessage from '../components/DirectMessage'
import SideProfile from '../components/SideProfile'
function SideNav() {
    return (
        <div className='sidenav'>
            <div className="sidenav-btn">
            <div className="SideProfile">
             <SideProfile />
             </div>           
              </div>
            <div className="sidenav-menu">
                <MenuItems />
            </div>
            <div className="sidenav-sms">
                <DirectMessage />
            </div>
        </div>
    )
}

export default SideNav