import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const CaptainSignUp = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    v_color: "",
    v_plate: "",
    v_capacity: "",
    v_type: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit form logic here (e.g., API call)
    console.log(form);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        {
          fullname: {
            firstname: form.firstName,
            lastname: form.lastName,
          },
          email: form.email,
          password: form.password,
          vehicle: {
            color: form.v_color,
            plate: form.v_plate,
            capacity: form.v_capacity,
            vehicleType: form.v_type,
          },
        }
      );

      if (response?.data?.success === true) {
        // navigate to next page or show success message
        toast.success(
          response.data.message || "Captain registered successfully"
        );
      }
    } catch (error) {
      console.error("Captain Signup error:", error);
      toast.error(error?.response?.data?.error || "Captain Signup failed");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-[#1A1A1A] min-h-[100dvh] flex flex-col p-5">
      <div className="text-lg text-white flex items-center w-full mb-2">
        <Link
          to="/user-login"
          className="hover:text-[#EDF6FF] transition-colors"
        >
          <i className="fa-solid fa-arrow-left-long"></i>
        </Link>
      </div>
      <div className="flex flex-col w-full p-3 flex-grow text-white justify-center">
        <h3 className="text-lg mb-6 font-semibold">What's your name?</h3>
        <form className="form flex flex-col gap-4 w-full">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First"
              name="firstName"
              className="w-1/2 mb-0 bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white py-2"
              onChange={handleChange}
              value={form.firstName}
            />
            <input
              type="text"
              placeholder="Last"
              name="lastName"
              className="w-1/2 mb-0 bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white py-2"
              onChange={handleChange}
              value={form.lastName}
            />
          </div>
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            className="w-full bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white py-2"
            onChange={handleChange}
            value={form.email}
          />
          <input
            type="password"
            placeholder="dSfs@34#@!"
            name="password"
            className="w-full bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white py-2"
            onChange={handleChange}
            value={form.password}
          />
          <h3 className="text-lg mt-4 mb-2 font-semibold">Vehicle Details</h3>
          <input
            type="text"
            placeholder="Color (e.g. black)"
            name="v_color"
            className="w-full bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white py-2"
            onChange={handleChange}
            value={form.v_color}
          />
          <input
            type="text"
            placeholder="Plate Number (e.g. DL03DJ02343)"
            name="v_plate"
            className="w-full bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white py-2"
            onChange={handleChange}
            value={form.v_plate}
          />
          <input
            type="number"
            placeholder="Capacity (e.g. 3)"
            name="v_capacity"
            className="w-full bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white py-2"
            onChange={handleChange}
            value={form.v_capacity}
          />
          <input
            type="text"
            placeholder="Type (e.g. motorcycle)"
            name="v_type"
            className="w-full bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white py-2"
            onChange={handleChange}
            value={form.v_type}
          />
        </form>
      </div>
      <div className="w-full p-3 mt-4">
        <button className="rounded-lg px-4 py-2 bg-[#000000] text-center text-white w-full block hover:bg-[#222] transition-colors">
          Next
        </button>
      </div>
    </div>
  );
};

export default CaptainSignUp;
