import React from "react";

const Register = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form>
        <input
          type="email"
          className="border block mb-2 w-72 p-2"
          placeholder="email"
        />
        <input
          type="password"
          className="border block mb-2 w-72 p-2"
          placeholder="password"
        />
        <button type="submit" className="bg-blue-400 p-4 w-72">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
