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

         <section class="flex flex-col md:flex-row full-width justify-center mb-16 md:mb-36 max-w-screen-xl">
            <div
               class="text-h4 mb-12 w-full text-center px-10"
               id="temuExpertSteps"
            >
               <span>Cukup 3 Langkah </span>
               <span class="text-primary text-bold">Mudah</span>
            </div>
            <div class="flex sm:flex-row flex-col md:w-3/4 w-full justify-around text-center">
               <div
                  v-for="(step,index) in stepsDetail"
                  class="flex flex-col items-center md:w-1/4 w-full mb-16"
               >
                  <div
                     class="flex items-center justify-center border-blue-600 border rounded-full
                    h-16 w-16 font-bold text-h4 text-secondary"
                  >
                     {}
                  </div>
                  <img alt="" src="step.src" class="my-4 w-1/2 md:w-full" />
                  <div class="text-18 text-center md:w-full w-2/3">{}</div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default HomePage;
