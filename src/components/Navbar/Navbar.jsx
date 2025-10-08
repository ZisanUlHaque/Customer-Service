import React from "react";

const Navbar = () => {
  return (
    <div className="border-b-2 border-gray-300">
      <div className="navbar max-w-[1400px] flex justify-between mx-auto">
        <div className="lg:flex-1">
          <a className=" text-2xl font-bold">
            <h1>CS — Ticket System</h1>
          </a>
        </div>
        <div className="text-[#131313] hidden lg:flex  mr-8 gap-8">
          <p>Home</p>
          <p>FAQ</p>
          <p>Changelog</p>
          <p>Blog</p>
          <p>Download</p>
          <p>Contact</p>
        </div>
        <div>
          <button className="btn rounded-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
