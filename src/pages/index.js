const HomePage = () => {
   return (
      <div className="flex flex-center flex-col font-lato">
         <section
            className="flex flex-col md:flex-row justify-between w-full
            max-w-screen-xl md:h-auto px-14 md:px-20 pt-20 pb-40 md:mb-24 bg-home bg-cover"
         >
            <span className="md:w-1/3 w-full text-center md:text-left">
               <div className="text-h3 md:text-h2 text-bold text-primary mb-10 md:leading-tight">
                  Temukan Solusi dari Para Expert Kami
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
         </section>

         <section className="flex flex-col md:flex-row full-width justify-center mb-16 md:mb-36 max-w-screen-xl">
            <div className="text-h4 mb-12 w-full text-center px-10">
               <span>Cukup 3 Langkah </span>
               <span className="text-primary text-bold">Mudah</span>
            </div>
            <div className="flex sm:flex-row flex-col md:w-3/4 w-full justify-around text-center">
               <div
                  v-for="(step,index) in stepsDetail"
                  className="flex flex-col items-center md:w-1/4 w-full mb-16"
               >
                  <div
                     className="flex items-center justify-center border-blue-600 border rounded-full
                    h-16 w-16 font-bold text-h4 text-secondary"
                  ></div>
                  <img
                     alt="Temu Expert Steps"
                     src="step.src"
                     className="my-4 w-1/2 md:w-full"
                  />
                  <div className="text-18 text-center md:w-full w-2/3">{}</div>
               </div>
            </div>
         </section>

         <section className="flex flex-col md:flex-row items-center justify-around mx-auto w-5/6 max-w-screen-xl md:pl-24">
            <span className="flex justify-end w-full md:w-1/6 md:mb-none md:mt-3 mb-16 text-h4 md:text-36">
               <div className="text-center md:text-right font-semibold mb-2">
                  {" "}
                  Mengapa Memilih TemuExpert?
               </div>
               <div className="w-1/4 md:w-1/2 h-2 rounded-xl bg-primary mx-auto md:m-0" />
            </span>
            <span className="reasons-container">
               <div
                  v-for="(reason,index) in temuExpertReasons"
                  key="index"
                  className="flex flex-col md:flex-row md:w-1/2 w-full items-center text-center md:text-left"
               >
                  <div className=" bg-white w-1/4 md:w-1/5 rounded-xl shadow-xl md:shadow-lg reason-icon">
                     <img src="reason" alt="reasons"></img>
                  </div>
                  <div className="md:w-2/3 w-full pt-10 px-6 pb-6 md:p-6 bg-white shadow-xl rounded-lg">
                     <div className="mb-1">
                        <span className="text-h6 md:text-h5 font-bold">{}</span>
                     </div>
                     <div className="text-body md:text-18 text-gray-500">
                        {}
                     </div>
                  </div>
               </div>
            </span>
         </section>

         <div
            className="w-full h-full mt-36 md:mt-48 pb-36 bg-no-repeat
      bg-map-texture bg-contain md:bg-cover bg-center max-w-screen-xl"
         >
            <div className="flex justify-center items-center">
               <div className="text-h4 md:mb-8 mb-12 md:w-full w-2/3 text-center">
                  <span>Expert dengan Pengalaman </span>
                  <span className="text-primary">Beragam</span>
               </div>
               <div className="w-3/5 h-20 text-18 text-center mb-4 md:mb-0">
                  <span>Kami </span>
                  <span className="text-primary">menghubungkan Anda </span>
                  <span>dengan para </span>
                  <span className="text-primary">Expert yang tersebar </span>
                  <span>
                     di seluruh Indonesia dengan beragam latar belakang keahlian
                  </span>
               </div>
               <home-page-carousel displayed-experts="displayedExperts" />
            </div>
         </div>
      </div>
   );
};

export default HomePage;
