const Hero = () => (
  <div className="bg-gray-800 relative z-20 py-16 lg:py-24 transform -skew-y-6 -mt-28">
    <div className="max-w-screen-xl relative mx-auto transform skew-y-6 px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-40 md:pb-64 lg:pb-134">
      <div className="text-center mt-20">
        <p className="text-gray-50 text-xs sm:text-sm font-medium uppercase">
          Bye Bye Google Analytics! 👋
        </p>
        <h2 className="mt-4 sm:mt-5 text-4xl tracking-tight leading-9 sm:leading-10 font-bold text-white sm:text-6xl sm:leading-none xl:text-7xl">
          Use&nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Aurora
          </span>
          !
        </h2>
        <p className="mt-3 mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          The Open Source Analytics Platform - Made for Humans &amp; Developers.
        </p>

        <div className="flex justify-center mt-20">
          <a href="https://twitter.com/itsrennyman" className="group flex">
            <div className="w-full sm:w-auto inline-flex items-center justify-between text-white font-medium bg-white bg-opacity-20 group-hover:bg-opacity-30 rounded-lg shadow-sm group-hover:shadow-lg py-3 px-5 border border-white border-opacity-10 transform group-hover:-translate-y-0.5 transition-all duration-150">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="text-white opacity-40 mr-3"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
              <span>Get in touch for news!</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
