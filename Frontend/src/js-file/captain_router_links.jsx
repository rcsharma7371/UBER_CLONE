import CaptainForgotPassword from "../Pages/Captain/CaptainForgotPassword";
import CaptainLogin from "../Pages/Captain/CaptainLogin";
import CaptainNewPassword from "../Pages/Captain/CaptainNewPassword";
import CaptainSignUp from "../Pages/Captain/CaptainSignUp";
import CaptainVerifyOtp from "../Pages/Captain/CaptainVerifyOtp";

const captain_router_links =[
    {
        path:'/captain-login',
        element:<CaptainLogin />
    },
    {
        path:'/captain-signup',
        element:<CaptainSignUp />
    },
    {
        path:'/captain-forgot-password',
        element:<CaptainForgotPassword />
    },
    {
        path:'/captain-verify-otp',
        element:<CaptainVerifyOtp />
    },
    {
        path:'/captain-new-password',
        element:<CaptainNewPassword />
    },
    {
        path:'/captain-signup',
        element:<CaptainSignUp />
    },
    {
        path:'/captain-signup',
        element:<CaptainSignUp />
    },
];
export default captain_router_links;