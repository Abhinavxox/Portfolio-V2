import React from "react";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <section>
      <div id="contact" className="flex justify-center items-center relative">
        <div>
          <div className="font-medium w-full text-center lg:pt-20 pt-10 lg:pb-10 pb-5">
            <h1 className="text-[#e4aa48] my-2 text-xl">CONTACT ME</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-32">
            <div className="h-20 w-[100%] lg:w-96 mx-2">
              <div className="bg-[#34343B] w-full flex items-center h-full">
                <img
                  src="./images/contact/phone.svg"
                  className="h-8 w-8 mx-4"
                />
                <p className="font-medium text-lg text-[#e4aa48]">
                  +91 9745917960
                </p>
              </div>
            </div>
            <div className="h-20 w-[100%] lg:w-96 mx-2">
              <div className="bg-[#34343B] w-full flex items-center h-full">
                <img
                  src="./images/contact/email.svg"
                  className="h-8 w-8 mx-4"
                />
                <p className="font-medium text-lg text-[#e4aa48]">
                  meronaamabhinav@gmail.com
                </p>
              </div>
            </div>
            <div className="h-20 w-[100%] lg:w-96 mx-2">
              <div className="bg-[#34343B] w-full flex items-center h-full">
                <img
                  src="./images/contact/phone.svg"
                  className="h-8 w-8 mx-4"
                />
                <p className="font-medium text-lg text-[#e4aa48]">
                  +91 9745917960
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          className="absolute bottom-10 right-10 hidden lg:flex"
          to="nav"
          smooth={true}
          duration={2000}
        >
          <div className="h-10 w-10 border-[#e4aa48] border-2 flex items-center justify-center hover:scale-110 hover:border-3">
            <img src="./images/contact/up.svg" />
          </div>
        </Link>
      </div>
      <div className="w-full h-1 bg-[#e4aa48] py-2"></div>
    </section>
  );
};

export default Contact;
