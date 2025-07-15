import CaptainLogin from "../Pages/CaptainLogin";
import CaptainSignUp from "../Pages/CaptainSignUp";

const captain_router_links =[
    {
        path:'/captain-login',
        element:<CaptainLogin />
    },
    {
        path:'/captain-signup',
        element:<CaptainSignUp />
    },
];
export default captain_router_links;