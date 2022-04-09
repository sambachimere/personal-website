import Image from 'next/image';

import { ServiceCard } from '../ui/service-card';
import { ServiceCardDecorations } from '../ui/service-card-decorations';

export const Services = ({ texts }) => {
  const services = [
    {
      cardTitle: texts.cardOneTitle,
      cardDescription: texts.cardOneDescription,
      cardImage: '/images/services/image-1.jpg',
    },
    {
      cardTitle: texts.cardTwoTitle,
      cardDescription: texts.cardTwoDescription,
      cardImage: '/images/services/image-2.jpg',
    },
    {
      cardTitle: texts.cardThreeTitle,
      cardDescription: texts.cardThreeDescription,
      cardImage: '/images/services/image-3.jpg',
    },
  ];

  return (
    <section id="services" className="bg-black pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
      <div className="container">
        <div className="flex flex-wrap items-end -mx-4 mb-10 lg:mb-[60px]">
          {/* <div className="w-full lg:w-8/12 px-4"> */}
          <div className="w-full lg:w-full px-4">
            <div className="max-w-[1450px] mb-5">
              <span className="font-semibold text-lg text-primary mb-2 block">
                {texts.smallTitle}
              </span>
              <h2 className="font-extrabold text-3xl sm:text-4xl sm:leading-tight md:text-[40px] text-white">
                {texts.title}
              </h2>
            </div>
          </div>
          {/* 
            <div className="w-full lg:w-4/12 px-4">
              <div className="flex lg:justify-end mb-5">
                <a href="javascript:void(0)" className="text-lg font-medium text-white underline hover:text-primary">
                  {texts.buttonRedirection}
                </a>
              </div>
            </div> 
          */}
        </div>
        <div className="flex flex-wrap mx-[-16px]">
          <ServiceCard title={texts.cardOneTitle} description={texts.cardOneDescription}>
            <Image src="/web-development.svg" width="43" height="43" alt="service-card" />
          </ServiceCard>
          <ServiceCard title={texts.cardTwoTitle} description={texts.cardTwoDescription}>
            <Image src="/web-app.svg" width="43" height="43" alt="service-card" />
          </ServiceCard>
          <ServiceCard title={texts.cardThreeTitle} description={texts.cardThreeDescription}>
            <Image src="/smartphone-new.svg" width="43" height="43" alt="service-card" />
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};
