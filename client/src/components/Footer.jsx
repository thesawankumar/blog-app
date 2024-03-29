/* eslint-disable no-unused-vars */
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logodark from "../assets/logo-dark.png";
import { useSelector } from "react-redux";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import { useEffect, useState } from "react";
export default function FooterCom() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme } = useSelector((state) => state.theme);
  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);
  return (
    <Footer container className="border border-t-5 border-emerald-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <img
                src={isDarkMode ? logodark : logo}
                alt="logo"
                className="w-16 rounded-xl"
              />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sawan Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/sawan1k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Sawan Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="hover:text-red-500"
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="hover:text-red-500"
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className="hover:text-red-500"
            />
            <Footer.Icon
              href="https://github.com/sawan1k"
              icon={BsGithub}
              className="hover:text-red-500"
            />
            <Footer.Icon
              href="#"
              icon={BsDribbble}
              className="hover:text-red-500"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
