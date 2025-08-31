import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UserSignUp = () => {
  const navigator = useNavigate();

  const [userSignup, setUserSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(userSignup,'payload');
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        {
          fullname: {
            firstname: userSignup.firstName,
            lastname: userSignup.lastName,
          },
          email: userSignup.email,
          password: userSignup.password, // You might want to add a password field in the form
        }
      );
      console.log(response, "response");

      if (response?.data?.success === true) {
        navigator("/home");
        toast(response.data.message || "User created successfully", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#2d6124ff",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      
      toast(error?.response?.data?.error || "Signup failed", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#61242dff",
          color: "#fff",
        },
      });
    }
  };

  const handleChange = (e) => {
    setUserSignup({ ...userSignup, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#1A1A1A] min-h-[100dvh] flex flex-col p-5">
      <div className="text-lg text-white flex justify-start w-full">
        <Link to="/user-login">
          <i className="fa-solid fa-arrow-left-long top-5"></i>
        </Link>
      </div>
      <div className="flex flex-col w-full p-3 flex-grow text-white">
        <h3 className="text-m mb-4">What's your name?</h3>
        <form
          className="form flex flex-col gap-6 w-full flex-grow"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First"
              name="firstName"
              value={userSignup.firstName}
              onChange={handleChange}
              className="w-1/2 py-2 bg-transparent border-b-2 border-[#EDF6FF] placeholder:text-base focus:outline-none text-white"
              required
            />
            <input
              type="text"
              placeholder="Last"
              name="lastName"
              value={userSignup.lastName}
              onChange={handleChange}
              className="w-1/2 py-2 bg-transparent border-b-2 border-[#EDF6FF] placeholder:text-base focus:outline-none text-white"
              required
            />
          </div>
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            value={userSignup.email}
            onChange={handleChange}
            className="w-full py-2 bg-transparent border-b-2 border-[#EDF6FF] placeholder:text-base focus:outline-none text-white"
            required
          />
          <input
            type="password"
            placeholder="dDSdkf343#@!"
            name="password"
            value={userSignup.password}
            onChange={handleChange}
            className="w-full py-2 bg-transparent border-b-2 border-[#EDF6FF] placeholder:text-base focus:outline-none text-white"
            required
          />
          <button
            type="submit"
            className="rounded-lg px-4 py-2 mb-2 bg-[#000000] text-center text-white w-full font-semibold hover:bg-[#222] transition mt-4"
          >
            Next
          </button>
        </form>
        <p className="text-xs">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and terms of
          Services apply
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
