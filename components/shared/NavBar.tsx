import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
const NavBar = () => {
  const [activePage, setActivePage] = useState(0);
  const pages = ["Home", "Movies", "Series", "About"];
  const [menueActive, setActive] = useState(false);
  return (
    <div className="absolute w-full z-50">
      {/* Large screen menu  */}
      <div className="md:flex justify-between xl:px-28 lg:px-10 md:px-10 py-10 hidden ">
        <div>
          <Image
            src="/logos/whiteLogo.png"
            width={150}
            height="100"
            alt="exaview logo"
          ></Image>
        </div>
        <div className="flex">
          {pages.map((elem, key) => (
            <div
              key={key}
              className={`xl:ml-20 lg:ml-18 md:ml-10 pt-2 ${
                activePage == key ? "text-primColor font-semibold" : ""
              }`}
              onClick={() => setActivePage(key)}
            >
              {elem}
              {activePage == key ? (
                <div className="py-1 w-fit px-1 mx-auto  bg-primColor rounded-lg"></div>
              ) : (
                <></>
              )}
            </div>
          ))}
          <div className="ml-20 ">
            <button className="btn-yellow"> Sign in</button>
          </div>
        </div>
      </div>

      {/* Phone menue */}
      <div className="md:hidden justify-between px-5 py-5 flex ">
        <div>
          <Image
            src="/logos/phonelogo.png"
            width={35}
            height="35"
            alt="exaview logo"
          ></Image>
        </div>
        <div>
          <Image
            src="/icons/hamMenue.png"
            width={35}
            height="30"
            alt="ham menue icon"
            onClick={()=>setActive(!menueActive)}
          ></Image>
        </div>
      </div>
      {menueActive ? (
        <div className="block md:hidden">
          {pages.map((elem, key) => (
            <div
              key={key}
              className={`w-fit mx-auto pt-2 ${
                activePage == key ? "text-primColor font-semibold" : ""
              }`}
              onClick={() => setActivePage(key)}
            >
              {elem}
              {activePage == key ? (
                <div className="py-1 w-fit px-1 mx-auto  bg-primColor rounded-lg"></div>
              ) : (
                <></>
              )}
            </div>
          ))}
          <div className="mx-auto mt-5 w-fit block text-xs">
            <button className="btn-yellow"> Sign in</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
