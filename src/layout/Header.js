import React from "react";
import RegisterBtn from "../components/RegisterBtn.js";
import LoginBtn from "../components/LoginBtn.js";
import CategorySelect from "../components/CategorySelect.js";
import HeaderInput from "../components/HeaderInput.js";

const Header = () => {
   return (
      <div className="shadow-md">
         <div className="flex justify-center max-w-screen-xl px-4 py-3 mx-auto md:px-20">
            <img src="/logo/logo_full.svg" alt="logo"></img>
            <div className="flex-grow"></div>
            <div className="mr-3">
               <CategorySelect />
            </div>
            <HeaderInput />
            <div className="flex-grow"></div>
            <LoginBtn />
            <RegisterBtn />
         </div>
      </div>
   );
};

export default Header;
