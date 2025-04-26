import { useNavigate } from "react-router-dom"

const ForgotUserId = () => {
    const navigate = useNavigate()

    const handleNo = () => {
      navigate("/auth/sign-in")
    }
  
    const handleYes = () => {
      navigate("/auth/sign-in")
    }

  return (
    <div className="forgot-container">
      <p className="form-title">Forgot User ID</p>
      <p className="forgot-message">Are you sure you want to raise a request for forgotten User ID to KARCO server?</p>
      <div className="action-buttons">
        <button className="action-btn" onClick={handleNo}>
          No
        </button>
        <button className="action-btn" onClick={handleYes}>
          Yes
        </button>
      </div>
    </div>
  )
}

export default ForgotUserId
