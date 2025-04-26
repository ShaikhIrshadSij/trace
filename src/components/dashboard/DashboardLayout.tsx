import { Outlet } from 'react-router-dom';
import '../../styles/dashboard/dashboard.css';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

interface SidebarItems {
    icon: string;
    label: string;
}

interface DropdownItems {
    label: string;
}

const DashboardLayout = () => {
    const dropDownRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    useClickOutside(dropDownRef, () => setIsDropdownOpen(false))

    const sidebarItems: SidebarItems[] = [
        { icon: '/images/sea.svg', label: '' },
        { icon: '/images/dashboard.svg', label: 'Dashboard' },
        { icon: '/images/subscription.svg', label: 'Subscription' },
        { icon: '/images/user.svg', label: 'User' },
        { icon: '/images/report.svg', label: 'Report' },
        { icon: '/images/matrix.svg', label: 'Matrix' },
        { icon: '/images/export-import.svg', label: 'Export-Import' },
        { icon: '/images/token-management.svg', label: 'Token-Management' },
        { icon: '/images/help.svg', label: 'Help' },
    ]

    const dropdownItems: DropdownItems[] = [
        { label: 'Company Profile' },
        { label: 'Role & User Master' },
        { label: 'Shore Online' },
        { label: 'Subscription History' },
        { label: 'Help Centre' },
        { label: 'Settings' },
        { label: 'Logout' },
    ]

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <div className="dashboard d-flex">
            {/* Left Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <div className="sidebar-header mobile-only">
                    <button className="close-sidebar" onClick={toggleSidebar}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="search-container mobile-only">
                    <input type="text" placeholder="Search" className="search-input" />
                    <button className="search-button"><i className="fa-solid fa-search"></i></button>
                </div>
                {sidebarItems.slice(0, -1).map((item, index) => (
                    <div key={index} className={`sidebar-icon d-flex-center ${item.label === 'Dashboard' ? 'active' : ''}`}>
                        <img src={item.icon} alt={item.label} className="icon" />
                    </div>
                ))}
                <div className="sidebar-help d-flex-column">
                    <img src={sidebarItems[sidebarItems.length - 1].icon} alt="Help" className="icon" />
                </div>
            </div>

            {/* Mobile Overlay */}
            {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

            <div className="main-content">
                {/* Header */}
                <div className="header d-flex-space-between">
                    <div className="header-left d-flex-row">
                        <button className="hamburger-menu" onClick={toggleSidebar}>
                            <span className="hamburger-icon"><i className="fa-solid fa-bars"></i></span>
                        </button>
                        <span className="back-arrow desktop-only"><i className="fa-solid fa-arrow-left"></i></span>
                        <span className="header-title text-black fw-500">Company Profile</span>
                    </div>
                    <div className="desktop-search-container desktop-only">
                        <input type="text" placeholder="Search" className="search-input" />
                        <button className="search-button"><i className="fa-solid fa-search"></i></button>
                    </div>
                    <div className="header-right" ref={dropDownRef}>
                        <div className="notification-icon"><img src="/images/notification.svg" alt="notification" /></div>
                        <div className="user-profile" onClick={toggleDropdown}>
                            <div className="user-avatar"><img src="/images/user-white.svg" alt="user-white" /></div>
                            <div className="hr-line"></div>
                            <span className="dropdown-arrow"><img src="/images/down-arrow.svg" alt="user-white" /></span>
                        </div>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="dropdown-menu" >
                                {
                                    dropdownItems.map((item, index) => (
                                        <div key={index} className="dropdown-item">{item.label}</div>
                                    ))
                                }
                            </div>
                        )}
                    </div>
                </div>
                <div className='inner-container'>
                    <Outlet />
                </div>
                {/* Footer */}
                <div className="footer">
                    <div className="powered-by fw-700 text-italic">
                        <span className='text-black'>powered by</span>
                        <img src="/images/karco-icon.svg" alt="Karco Logo" className='karco-logo' />
                        <img src="/images/karco-text.svg" alt="Karco Text" className='karco-text' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
