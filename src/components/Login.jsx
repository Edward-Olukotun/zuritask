import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Login() {
  const [phone, setPhone] = useState(false);
  const setPhonePage = () => {
    setPhone(!phone);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      number: "",
    },
    onSubmit: (values) => {
      console.log("Form Data", values);
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      number: Yup.string()
        .min(11, "Must be 11 numbers")
        .max(11, "can't exceed 11 numbers")
        .required("Required"),
      password: Yup.string()
        .min(
          8,
          "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        )
        .max(20)
        .required("Required"),
    }),
  });
  return (
    <div className="h-screen w-screen">
      <div className="h-[15%] w-full bg-gradient-to-r from-blue-700 to-blue-900"></div>
      <div className="h-[85%] w-full bg-white border rounded-t-2xl -mt-4 border-black">
        <h1 className="font-bold text-2xl text-center my-4">Welcome Back</h1>
        <p className="font-semibold text-center ">Log In to your Account</p>
        <div className="flex justify-evenly">
          <button
            onClick={setPhonePage}
            className={
              phone
                ? "mx-2 border  border-gray-600  my-2 rounded-2xl w-[150px] bg-blue-700 text-white font-bold"
                : "mx-2 border  border-gray-600  my-2 rounded-2xl w-[150px] hover:bg-blue-400 hover:cursor-pointer hover:text-white font-bold"
            }
          >
            Email
          </button>
          <button
            onClick={setPhonePage}
            className={
              phone
                ? "mx-2 border  border-gray-600  my-2 rounded-2xl w-[150px] hover:bg-blue-400 hover:cursor-pointer hover:text-white font-bold"
                : "mx-2 border  border-gray-600  my-2 rounded-2xl w-[150px] bg-blue-700 text-white font-bold"
            }
          >
            Phone Number
          </button>
        </div>
        <div>
          {phone ? (
            <form
              onSubmit={formik.handleSubmit}
              className="w-[300px] mx-auto my-4"
            >
              <div className="w-fit flex flex-col">
                <label htmlFor="Email Address" className="text-sm font-bold">
                  {" "}
                  Email Address
                </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  placeholder="JohnSmith@gmail.com"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "border-red-700 border-2 w-[290px] my-2"
                      : "border-2 w-[290px] my-2"
                  }
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-700 text-sm font-bold">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="w-fit flex flex-col">
                <label htmlFor="Password" className="text-sm font-bold">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  placeholder="Minimum of 8 characters"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "border-red-700 border-2 w-[290px] my-2"
                      : "border-2 w-[290px] my-2"
                  }
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-700 text-sm font-bold h-fit w-[300px] my-2 text-center">
                    {formik.errors.password}
                  </div>
                ) : null}
                <div className="flex justify-between">
                  <p className="font-semibold text-orange-500 text-sm hover:cursor-pointer">
                    Remember me
                  </p>
                  <p className="font-semibold text-orange-500 text-sm hover:cursor-pointer">
                    Forgot Password
                  </p>
                </div>
              </div>
            </form>
          ) : (
            <form
              onSubmit={formik.handleSubmit}
              className="w-[300px] mx-auto my-4"
            >
              <div className="w-fit flex flex-col">
                <label htmlFor="Phone Number" className="text-sm font-bold">
                  {" "}
                  Phone Number
                </label>
                <input
                  id="Phone"
                  name="number"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.number}
                  placeholder="08139168141"
                  className={
                    formik.touched.number && formik.errors.number
                      ? "border-red-700 border-2 w-[290px] my-2"
                      : "border-2 w-[290px] my-2"
                  }
                />
                {formik.touched.number && formik.errors.number ? (
                  <div className="text-red-700 text-sm font-bold">
                    {formik.errors.number}
                  </div>
                ) : null}
              </div>
              <div className="w-fit flex flex-col">
                <label htmlFor="Password" className="text-sm font-bold">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  placeholder="Minimum of 8 characters"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "border-red-700 border-2 w-[290px] my-2"
                      : "border-2 w-[290px] my-2"
                  }
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-700 text-sm font-bold h-fit w-[300px] my-2 text-center">
                    {formik.errors.password}
                  </div>
                ) : null}
                <div className="flex justify-between">
                  <p className="font-semibold text-orange-500 text-sm hover:cursor-pointer">
                    Remember me
                  </p>
                  <p className="font-semibold text-orange-500 text-sm hover:cursor-pointer">
                    Forgot Password
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
        <div className="flex justify-center">
          <button className="w-[300px] text-center font-bold rounded-md bg-blue-700 text-white ">
            <Link to="/dashboard">Log In</Link>
          </button>
        </div>
        <p className="text-center text-sm font-bold my-2 ">
          Don't have an account?{" "}
          <span className="text-orange-600 hover:cursor-pointer">
            <Link to="/signup"> Register now</Link>{" "}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
