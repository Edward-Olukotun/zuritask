import React from "react";
import profile from "../images/profile picture.jpg";
import deliver from "../images/image 13.jpg";
import wallet from "../images/walletwallet.jpg";
import pack from "../images/send packagespack.jpg";
import history from "../images/historyhisroty.jpg";
import customer from "../images/customer servicecustomer.jpg";
import { AiOutlineHome } from "react-icons/ai";
import { BiPackage } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

function Dashboard() {
  return (
    <>
      <div className="flex font-bold justify-between mx-4 text-3xl pt-4">
        <p>Hi , John</p>
        <img src={profile} alt="" />
      </div>
      <p className="mx-4">Where are you sending a package to?</p>
      <input
        type="text"
        placeholder="Search for a location"
        className="mx-4 border border-orange-200 w-[350px] rounded-md p-1 my-3"
      />
      <div className="w-[350px] mx-auto ">
        <img src={deliver} alt="" className="object-cover  " />
      </div>
      <p className="font-bold mx-4 my-6">Quick Actions</p>
      <div className="flex justify-evenly">
        <div className="flex flex-col">
          <img src={pack} alt="" className="hover:cursor-pointer" />
          <p className="w-[50px] font-bold text-xs text-center  mx-1">
            Send package
          </p>
        </div>
        <div className="flex flex-col">
          <img src={history} alt="" className="hover:cursor-pointer" />
          <p className="w-[50px] font-bold text-xs text-center  mx-1">
            History
          </p>
        </div>
        <div className="flex flex-col">
          <img src={wallet} alt="" className="hover:cursor-pointer" />
          <p className="w-[50px] font-bold text-xs text-center  mx-1">Wallet</p>
        </div>
        <div className="flex flex-col">
          <img src={customer} alt="" className="hover:cursor-pointer" />
          <p className="w-[50px] font-bold text-xs text-center  mx-1">
            Customer Support
          </p>
        </div>
      </div>
      <p className="font-bold mx-4 my-6">Recent Activity</p>
      <div className="flex justify-between mx-4">
        <section className="flex flex-col">
          <p className="font-bold ">Order ID</p>
          <p className="font-thin "># 168141</p>
        </section>
        <p className="px-2 h-6 bg-orange-300 rounded-xl font-thin text-blue-700 hover:text-white hover:cursor-pointer ">
          In transit
        </p>
      </div>
      <div className="font-bold mx-4 flex justify-between my-2">
        <p>22 Jun '22</p>
        <p>22 Jun '22</p>
      </div>
      <footer className="flex justify-evenly mx-4 border-t-2 border-black my-4">
        <section className="flex flex-col mt-2">
          <AiOutlineHome size={28} color={"blue"} />
          <p className="-mx-2">Home</p>
        </section>
        <section className="flex flex-col mt-2">
          <HiOutlineLocationMarker size={28} />
          <p className="-mx-2">Track</p>
        </section>
        <section className="flex flex-col mt-2">
          <BiPackage size={28} />
          <p className="-mx-2">Orders</p>
        </section>
        <section className="flex flex-col mt-2">
          <MdNotificationsActive size={28} />
          <p className="-mx-5">Notifications</p>
        </section>
      </footer>
    </>
  );
}

export default Dashboard;
