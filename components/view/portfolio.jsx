import Image from 'next/image';

import { Project } from '../ui/project';

export const Portfolio = ({ texts }) => {
  const filters = [texts.filterTwo, texts.filterThree, texts.filterFour];
  const projects = [
    {
      image: '/images/portfolio/serin.png',
      title: texts.cardOneTitle,
      description: texts.cardOneDescription,
      url: 'https://www.serin.fr/',
    },
    {
      image: '/images/portfolio/commerce.png',
      title: texts.cardNineTitle,
      description: texts.cardNineDescription,
      url: 'https://commerce-hs4p.vercel.app/',
    },
    {
      image: '/images/portfolio/artemis.png',
      title: texts.cardTwoTitle,
      description: texts.cardTwoDescription,
      url: 'https://www.artemis.immo/',
    },
    {
      image: '/images/portfolio/c$c.png',
      title: texts.cardThreeTitle,
      description: texts.cardThreeDescription,
      url: 'https://www.centurysecretclub.io/',
    },
    {
      image: '/images/portfolio/my-nfties.png',
      title: texts.cardFourTitle,
      description: texts.cardFourDescription,
      url: 'https://my-nfties.com/',
    },
    {
      image: '/images/portfolio/r2e-hercule-vs-max.png',
      title: texts.cardFiveTitle,
      description: texts.cardFiveDescription,
      // url: 'https://my-nfties.com/',
    },
    {
      image: '/images/portfolio/benga.png',
      title: texts.cardSixTitle,
      description: texts.cardSixDescription,
      url: 'https://hey-benga.webflow.io/',
    },
    {
      image: '/images/portfolio/kem.png',
      title: texts.cardSevenTitle,
      description: texts.cardSevenDescription,
      url: 'https://kem-384a14.webflow.io/',
    },
    // {
    //   image: '/images/portfolio/crwn-shop.png',
    //   title: texts.cardEightTitle,
    //   description: texts.cardEightDescription,
    //   url: 'https://crwn-s.herokuapp.com/',
    // },
  ];

  return (
    <section id="portfolio" className="pt-[120px] pb-[70px] bg-white dark:bg-night">
      <div className="container">
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full px-4">
            <div className="max-w-[600px] mx-auto text-center mb-[50px]">
              <span className="font-semibold text-lg text-primary block mb-2">
                {texts.smallTitle}
              </span>
              <h2 className="font-bold text-dark dark:text-white text-3xl sm:text-4xl md:text-title mb-5">
                {texts.title}
              </h2>
              {/* <p className="font-medium text-lg text-body-color">{texts.description}</p> */}
            </div>
          </div>
          {/* <div className="w-full px-4">
            <div className="portfolio-buttons flex flex-wrap items-center justify-center mb-12">
              <button
                className="sm:font-semibold text-sm sm:text-base block py-2 px-5 md:mx-2 mb-2 rounded-full text-body-color active"
                data-filter="*"
              >
                {texts.filterOne}
              </button>

              {filters.map((filter, i) => {
                return (
                  <button
                    className="sm:font-semibold text-sm sm:text-base block py-2 px-5 md:mx-2 mb-2 rounded-full text-body-color hover:bg-primary hover:text-white"
                    data-filter=".web"
                    key={`${filter}-${i}`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div> */}
        </div>

        <div className="flex justify-center">
          <div className="w-full px-4 lg:px-0">
            <div className="items-wrapper flex flex-wrap justify-center mx-[-16px]">
              {projects.map((project, i) => {
                return (
                  <Project
                    image={project.image}
                    url={project.url}
                    title={project.title}
                    description={project.description}
                    key={`${project.title}-${i}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5">
            <div className="bg-primary h-1 w-[1px] mb-1" />
            <div className="bg-primary h-1 w-[1px] mb-1" />
            <div className="bg-primary h-1 w-[1px] mb-1" />
            <div className="bg-primary h-1 w-[1px] mb-1" />
            <div className="bg-primary h-1 w-[1px] mb-1" />
            <div className="bg-primary h-1 w-[1px] mb-1" />
            <div className="bg-primary h-1 w-[1px] mb-1" />
            <div className="bg-primary h-1 w-[1px] mb-1" />
          </div>
          <div>
            <h1 className="dark:text-white text-body font-light">
              {texts.bottomText}{' '}
              <a
                href="https://github.com/sambachimere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                github :)
              </a>
            </h1>
            <h1 className="dark:text-white text-body font-light">{texts.bottomTextOne}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
