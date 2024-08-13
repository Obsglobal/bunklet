"use client";
import Sidebar from "./_components/sidebar";
import Navbar from "./_components/navbar";
import StoreProvider from "../StoreProvider";
import ProtectedRoute from "@/components/protectedRoute";

const Layout = ({ children }) => {


  return (
    <ProtectedRoute>
    <StoreProvider>
      <div className="relative">
        <div className="flex h-screen">
          <div className="fixed flex z-20 h-[80px] w-full bg-primary shadow-xl">
            <Navbar />
          </div>
          <div className="z-50 md:h-full w-full md:static fixed bottom-0 md:w-[15%] overflow-hidden bg-secondary">
            <Sidebar />
          </div>
          <div className="w-3/4 flex-grow overflow-y-auto bg-[#F8F8F8] p-4 lg:pl-14 pt-[7rem] lg:pt-36">
            {children}
          </div>
        </div>
      </div>
    </StoreProvider>
    </ProtectedRoute>
  );
};

export default Layout;
