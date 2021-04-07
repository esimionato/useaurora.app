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

export default Footer;
