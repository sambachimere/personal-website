import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import ThemeToggler from './theme-toggler';
import { ThemeContext } from '../../services/ui/theme-context';

import styles from '../../styles/Home.module.css';

const BURGER_MENU_BUTTON = [0, 1, 3];

export const Navbar = ({ texts }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const { locale, locales, asPath } = useRouter();
  const [visibleMenu, setVisibleMenu] = useState(false);

  function handleOnBurgerClick() {
    setVisibleMenu((current) => !current);
  }

  const navs = [
    // {
    //   text: texts.navOne,
    //   href: '#about',
    // },
    {
      text: texts.navTwo,
      href: '#services',
    },
    {
      text: texts.navThree,
      href: '#portfolio',
    },
    {
      text: texts.navFour,
      href: '#clients',
    },
    // {
    //   text: texts.navFive,
    //   href: '#testimonial',
    // },
    {
      text: texts.navSix,
      href: '#contact',
    },
  ];

  return (
    <header className="header bg-transparent absolute top-0 left-0 z-40 w-full flex items-center transition pt-5">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="w-40 max-w-full">
            <Link href="/" className="header-logo w-full block py-6 lg:py-8" passHref>
              <Image
                src={`${theme === 'light' ? '/sd-logo-black.svg' : '/sd-logo-white.svg'}`}
                alt="logo"
                className="w-full"
                width="300"
                height="100"
              />
            </Link>
          </div>
          <div className="flex px-4 justify-between items-center w-full">
            <div>
              <button
                onClick={handleOnBurgerClick}
                id="navbarToggler"
                name="navbarToggler"
                aria-label="navbarToggler"
                className="block absolute right-4 top-1/2 translate-y-[-50%] lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
              >
                {BURGER_MENU_BUTTON.map((item, i) => {
                  return (
                    <span
                      className="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white"
                      key={`${item}-${i}`}
                    ></span>
                  );
                })}
              </button>
              <nav
                id="navbarCollapse"
                className="hidden absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full lg:block lg:static lg:shadow-none"
              >
                <ul className="lg:flex">
                  {navs.map((nav, i) => {
                    return (
                      <li className="relative group" key={`${nav}-${i}`}>
                        <a
                          href={nav.href}
                          className="menu-scroll text-base text-black dark:text-white group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0"
                        >
                          {nav.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <nav
                id="navbarCollapse"
                className={`${
                  !visibleMenu ? 'hidden' : ''
                } mt-5 absolute lg:hidden py-5 lg:py-0 lg:px-4 xl:px-6 bg-white dark:bg-primary lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full`}
              >
                <ul className="lg:flex">
                  {navs.map((nav, i) => {
                    return (
                      <li className="relative group" key={`${nav}-${i}`}>
                        <a
                          href={nav.href}
                          className="menu-scroll text-base text-black dark:text-white group-hover:text-primary dark:group-hover:text-white py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0"
                        >
                          {nav.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <ThemeToggler />
            <div className={styles.navbarSwitchLanguage}>
              {locales.map((l, i) => {
                return (
                  <span
                    key={i}
                    className={`${l === locale ? styles.selected : ''} dark:text-white`}
                  >
                    <Link href={asPath} locale={l}>
                      {l}
                    </Link>
                  </span>
                );
              })}
            </div>
            <div className="sm:flex justify-end hidden pr-16 lg:pr-0">
              <a
                href="#contact"
                className="text-base font-bold text-white bg-primary rounded-full py-3 px-8 md:px-9 lg:px-8 xl:px-9 hover:shadow-signUp hover:bg-opacity-90 transition ease-in-out duration-300"
              >
                {texts.callToActon}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
