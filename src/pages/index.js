const HomePage = () => {
   return (
      <div className="flex flex-center flex-col font-lato">
         <span className="md:w-1/3 w-full text-center md:text-left">
            <div className="text-h3 md:text-h2 text-bold text-primary mb-10 md:leading-tight">
               Temukan Solusi dari Para Expert
            </div>
            <div className="text-h6 md:text-h5">
               Nikmati kemudahan akses untuk berkonsultasi dengan expert dari
               seluruh Indonesia
            </div>
            <div className="mt-16 md:mt-12 mb-6 md:mb-none ">
               <btn className="w-auto h-12 font-semibold text-body tracking-wider">
                  Cari Expert
               </btn>
            </div>
         </span>
         <img
            alt="mainImage"
            src="/images/homepage-main-img.svg"
            className="w-4/5 md:w-1/2 mx-auto mt-5 md:mt-0 "
         ></img>
      </div>
   );
};

export default HomePage;
