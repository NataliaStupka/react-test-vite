import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

//огорнемо PrivateRoute <Tasks />
//redirectTo - по замовчуванню буде /login
const PrivateRoute = ({ children, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  //якщо user зареєстрований(true) то поверну йому children, інакше відправлю на login
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
