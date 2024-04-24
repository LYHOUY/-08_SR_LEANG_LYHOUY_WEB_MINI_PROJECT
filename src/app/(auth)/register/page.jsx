import React, { useReducer } from "react";
import Image from "next/image";
import register from "../../../../public/assets/icons/sign-up.svg";
import loginLogo from "../../../../public/assets/icons/logo.svg";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
//   const router = useRouter();
//   // Handle login
//   async function handleregister(userInfo) {
//     // define object
//     const newUserInfo = {
//       firstName: userInfo.get("firstName"),
//       email: userInfo.get("email"),
//       password: userInfo.get("password"),
//       LastName: userInfo.get("LastName"),
//       gender: userInfo.get("gender"),
//       confirm_password: userInfo.get("confirm_password")

//     };
//     // call NextAuth service and pass newUserInfo
//     const res = await signIn("credentials", {
//       redirect: false,
//       ...newUserInfo,
//     });
//     console.log("console Res : ", res);
//     // Check login success
//     if (res.ok) {
//       router.push("/todo-list");
//     }
//   }
  return (
    <>
      <div className="w-full h-[700px]  mt-[9%] flex justify-evenly ">
        <div className="w-[50%] h-full  flex gap-5">
          <div className="w-[49%] h-full ">
            <div className="md:block hidden w-1/2 mt-10">
              <Image
                className="rounded-2xl max-h-[1600px]"
                src={loginLogo}
                alt="login form image"
              />
            </div>
            <form
              className="space-y-6 mt-20"
              method="POST"
              action={handleregister}
            >
              <div>
                <label
                  for="new-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name :
                </label>
                <div className="mt-1">
                  <input
                    name="firstName"
                    type="firstName"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email :
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    placeholder="info@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password :
                </label>
                <div className="mt-1">
                  <input
                    name="password"
                    type="password"
                    autocomplete="password"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    placeholder="***********"
                  />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-md shadow-slate-400"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="w-[49%] h-full ">
            <form className="space-y-6 mt-[29.5%]" method="POST">
              <div>
                <label
                  for="new-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name :
                </label>
                <div className="mt-1">
                  <input
                    name="LastName"
                    type="LastName"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label
                  for="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender :
                </label>
                <select
                  id="gender"
                  name="gender"
                  type="gender"
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                >
                  <option selected>Choose your gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>

              <div>
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-700 mt-7"
                >
                  Conform Password :
                </label>
                <div className="mt-1">
                  <input
                    name="confirm_password"
                    type="confirm_password"
                    autocomplete="confirm-password"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    placeholder="***********"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[25%] h-full">
          <Image
            className="rounded-2xl max-h-[1600px] mt-32"
            src={register}
            alt="login form image"
          />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
