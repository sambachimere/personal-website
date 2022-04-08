import Image from 'next/image';

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
        <div className="flex flex-wrap justify-center -mx-4">
          {services.map((service, i) => {
            return (
              <div className="w-full md:w-1/2 lg:w-1/3 px-4" key={`${service.cardTitle}-${i}`}>
                <div className="bg-white dark:bg-grey mb-10">
                  <a href="javascript:void(0)" className="block w-full">
                    <Image src={service.cardImage} alt="image" width="1000" height="570" />
                  </a>
                  <div className="p-5 sm:p-11 md:p-5 lg:px-6 xl:p-5 2xl:p-5">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="font-bold text-dark dark:text-white text-lg sm:text-xl hover:text-primary block mb-4"
                      >
                        {service.cardTitle}
                      </a>
                    </h3>
                    {/* <p className="text-base text-body-color leading-relaxed pb-7 mb-6 border-b border-[#F3F3F3]"> */}
                    <p className="text-base text-body-color leading-relaxed">
                      {service.cardDescription}
                    </p>

                    {/* <a
                      href="javascript:void(0)"
                      className="font-medium text-body-color hover:text-primary text-base inline-flex items-center"
                    >
                      {texts.cardButtonTitle}
                      <span className="ml-3">
                        <svg width="20" height="8" viewBox="0 0 20 8" className="fill-current">
                          <path d="M19.2188 2.90632L17.0625 0.343819C16.875 0.125069 16.5312 0.0938193 16.2813 0.281319C16.0625 0.468819 16.0313 0.812569 16.2188 1.06257L18.25 3.46882H0.9375C0.625 3.46882 0.375 3.71882 0.375 4.03132C0.375 4.34382 0.625 4.59382 0.9375 4.59382H18.25L16.2188 7.00007C16.0313 7.21882 16.0625 7.56257 16.2813 7.78132C16.375 7.87507 16.5 7.90632 16.625 7.90632C16.7813 7.90632 16.9375 7.84382 17.0313 7.71882L19.1875 5.15632C19.75 4.46882 19.75 3.53132 19.2188 2.90632Z" />
                        </svg>
                      </span>
                    </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
