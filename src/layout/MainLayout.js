import React from "react";
import RegisterBtn from "../components/RegisterBtn.js";
import LoginBtn from "../components/LoginBtn.js";

class MainLayout extends React.Component {
   render() {
      return (
         <div className="bg-white shadow-md flex justify-center px-4 py-3">
            <LoginBtn />
            <RegisterBtn />
         </div>
      );
   }
}

export default MainLayout;
