import React from "react";
import { quickLinks } from "../../constants";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiTiktokLine,
  RiYoutubeLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <section className="wrapper flex flex-col justify-start md:justify-center">
      <div className="w-full py-10 lg:py-11 lg:px-10 flex flex-col md:flex-row justify-around flex-wrap">
        <div className="w-56 overflow-hidden">
          <div className="flex">
            <img src="/assets/logo.png" alt="footer logo" className="size-12" />
            <div className="pt-1">
              <h3 className="text-xs md:text-sm lg:text-[37px] font-bold text-blue-300 tracking-widest">
                CLEAN
              </h3>
              <p className="text-[6px] md:text-sm lg:text-base font-semibold tracking-tight">
                Beautiful Properties
              </p>
            </div>
          </div>
          <p className="text-base font-light">
            Because of our resource and results, we are Your Realty Partner for
            Life.
          </p>
          <div className="flex gap-2 my-2">
            <a href="https://facebook.com" target="_blank">
              <RiFacebookLine size={18} />
            </a>
            <a href="https://youtube.com" target="_blank">
              <RiYoutubeLine size={18} />
            </a>
            <a href="https://instagram.com" target="_blank">
              <RiInstagramLine size={18} />
            </a>
            <a href="https://tiktok.com" target="_blank">
              <RiTiktokLine size={18} />
            </a>
          </div>
        </div>
        <ul className="list-none list-inside">
          <li>
            <h2 className="text-base font-semibold">Quick Links</h2>
          </li>
          {quickLinks.map((link, idx) => (
            <li className="py-1" key={link.link + idx}>
              <a
                href={link.link}
                className="text-sm hover:underline transition-all"
              >
                {link.lable}
              </a>
            </li>
          ))}
        </ul>

        <div className="w-full md:w-56">
          <h2 className="text-base font-semibold">Visit Us</h2>
          <p className="text-sm">
            Km. 34, A&M Complex, Elf bus stop, chevron drive, Ajah, Lagos.
            <br />
            <br />
            Call us:
            <br />
            +234 813 953 6456
            <br />
            <br />
            email:
            <br />
            support@cleanbeautifulproperties.com
          </p>
        </div>
      </div>
      <div className="w-full flex-center">
        <p className="text-sm text-gray-500">
          Cleanbeautifulproperties.com since {new Date().getFullYear()}.
        </p>
      </div>
    </section>
  );
};

export default Footer;
