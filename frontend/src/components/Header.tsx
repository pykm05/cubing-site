import AccountCircle from '../assets/account_circle_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import NotificationsActive from '../assets/notifications_active_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'

function Header() {
  return (
    <div className="flex justify-end items-center h-16 pr-5 bg-white">
        <div className="flex justify-end items-center gap-6">
            <img src={NotificationsActive} alt="notification icon" className="h-7 w-auto" />
            <div className="flex justify-center items-center gap-3">
                <img src={AccountCircle} alt="profile picture" className="h-12 w-auto" />
                <div>Aaron Pang</div>
            </div>
        </div>
    </div>
  )
}

export default Header