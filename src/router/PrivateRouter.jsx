import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import { toastWarnNotify } from "../helpers/ToastNotify";
import Loading from "../components/Loading";

const PrivateRouter = () => {
  const { currentUser, loading } = useAuthContext();

  if (loading) {
    return <div className="dark:bg-gray-dark-main parallax flex justify-center"><Loading/></div>; 
  }

  return currentUser ? <Outlet /> : (toastWarnNotify("Bu sayfayı görmek için giriş yapmanız gerekiyor!"), <Navigate replace to="/" />);
};

export default PrivateRouter;
