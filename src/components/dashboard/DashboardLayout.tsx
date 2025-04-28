import { Link, Outlet } from 'react-router-dom';
import '../../styles/dashboard/dashboard-layout.css';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import { useNavigationStore } from '../../libs/store/navigationStore';

interface SidebarItems {
    icon: string;
    label: string;
    href: string;
}

interface DropdownItems {
    label: string;
    href: string;
}

const DashboardLayout = () => {
    const { title, status, breadcrumb, isBackButtonVisible } = useNavigationStore();
    const dropDownRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    useClickOutside(dropDownRef, () => setIsDropdownOpen(false))

    const sidebarItems: SidebarItems[] = [
        { icon: '/images/sea.svg', label: '', href: '/dashboard' },
        { icon: '/images/dashboard.svg', label: 'Dashboard', href: '/dashboard' },
        { icon: '/images/subscription.svg', label: 'Subscription', href: '/dashboard' },
        { icon: '/images/user.svg', label: 'User', href: '/dashboard' },
        { icon: '/images/report.svg', label: 'Report', href: '/dashboard' },
        { icon: '/images/matrix.svg', label: 'Matrix', href: '/dashboard' },
        { icon: '/images/export-import.svg', label: 'Export-Import', href: '/dashboard' },
        { icon: '/images/token-management.svg', label: 'Token-Management', href: '/dashboard' },
        { icon: '/images/help.svg', label: 'Help', href: '/dashboard' },
    ]

    const dropdownItems: DropdownItems[] = [
        { label: 'Company Profile', href: '/company-profile' },
        { label: 'Role & User Master', href: '' },
        { label: 'Shore Online', href: '' },
        { label: 'Subscription History', href: '' },
        { label: 'Help Centre', href: '' },
        { label: 'Settings', href: '' },
        { label: 'Logout', href: '' },
    ]

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <div className="dashboard-layout d-flex">
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
                    <Link key={index} to={item.href} className={`sidebar-icon d-flex-center ${item.label === 'Dashboard' ? 'active' : ''}`}>
                        <img src={item.icon} alt={item.label} className="icon" />
                    </Link>
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
                        <div>
                            <div className='d-flex-row'>
                                {
                                    isBackButtonVisible && (
                                        <span className="back-arrow desktop-only"><i className="fa-solid fa-arrow-left"></i></span>
                                    )
                                }
                                <div className='header-title-container d-flex'>
                                    <span className="header-title text-black fw-500">{title}</span>
                                    {
                                        status && (
                                            <div className="route-status">
                                                <span className='status-circle'></span>
                                                <span>{status}</span>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="breadcrumb d-flex-row">
                                {breadcrumb?.map((item, index) => (
                                    <span key={index} className="breadcrumb-item">{item}</span>
                                ))}
                            </div>
                        </div>
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
                                        <Link key={index} to={item.href} className="dropdown-item">{item.label}</Link>
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
