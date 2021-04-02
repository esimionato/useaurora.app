const MenuBar = () => <div></div>;

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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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

const HeroImage = () => (
  <div className="relative z-30 -mt-24 md:-mt-48 lg:-mt-108">
    <div className="max-w-screen-xl mx-auto lg:w-3/4 px-4 sm:px-6 lg:px-8">
      <img
        className="relative rounded-lg shadow-lg"
        src="/screenshot.png"
        alt="App Screenshot"
      />
    </div>
  </div>
);

const Features = () => (
  <div className="bg-gray-800 relative z-20 py-16 lg:py-24 transform -skew-y-6 -mt-40">
    <div className="max-w-screen-xl relative mx-auto px-4 sm:px-6 lg:px-8 py-40 lg:py-40 transform skew-y-6">
      <div className="max-w-lg lg:max-w-xl">
        <p className="text-base leading-6 text-blue-600 font-semibold tracking-wide uppercase">
          Simple as one, to and three.
        </p>
        <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
          You Know Aurora, Better Than Everyone Else!
        </h3>
        <p className="mt-3 text-lg leading-6 text-gray-400">
          The entire codebase in Aurora is Open Source, you can watch, clone and
          contribute with the project and be the owner of your data!
        </p>
      </div>
      <div className="mt-16">
        <div className="md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
              </svg>
            </div>
            <div className="mt-5">
              <h5 className="text-lg leading-6 font-medium text-white">
                Turbo Deployable
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-400">
                You can deploy you application and start tracking in really 5
                minutes!
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="mt-5">
              <h5 className="text-lg leading-6 font-medium text-white">
                Complications? No Thanks.
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-400">
                Aurora is simple, no complex knowledge are required to get
                started.
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="mt-5">
              <h5 className="text-lg leading-6 font-medium text-white">
                User Friendly
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-400">
                One dashboard, your data inside, no more GA infinite menus, with
                tons of buttons.
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
              </svg>
            </div>
            <div className="mt-5">
              <h5 className="text-lg leading-6 font-medium text-white">
                Multi Website Ready!
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-400">
                With Aurora you can create and manage multiple websites at the
                same time, with a pair of click!
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <div className="mt-5">
              <h5 className="text-lg leading-6 font-medium text-white">
                You Know Exactly What's Going On!
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-400">
                The entire codebase in Aurora is Open Source, you can watch,
                clone and contribute to the project!
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
            </div>
            <div className="mt-5">
              <h5 className="text-lg leading-6 font-medium text-white">
                You Know? It's Free.
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-400">
                No Penny are required to run Aurora. You're watertight.
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="mt-5">
              <h5 className="text-lg leading-6 font-medium text-white">
                Welcome To The Dark Side
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-400">
                Obsidian Gray saves your eyes from the bright lights of your
                monitor.
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="mt-5">
              <h5 className="text-lg leading-6 font-medium text-white">
                Secure By Default
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-400">
                No bad companies will spy on your data, they will be yours,
                forever.
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
              </svg>
            </div>
            <div className="mt-5">
              <h5 className="text-lg leading-6 font-medium text-white">
                Clean Reports &amp; Analytics
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-400">
                Manage your data with the timerange series. It's a Piece of
                Cake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <div className="bg-gray-800">
    <div className="max-w-screen-xl mx-auto pt-12 px-4 sm:px-6 lg:pt-16 lg:px-8 pb-8">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="grid grid-cols-3 xl:gap-8 xl:col-span-2">
          <div className="col-span-2 md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h4 className="text-sm leading-5 font-semibold tracking-wider text-white uppercase">
                Uses Cases
              </h4>
              <ul className="mt-5">
                <li>
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-300 hover:text-gray-200"
                  >
                    Laravel Package
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-blue-300 hover:text-blue-200"
                  >
                    CMS
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-blue-300 hover:text-blue-200"
                  >
                    Saas
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*
        <div className="mt-8 xl:mt-0">
          <h4 className="text-sm leading-5 font-semibold tracking-wider text-white uppercase">
            Subscribe to our newsletter
          </h4>
          <p className="mt-5 text-blue-300 text-base leading-6">
            Receive notifications about release date and other updates.
          </p>
        </div>
        */}
      </div>
    </div>
  </div>
);

const CallToAction = () => (
  <div className="mt-4 md:mt-10 lg:mt-20">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Ready to dive in?</span>
        <span className="block text-indigo-600">
          Start your free trial today.
        </span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get started
          </a>
        </div>
        <div className="ml-3 inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Index = () => (
  <main className="bg-gray-50">
    <MenuBar />
    <Hero />
    <HeroImage />
    <Features />
    <CallToAction />
  </main>
);

export default Index;
