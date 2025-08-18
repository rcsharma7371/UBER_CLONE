import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useApi from "../../../useApi";
import { loginUser } from "../../api/authApi";

const UserLogin = () => {
  const [hide, setHide] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  // useApi hook
  const { data, loading, error, refetch } = useApi(loginUser, { immediate: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await refetch(formData); // trigger login
  };

  // ✅ Handle login success/failure in useEffect
  useEffect(() => {
    if (data?.success === true) {
      localStorage.setItem("token", data.token); // store token
      console.log("✅ Login successful:", data.user);
      navigate("/home"); // redirect
    } else if (data?.success === false) {
      console.log("❌ Login failed:", data.message || "Invalid credentials");
    }
  }, [data, navigate]);

  return (
    <div className="bg-[#1A1A1A] min-h-[100dvh] flex flex-col p-5">
      {/* Back Arrow */}
      <div className="text-lg text-white flex justify-start w-full">
        <Link to="/home">
          <i className="fa-solid fa-arrow-left-long top-5"></i>
        </Link>
      </div>

      {/* Form */}
      <div className="flex flex-col w-full p-3 flex-grow">
        <form className="flex flex-col w-full relative" onSubmit={handleSubmit}>
          <h3 className="mb-2 semi-bold text-lg text-white">What's your email</h3>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="mb-4 bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <h3 className="mb-2 semi-bold text-lg text-white">Enter Password</h3>
          <input
            type={!hide ? "password" : "text"}
            placeholder="Password"
            className="mb-4 bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />

          {/* Eye toggle */}
          {hide ? (
            <i
              className="fa-solid fa-eye-slash text-white absolute top-[112px] right-[20px]"
              onClick={() => setHide(!hide)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-eye text-white absolute top-[112px] right-[20px]"
              onClick={() => setHide(!hide)}
            ></i>
          )}

          {/* Forgot Password */}
          <div className="w-full text-right mb-4">
            <Link to="/forgot-password" className="text-white underline">
              forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="rounded-lg px-4 py-2 mb-2 bg-[#000000] text-white"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {data?.success === false && (
            <p className="text-red-500 text-sm mt-2">
              {data.message || "Login failed. Please try again."}
            </p>
          )}

          {/* Sign Up Link */}
          <div>
            <p className="text-white text-sm">
              Don't have an account?{" "}
              <Link to="/user-signup" className="text-blue-500 underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* Bottom Button */}
      <div className="w-full p-3">
        <Link
          to="/captain-login"
          className="rounded-lg px-4 py-2 mb-2 bg-[#000000] text-center text-white w-full block"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
