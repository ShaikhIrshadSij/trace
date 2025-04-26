import { useNavigate } from "react-router-dom"

const SignIn = () => {
  const navigate = useNavigate()


  const handleForgotUserId = () => {
    navigate("/auth/forgot-userid")
  }

  const handleForgotPassword = () => {
    navigate("/auth/forgot-password")
  }
  return (
    <div className="form-section">
      <p className="form-title">Login</p>
      <p className="form-subtitle fw-500 ml-10">Please enter your details</p>
      <div className="form-group">
        <input type="text" className="form-input" placeholder="Enter user id" />
      </div>
      <span className="forgot-link ml-10" onClick={handleForgotUserId}>
        Forgot UserID
      </span>
      <div className="form-group">
        <input type="password" className="form-input" placeholder="Password" />
      </div>
      <span className="forgot-link ml-10" onClick={handleForgotPassword}>
        Forgot password
      </span>
      <div className="d-flex-space-between">
        <div className="remember-me ml-10">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="fw-500">Remember me</label>
        </div>
        <button className="submit-btn">
          <i className="fa-solid fa-arrow-right"></i>
        </button>

      </div>
    </div>
  )
}

export default SignIn
