import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLogin, children }) {
  if (!isLogin) {
    return <Navigate to='/' replace />
  }
  return children
}

export default ProtectedRoute;