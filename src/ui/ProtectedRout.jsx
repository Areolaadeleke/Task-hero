import { Navigate } from "react-router-dom";

function ProtectedRout({ children }) {
  const session = localStorage.getItem("supabaseSession");
  if (!session) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRout;
