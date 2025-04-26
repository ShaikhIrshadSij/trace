import { Outlet } from 'react-router-dom';
import '../../styles/auth/auth.css';

const AuthLayout = () => {
    return (
        <div className="login-container d-flex-center">
            <div className="login-form-container d-flex-wrap">
                <div className="logo-section">
                    <div className="welcome-text text-primary fw-500">Welcome to</div>
                    <div className="trace-logo">
                        <img src="/images/trace-logo.svg" alt="Trace Logo" className="logo" />
                    </div>
                    <div className="powered-by fw-700 text-italic">
                        <span className='text-black'>powered by</span>
                        <img src="/images/karco-icon.svg" alt="Karco Logo" className='karco-logo' />
                        <img src="/images/karco-text.svg" alt="Karco Text" className='karco-text' />
                    </div>
                </div>
                <div className='auth-container bg-secondary'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
