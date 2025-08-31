import Home from "../Pages/Common/Home";
import SplashScreen from "../Pages/Common/SplashScreen";
import Start from "../Pages/Common/Start";
import ForgotPassword from "../Pages/User/ForgotPassword";
import NewPassword from "../Pages/User/NewPassword";
import RegistrationDone from "../Pages/User/RegistrationDone";
import SignupProfile from "../Pages/User/SignupProfile";
import UserLogin from "../Pages/User/UserLogin";
import UserSignUp from "../Pages/User/UserSignUp";
import VerifyOtp from "../Pages/User/VerifyOtp";

const user_router_links = [
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/start",
    element: <Start />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/user-login",
    element: <UserLogin />,
  },
  {
    path: "/user-signup",
    element: <UserSignUp />,
  },
  {
    path: "/signup-profile",
    element: <SignupProfile />,
  },
  {
    path: "/registration-done",
    element: <RegistrationDone />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
];

export default user_router_links;
