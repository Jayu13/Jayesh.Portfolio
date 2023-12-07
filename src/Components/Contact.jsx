import React from "react";


const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-white p-4 text-black">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-6">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500  hover:border-customColor duration-200">Contact</h1>
          <p className="py-4">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/08c1cb55-0900-4146-86a9-0808a00712ef" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-customColor"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-customColor"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-customColor "
            />

            <button className="text-white bg-customColor px-6 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
              Hire Me!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
