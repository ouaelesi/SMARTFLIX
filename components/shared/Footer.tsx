import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGoogle,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const pages = ["Home", "Movies", "Series", "About"];
  const socialMedia = [faFacebook, faInstagram, faGoogle, faTwitter, faYoutube];
  return (
    <div>
      <div className="w-fit mx-auto py-5">
        <Image
          src="/logos/whiteLogo.png"
          width={150}
          height="100"
          alt="exaview logo"
        ></Image>
      </div>
      <div className="flex justify-around py-4">
        {pages.map((page, key) => (
          <div key={key} className="text-sm md:text-lg">
            {page}
          </div>
        ))}
      </div>
      <div className="flex justify-center py-4 md:gap-16 gap-8">
        {socialMedia.map((sM, key) => (
          <div key={key} className="text-sm md:text-lg">
            <FontAwesomeIcon icon={sM} width="28" color="gray" />
          </div>
        ))}
      </div>
      <div className="pt-4 pb-2 text-center text-xs md:text-sm">
        Copyright © 2023 TrailAI . All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
