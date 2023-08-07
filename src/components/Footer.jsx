import facebook from "../assets/dark_facebook_icon.svg";
import instagram from "../assets/dark_instagram_icon.svg";
import twitter from "../assets/dark_twitter_icon.svg";
import music from "../assets/dark_music_icon.svg";
import mail from "../assets/dark_mail_icon.svg";

export default function Footer() {
  return (
    <footer className="bg-[#FC2682] w-full flex flex-col md:flex-row items-center justify-between p-2 md:p-10 gap-4 md:gap-0">
      <div>
        <p className="text-base text-xs md:text-sm text-center text-gray-100 md:order-1 md:mt-0">
          COPYRIGHT FAM COLLECTIVE 2023. ALL RIGHTS RESERVED
        </p>
      </div>

      <div className="flex space-x-3">
        <img src={instagram} alt="Instagram" />
        <img src={twitter} alt="Twitter" />
        <img src={music} alt="Music" />
        <img src={mail} alt="Mail" />
      </div>

      <div>
        <p className="text-base text-xs md:text-sm text-center  text-gray-100 md:order-3 md:mt-0">
          TERMS AND CONDITIONS / PRIVACY POLICY
        </p>
      </div>
    </footer>
  );
}
