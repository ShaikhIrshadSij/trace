import { Navigate, Route, Routes } from "react-router-dom"
import AuthLayout from "../components/auth/AuthLayout"
import SignIn from "../pages/auth/signIn"
import ForgotUserId from "../pages/auth/forgotUserId"
import ForgotPassword from "../pages/auth/forgotPassword"
import DashboardLayout from "../components/dashboard/DashboardLayout"
import CompanyProfile from "../pages/dashboard/companyProfile"
import Dashboard from "../pages/dashboard"

const Navigations = () => {
  return (
    <Routes>
      {/* AUTH ROUTES */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forgot-userid" element={<ForgotUserId />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* DASHBOARD ROUTES */}
      <Route path="/" element={<DashboardLayout />}>
      <Route index element={<Navigate to="dashboard" replace />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="company-profile" element={<CompanyProfile />} />
      </Route>
      {/* catch-all route to redirect to "/" */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default Navigations
