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
          <a
            href="https://github.com/itsrennyman/aurora"
            className="group flex"
          >
            <div className="w-full sm:w-auto inline-flex items-center justify-center text-black font-bold bg-white hover:bg-opacity-90 rounded-lg shadow-sm hover:shadow-lg py-3 px-5 transition ease-in-out duration-150">
              <svg
                width="24"
                height="24"
                fill="currentColor"
                className="text-black mr-3"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                ></path>
              </svg>
              View on GitHub
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
