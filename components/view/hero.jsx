import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { HeroButtons } from '../ui/hero-buttons';
import { HeroGridDecoration } from '../ui/hero-grid-decoration';

import { ThemeContext } from '../../services/ui/theme-context';

export const Hero = ({ texts }) => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const clients = [
    // {
    //   logo: '/images/brands/artemis.png',
    // },
    {
      whiteLogo: '/serin-white.png',
      darkLogo: '/serin-dark.png',
      url: 'https://www.serin.fr/c',
    },
    {
      whiteLogo: '/c$c-white.png',
      darkLogo: '/c$c-dark.png',
      url: 'https://www.centurysocialclub.com/',
    },
    {
      whiteLogo: '/artemis-white.png',
      darkLogo: '/artemis-dark.png',
      url: 'https://www.artemis.immo/',
    },
  ];

  return (
    <div
      id="home"
      className="relative pt-[120px] lg:pt-[170px] pb-[110px] dark:bg-night bg-white transition-all"
    >
      <div className="container">
        <div className="flex flex-wrap mx-4">
          <div className="w-full lg:w-5/12 px-4">
            <div className="hero-content">
              <h1 className="text-dark dark:text-white font-bold text-title sm:text-[42px] lg:text-[40px] leading-tight mb-2">
                {texts.title}
              </h1>
              <h1 className="text-dark dark:text-white font-bold text-title sm:text-[42px] lg:text-[40px] leading-tight mb-3">
                {texts.titleTwo}
              </h1>
              <p className="text-body leading-loose mb-2 text-dark dark:text-white max-w-[480px]">
                {texts.description}
              </p>
              <p className="text-body leading-loose mb-8 text-dark dark:text-white max-w-[480px]">
                {texts.descriptionTwo}
              </p>
         
              <HeroButtons buttonOneText={texts.button1} />
              <div className="clients pt-16">
                <p className="font-normal text-xs flex items-center text-body-color mb-2">
                  {texts.smallTitle}
                  <span className="w-8 h-[1px] bg-body-color inline-block ml-2"></span>
                </p>
                <div className="flex items-center">
                  {clients.map((client, i) => {
                    return (
                      <div className="w-full py-3 mr-4" key={`${client.logo}-${i}`}>
                        <a target="_blank" href={client.url} rel="noopener noreferrer">
                        {theme === 'light' ? (
                          <Image src={client.darkLogo} alt="ayroui" width="1000" height="570" />
                        ) : (
                          <Image src={client.whiteLogo} alt="ayroui" width="1000" height="570" />
                        )}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/12 px-4"></div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="lg:text-right lg:ml-auto">
              <div className="relative inline-block z-10 pt-11 lg:pt-0">
                <Image
                  className="rounded"
                  src="/me.jpg"
                  alt="hero"
                  width="500"
                  height="350"
                />
                <HeroGridDecoration />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
