const Hero = () => (
  <div className="bg-gray-800 relative z-20 py-16 lg:py-24 transform -skew-y-6 -mt-28">
    <div className="max-w-screen-xl relative mx-auto transform skew-y-6 px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-40 md:pb-64 lg:pb-134">
      <div className="text-center mt-20 space-y-10">
        <div className="mt-4 sm:mt-10 flex justify-center">
          <img src="/Aurora_Logo.svg" className="h-14 sm:h-24" />
        </div>
        <p className="mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Website's analytics made easy! Cookieless & Privacy Focus out of the
          Box. Built in NextJS.
        </p>

        <div className="flex justify-center mt-20 space-x-4">
          <a
            href="https://github.com/itsrennyman/aurora"
            className="group flex"
          >
            <div className="w-full sm:w-auto inline-flex items-center justify-between text-white font-medium bg-white bg-opacity-20 group-hover:bg-opacity-30 rounded-lg shadow-sm group-hover:shadow-lg py-3 px-5 border border-white border-opacity-10 transform group-hover:-translate-y-0.5 transition-all duration-150">
              <svg
                width="24"
                height="24"
                fill="currentColor"
                className="text-white opacity-40 mr-3"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                ></path>
              </svg>

              <span>Get Started!</span>
            </div>
          </a>
          <a
            href="https://demo.useaurora.app/s/f3d811716007dcfbbec4c155d00a30dc"
            className="group flex"
          >
            <div className="w-full sm:w-auto inline-flex items-center justify-between text-white font-medium bg-blue-400 bg-opacity-100 group-hover:bg-opacity-70 rounded-lg shadow-sm group-hover:shadow-lg py-3 px-5 border border-white border-opacity-10 transform group-hover:-translate-y-0.5 transition-all duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="text-white opacity-40 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <span>See The Demo!</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
