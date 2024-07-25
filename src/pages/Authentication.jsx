import React from "react";
import { LoginBg } from "../assets";
import { FcGoogle } from "react-icons/fc";

const Authentication = () => {
    return (
        <div
            style={{
                background: `url(${LoginBg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className="h-screen w-screen flex items-center justify-center px-4 py-6"
        >
            <div className="w-full lg:w-96 px-4 py-6 rounded-md backdrop-blur-md flex items-center justify-center flex-col gap-8 bg-[rgba(255,255,255,0.1 )]">
                <div className="flex items-center justify-center flex-col">
                    <p className="text-2xl text-white">Welcome back !</p>
                    <p className="text-lg text-gray-200">
                        Sign in to access your store.
                    </p>
                </div>

                <div className="w-full lg:w-auto px-4 py-3 rounded-md flex gap-2 items-center justify-center border border-gray-200 cursor-pointer active:scale-95 transition-all duration-150 ease-in-out bg-[rgba(255,255,255,0.1)]">
                    <FcGoogle className="text-2xl" />
                    <p className="text-lg text-white font-semibold">
                        Sign in with Google
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Authentication;
