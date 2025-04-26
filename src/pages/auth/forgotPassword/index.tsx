import { useNavigate } from "react-router-dom"

export default function ForgotPassword() {
  const navigate = useNavigate()

  const handleNo = () => {
    navigate("/auth/sign-in")
  }

  const handleYes = () => {
    // Handle the request submission logic here
    navigate("/auth/sign-in")
  }

  return (
    <div className="forgot-container">
      <p className="form-title">Forgot Password</p>
      <p className="forgot-message">Are you sure you want to raise a request for forgotten Password to KARCO server?</p>
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
