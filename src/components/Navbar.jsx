import { useState } from 'react';
import favicon from "../assets/favicon.png";
import facebook from "../assets/facebook_icon.svg";
import instagram from "../assets/instagram_icon.svg";
import twitter from "../assets/twitter_icon.svg";
import music from "../assets/music_icon.svg";
import mail from "../assets/mail_icon.svg";

const Navbar = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="flex w-full space-between m-2 space-x-2">
      <div className="mr-1 flex flex-col items-center justify-center">
        <img src={favicon} alt="favicon" />
      </div>
      <div className="flex w-full flex-col-reverse md:flex-row py-1 gap-2 md:space-y-0  cursor-pointer bg-black bg-navbar-color rounded-tr-3xl rounded-bl-3xl shadow border border border border border-neutral-700">
        <div className="flex-grow md:ml-10 flex flex-row items-center justify-center space-x-5 ">
          <p
            className={`text-white md:ml-10 font-semibold ${active ? ' underline underline-offset-8' : ''}`}
            onClick={(e) => setActive(true)}
          >
            <a href='#home'>
              MINT
            </a>
          </p>
          <p
            className={`text-white font-semibold  ${!active ? ' underline underline-offset-8' : ''}`}
            onClick={(e) => setActive(false)}
          >
            <a href='#about'>
              ABOUT
            </a>
          </p>
        </div>
        <div className="flex hidden md:inline-flex justify-center md:justify-items-end space-x-3 md:mr-5">
          <img src={instagram} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
          <img src={music} alt="Music" />
        </div>
      </div>
      <img src={mail} alt="mailicon" />
    </div>
  );
};

export default Navbar;
