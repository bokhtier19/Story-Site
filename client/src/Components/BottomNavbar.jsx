import React from "react";

const BottomNavbar = () => {
  return (
    <div className="bottomnavbar  flex  justify-around  bg-gray-100">
      <div className="bigbox w-[80%] flex flex-wrap md:flex-row gap-20 p-10 leading-8">
        <div className="popular flex-1">
          <ul>
            <h1 className="text-lg font-bold">Popular Languages</h1>
            <li>
              <a href="/" className=" hover:underline">
                Hindi
              </a>
            </li>
            <li>
              <a href="/" className=" hover:underline">
                Bengali
              </a>
            </li>
            <li>
              <a href="/" className=" hover:underline">
                English
              </a>
            </li>
            <li>
              <a href="/" className=" hover:underline">
                Tamil
              </a>
            </li>
            <li>
              <a href="/" className=" hover:underline">
                Telugu
              </a>
            </li>
          </ul>
        </div>
        <div className="top-genres flex-1">
          <ul>
            <h1 className="text-lg font-bold">Top Genre</h1>
            <li>
              <a href="/" className=" hover:underline">
                Romance
              </a>
            </li>
            <li>
              <a href="/" className=" hover:underline">
                Young Adult
              </a>
            </li>
            <li>
              <a href="/" className=" hover:underline">
                Suspense
              </a>
            </li>
            <li>
              <a href="/" className=" hover:underline">
                Drama
              </a>
            </li>
            <li>
              <a href="/" className=" hover:underline">
                Top Content
              </a>
            </li>
          </ul>
        </div>
        <div className="also-read flex-1">
          <ul>
            <h1 className="text-lg font-bold">Also Read</h1>
            <li>
              <a href="/" className=" hover:underline">
                Most Read
              </a>
            </li>
            <li>
              <a href="/" className=" hover:underline">
                William Shakespeare
              </a>
            </li>
            <li>
              <a href="/" className=" hover:underline">
                Arthur Conan Doyle
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
