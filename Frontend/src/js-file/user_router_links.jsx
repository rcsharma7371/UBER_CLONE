import ForgotPassword from "../Pages/ForgotPassword";
import Home from "../Pages/Home";
import NewPassword from "../Pages/NewPassword";
import RegistrationDone from "../Pages/RegistrationDone";
import SignupProfile from "../Pages/SignupProfile";
import SplashScreen from "../Pages/splashScreen";
import UserLogin from "../Pages/UserLogin";
import UserSignUp from "../Pages/UserSignUp";
import VerifyOtp from "../Pages/VerifyOtp";

const user_router_links = [
  {
    path: "/",
    element: <SplashScreen />,
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
