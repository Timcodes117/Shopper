"use client";
import GlobalHeader from "@/app/components/Header";
import React from "react";

const page = () => {
  const [currentTab, setTab] = React.useState("Profile");
  return (
    <>
      <GlobalHeader transparent />
      <div className="w-full mt-[150px] mx-auto max-w-screen-2xl md:px-[7vw] px-4">
        <div className="w-full min-h-[200px] flex flex-col md:flex-row items-center md:px-10 justify-start gap-4">
          <div className="md:w-[200px] md:h-[200px] w-[100px] h-[100px] bg-blue-950 rounded-full"></div>
          <div className="flex flex-col md:items-start items-center">
            <p className="text-[40px] font-semibold">User Name</p>
            <p className="text-gray-900 text-[16px] pl-2">Oshodi-Isolo - {new Date().toLocaleTimeString()}</p>
            <p className="text-gray-600 text-[16px] pl-2">Lagos, Nigeria </p>
            <p className="text-gray-600 text-[14px] pl-2">+234 70545 455</p>
          </div>
        </div>
        <br />
        <div className="w-full mt-10 flex flex-row  overflow-x-scroll border-b">
          <div className="flex flex-row flex-1 gap-2">
            {["Profile", "Orders", "Notifications", "Settings"].map((data, index) => {
              return (
                <button
                  onClick={() => setTab(data)}
                  style={
                    data == currentTab
                      ? {
                          borderBottom: "2px solid orangered",
                          color: "orangered",
                        }
                      : {}
                  }
                  className="h-[50px min-w-[100px] text-[grey] text-[16px] py-2"
                >
                  {data}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
