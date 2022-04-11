import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FooterCircleDecoration } from '../ui/footer-circle-decoration';
import { FooterGridDecoration } from '../ui/footer-grid-decoration';
import { TwitterLogo } from '../ui/twitter-logo';

import { ThemeContext } from '../../services/ui/theme-context';

export const Footer = ({ texts }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const columnOne = [
    {
      text: texts.columnOneTextOne,
      href: 'mailto:sambachimerediaw@gmail.com',
    },
    {
      text: texts.columnOneTextTwo,
      href: '',
    },
  ];
  const columnTwo = [
    // {
    //   text: texts.columnTwoTextOne,
    //   href: '#about',
    // },
    {
      text: texts.columnTwoTextTwo,
      href: '#services',
    },
    {
      text: texts.columnTwoTextThree,
      href: '#portfolio',
    },
    {
      text: texts.columnTwoTextFour,
      href: '#clients',
    },
    {
      text: texts.columnTwoTextFive,
      href: '#contact',
    },
  ];

  return (
    <footer className="bg-black pt-[100px] pb-12 relative z-10">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-3/12 px-4">
            <div className="mb-10">
              <div className="mb-7 relative right-[105px] lg:right-[100px] 2xl:right-[105px]">
                <Link href="/" passHref>
                  <Image
                    src="/sd-logo-white-cropped.svg"
                    alt="logo"
                    width="300"
                    height="100"
                    passHref
                  />
                </Link>
              </div>
              <ul>
                {columnOne.map((elem, i) => {
                  return (
                    <li key={`elem-${i}`}>
                      <a
                        href={elem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-base text-white mb-3 hover:text-primary"
                      >
                        {elem.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-3/12 px-4 flex md:justify-center">
            <div className="mb-10">
              <h2 className="mb-5 text-2xl font-bold text-white dark:text-white">
                {texts.columnTwoTitle}
              </h2>
              <ul>
                {columnTwo.map((elem, i) => {
                  return (
                    <li key={`elem-${i}`}>
                      <a
                        href={elem.href}
                        className="inline-block text-base tracking-wider text-white mb-3 hover:text-primary"
                      >
                        {elem.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-12 border-t border-white border-opacity-10">
          <div className="flex items-center justify-center mb-5">
            <TwitterLogo />
          </div>
          <p className="font-medium text-base text-body-color text-center">{texts.bottomText}</p>
        </div>
      </div>
      <FooterCircleDecoration />
      <FooterGridDecoration />
    </footer>
  );
};
