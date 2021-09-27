import React from "react";

function SubscribeForm() {
  return (
    <form className="flex flex-col space-y-2 ">
      <input
        type="text"
        placeholder="Subscribe to join with Us."
        required
        className="border-2 border-transparent rounded-md shadow-lg focus:rounded-none focus:outline-white  px-2 py-1 text-sm font-semibold text-black "
      />
      <input
        type="submit"
        value="Subscribe Now"
        className="rounded-lg py-1 text-xl font-semibold text-white bg-green-700 hover:bg-green-600"
      />
    </form>
  );
}

export default SubscribeForm;
