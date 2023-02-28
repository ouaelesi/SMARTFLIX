import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const router = useRouter();
  const [activePage, setActivePage] = useState(0);

  const pages = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Movies",
      href: "/movies",
    },
    {
      name: "Series",
      href: "/series",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchMovie = () => {
    const query = searchInputRef.current?.value;
    router.push(`/search/${query}`);
  };
  const [menueActive, setActive] = useState(false);
  return (
    <div className="absolute w-full z-50">
      {/* Large screen menu  */}
      <div className="md:flex justify-between xl:px-28 lg:px-10 md:px-10 py-10 hidden ">
        <div>
          <Image
            src="/logos/whiteLogo.png"
            width={200}
            height="100"
            alt="exaview logo"
          ></Image>
        </div>
        <div className="flex">
          {pages.map((elem, key) => (
            <Link
              href={elem.href}
              key={key}
              className={`xl:ml-20 lg:ml-18 md:ml-10 pt-2 hover:text-primColor ${
                router.pathname == elem.href
                  ? "text-primColor font-semibold"
                  : ""
              }`}
              onClick={() => setActivePage(key)}
            >
              {elem.name}
              {router.pathname == elem.href ? (
                <div className="py-1 w-fit px-1 mx-auto  bg-primColor rounded-lg"></div>
              ) : (
                <></>
              )}
            </Link>
          ))}
          <form
            className="bg-[rgba(0,0,0,.2)]  flex  border border-gray-700  rounded-xl py-2 ml-5 "
            action="#" onSubmit={searchMovie}
          >
            <input
              ref={searchInputRef}
              className="bg-transparent outline-none  px-2"
            />
            <FontAwesomeIcon
              icon={faSearch}
              width="25"
              className="text-2xl text-primColor mx-2"
              onClick={searchMovie}
            />
          </form>
          <div className="ml-5 ">
            <Link href="/singup">
              <button className="btn-yellow">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Phone menue */}
      <div
        className={`md:hidden justify-between px-5 py-5 flex ${
          menueActive ? "bg-[rgba(0,0,0,.5)]" : ""
        }`}
      >
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
            onClick={() => setActive(!menueActive)}
          ></Image>
        </div>
      </div>
      {menueActive ? (
        <div className="block md:hidden bg-[rgba(0,0,0,.5)] pb-4 downMenu">
          {pages.map((elem, key) => (
            <Link
              href={elem.href}
              key={key}
              className={`w-fit mx-auto pt-2 block ${
                activePage == key ? "text-primColor font-semibold" : ""
              }`}
              onClick={() => {
                setActivePage(key);
                setActive(false);
              }}
            >
              {elem.name}
              {activePage == key ? (
                <div className="py-1 w-fit px-1 mx-auto  bg-primColor rounded-lg"></div>
              ) : (
                <></>
              )}
            </Link>
          ))}
          <div className="mx-auto mt-5 w-fit block text-xs">
            <Link href="/signup">
              {" "}
              <button className="btn-yellow"> Sign Up</button>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
