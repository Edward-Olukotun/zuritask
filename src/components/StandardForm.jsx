import React from "react";
import { useFormik } from "formik";
import { MdFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function StandardForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Form Data", values);
    },
    // validate: (values) => {
    //   let errors = {};

    //   if (!values.name) {
    //     errors.name = "Required";
    //   }

    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (
    //     !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
    //       values.email
    //     )
    //   ) {
    //     errors.email = "invalid email format";
    //   }

    //   if (!values.password) {
    //     errors.password = "Required";
    //   }

    //   return errors;
    // },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string()
        .min(
          8,
          "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        )
        .max(20)
        .required("Required"),
    }),
  });
  console.log("Form Errors", formik.errors);
  return (
    <div>
      <h1 className="text-center font-bold my-8">Create An Account</h1>
      <div className="flex w-full h-full justify-center">
        <form onSubmit={formik.handleSubmit}>
          <div className="w-fit flex flex-col">
            <label htmlFor="Full Name" className="text-sm font-bold">
              Full Name
            </label>
            <input
              type="text"
              id="FullName"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="John Smith"
              className={
                formik.touched.name && formik.errors.name
                  ? "border-red-700 border-2 w-[290px] my-2"
                  : "border-2 w-[290px] my-2"
              }
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-700 text-sm font-bold">
                {formik.errors.name}
              </div>
            ) : null}
          </div>
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
          </div>
          <div className="flex">
            <input type="checkbox" className="mx-2 hover:cursor-pointer" />
            <p className="w-[270px] text-sm tracking-tighter font-semibold">
              I certiify that I'm 18 years of age or older, and I agree to the{" "}
              <span className="text-orange-600 hover:cursor-pointer">
                User Agreement
              </span>{" "}
              and{" "}
              <span className="text-orange-600 hover:cursor-pointer">
                {" "}
                Privacy Policy
              </span>
            </p>
          </div>
          <p className="w-[270px] text-sm tracking-tighter my-6 text-center font-semibold">
            Already have an account?{" "}
            <span className="text-orange-600 hover:cursor-pointer">
              <Link to="/login">Log In</Link>
            </span>
          </p>

          <div className="flex flex-col text-center font-semibold">
            <p>Or Sign Up with</p>
            <div className="flex justify-center">
              <FcGoogle className="mx-2 my-4 hover:cursor-pointer" size={42} />
              <MdFacebook
                className="mx-2 my-4 hover:cursor-pointer"
                size={42}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-[300px] bg-blue-800 text-white rounded-sm h-10 hover:cursor-pointer my-4"
          >
            <Link to="/login">Create An Account</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default StandardForm;
