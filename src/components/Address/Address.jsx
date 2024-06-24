import React from "react";

const Address = () => {
  return (
    <div className="p-3 bg-gray-100">
      <h4 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold my-3 text-[#C342F9]">
        Address
      </h4>

      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <div className="text-[#374557] font-semibold"> Address 1</div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-[#878F9A] "
            >
              House no , Building , Area
            </label>
            <input
              type="text"
              id="first_name"
              className=" border-0 bg-white text-gray-900 text-sm rounded-3xl focus:ring-[#C342F9] focus:ring-2   block w-full p-2.5 px-4"
              placeholder=""
              required
            />
          </div>
          <div>
            <div className="text-[#374557] font-semibold"> Address 2</div>

            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-[#878F9A] "
            >
              Landmark , Street
            </label>
            <input
              type="text"
              id="first_name"
              className=" border-0 bg-white text-gray-900 text-sm rounded-3xl focus:ring-[#C342F9] focus:ring-2   block w-full p-2.5 px-4"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="company"
              className="block mb-2 text-sm text-[#374557] font-semibold "
            >
              State
            </label>
            <input
              type="text"
              id="first_name"
              className=" border-0 bg-white text-gray-900 text-sm rounded-3xl focus:ring-[#C342F9] focus:ring-2   block w-full p-2.5 px-4"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="phone"
              className="block mb-2 text-sm text-[#374557] font-semibold "
            >
              Country
            </label>
            <input
              type="text"
              id="first_name"
              className=" border-0 bg-white text-gray-900 text-sm rounded-3xl focus:ring-[#C342F9] focus:ring-2   block w-full p-2.5 px-4"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="website"
              className="block mb-2 text-sm text-[#374557] font-semibold "
            >
              City
            </label>
            <input
              type="text"
              id="first_name"
              className=" border-0 bg-white text-gray-900 text-sm rounded-3xl focus:ring-[#C342F9] focus:ring-2   block w-full p-2.5 px-4"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="visitors"
              className="block mb-2 text-sm text-[#374557] font-semibold "
            >
              Postal Code
            </label>
            <input
              type="text"
              id="first_name"
              className=" border-0 bg-white text-gray-900 text-sm rounded-3xl focus:ring-[#C342F9] focus:ring-2   block w-full p-2.5 px-4"
              placeholder=""
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-custom-gradient hover:bg-custom-gradient-hover focus:ring-[#C342F9] focus:ring-4 focus:outline-none font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center rounded-3xl"
        >
          Save address
        </button>
      </form>
    </div>
  );
};

export default Address;
