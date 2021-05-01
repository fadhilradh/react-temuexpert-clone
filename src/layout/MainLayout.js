import React from "react";
import RegisterBtn from "../components/RegisterBtn.js";
import LoginBtn from "../components/LoginBtn.js";
import CategorySelect from "../components/CategorySelect.js";
import HeaderInput from "../components/HeaderInput.js";

class Header extends React.Component {
   render() {
      return (
         <div className="bg-white shadow-md flex justify-center px-4 py-3 max-w-screen-xl mx-auto px-2 md:px-20">
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
      );
   }
}

export default Header;
