import React from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-rows-layout grid-cols-layout min-h-screen bg-slate-800 w-full h-fit">
      <Header />
      <Navbar />
      <main className="bg-white flex items-center h-full relative">
        {children}
      </main>
    </div>
  );
};

export default Layout;
