import React from "react";

function ErrorPage() {
  return (
    <>
      <div className="flex flex-col items-center mt-[5%]">
        <p className="text-black font-bold text-8xl">OOPS!!!</p>
        <div className="bg-yellow-300 flex flex-col items-center mt-[5%] w-full">
          <p className="text-black font-bold text-6xl">404</p>
          <p className="text-black font-bold text-6xl">Page Not Found</p>
        </div>
        <img src="/images/error.png" className="h-[300px]" />
      </div>
    </>
  );
}

export default ErrorPage;
