import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faArrowAltCircleRight,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/context/AuthContext";
const NavBar = () => {
  const router = useRouter();
  const [activePage, setActivePage] = useState(0);
  const { user, logout } = useAuth();
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
            action="#"
            onSubmit={searchMovie}
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
            {!user ? (
              <Link href="/singup">
                <button className="btn-yellow">Sign Up</button>
              </Link>
            ) : (
              <div className="flex">
                <div className="py-1 relative rounded-full border text-gray-400 border-gray-700 mt-1 userIcon cursor-pointer">
                  <FontAwesomeIcon
                    icon={faUser}
                    width="20"
                    className="text-2xl  mx-2"
                    onClick={searchMovie}
                  />
                  <div className="absolute text-xs bg-gray-900 px-2 py-1 rounded-xl text-primColor font-thin userEmail hidden -bottom-5 -left-8 border border-gray-700" > {user.email}</div>
                </div> 
                <div className="py-1 rounded-full border text-yellow-400 hover:-mr-2 hover:ml-2 border-gray-700 mt-1">
                  <FontAwesomeIcon
                    onClick={logout}
                    icon={faRightFromBracket}
                    width="22"
                    className="text-2xl  mx-2 cursor-pointer"
                  />
                </div>
              </div>
            )}
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
