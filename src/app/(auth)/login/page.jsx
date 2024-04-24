"use client";

import React from "react";
import Image from "next/image";
import loginImage from "../../../../public/assets/icons/login.svg";
import loginLogo from "../../../../public/assets/icons/logo.svg";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from 'next/link';


const LoginPage = () => {
  const router=useRouter()
  // Handle login
  async function handleLogin(userInfo) {
    // define object
    const newUserInfo = {
      email: userInfo.get("email"),
      password: userInfo.get("password"),
    };
    // call NextAuth service and pass newUserInfo
    const res =await signIn("credentials", {
      redirect: false,
      ...newUserInfo,
    });
    // Check login success
    if(res.ok){
        router.push("/todo-list");
    }
  }
  return (
    <>
      <section className="bg-gray-100 min-h-screen flex box-border justify-center items-center relative">
        <div className=" rounded-2xl flex max-w-7xl p-10 items-center   shadow-md shadow-slate-400">
          <div className="md:w-1/2 px-8">
            <Image
              className="rounded-2xl max-h-[1600px] mt-[-10%]"
              src={loginLogo}
              alt="login form image"
            />
            <div className=" px-8 mt-28">
              <p className="text-2xl font-bold mt-4 text-[#000000]">Login</p>

              <form action={handleLogin} className="flex flex-col gap-4">
                <input
                  className="p-2 mt-8 rounded-xl border "
                  type="email"
                  name="email"
                  placeholder="Email"
                  
                />
                <div className="relative">
                  <input
                    className="p-2 rounded-xl border w-full grow"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <svg
                    xmlns="#"
                    width="16"
                    height="16"
                    fill="gray"
                    id="togglePassword"
                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                  </svg>
                  <svg
                    xmlns="#"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                    id="mama"
                    viewBox="0 0 16 16"
                  >
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
                  </svg>
                </div>
                <button
                  className="bg-[#b5b4b4] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                  type="submit"
                >
                  Login
                </button>
                <div className="mt-4 text-sm flex  items-center container-mr">
                  <p className="mr-3 md:mr-0 ">
                    If you don't have an account ?
                  </p>
                  <button className=" register text-blue-800   rounded-xl py-2 px-5  font-semibold duration-300">
                  <Link href="register">Register</Link>
                  </button>
                </div>
              </form>
              <div class="flex items-center">
                <div class="w-full h-0.5 bg-slate-500 dark:bg-gray-700"></div>
                <div class="px-5 text-center text-gray-500 dark:text-gray-400">
                  OR
                </div>
                <div class="w-full h-0.5 bg-slate-500 dark:bg-gray-700"></div>
              </div>
              <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
                <svg
                  className="mr-3"
                  xmlns="#"
                  viewBox="0 0 48 48"
                  width="25px"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Login with Google
              </button>
              <div className="mt-10 text-sm  py-5 playfair tooltip text-slate-400">
              <i class='bx bx-copyright' ></i>2024 My office . All Rights Reserved
              </div>
            </div>
          </div>

          <div className="md:block hidden w-1/2">
            <Image
              className="rounded-2xl max-h-[1600px]"
              src={loginImage}
              alt="login form image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;