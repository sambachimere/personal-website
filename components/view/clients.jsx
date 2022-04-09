import Image from 'next/image';

export const Clients = ({ texts }) => {
  const clients = [
    {
      logo: '/images/brands/artemis-white.png',
      url: 'https://www.artemis.immo/',
    },
    {
      logo: '/c$c-white.png',
      url: 'https://www.centurysocialclub.com/',
    },
    {
      logo: '/images/brands/serin-white.png',
      url: 'https://www.serin.fr/',
    },
    {
      logo: '/r2e-logo.webp',
      url: 'https://www.renaultgroup.com/en/',
    },
    {
      logo: '/benga-logo.svg',
      url: 'https://hey-benga.webflow.io/',
    },
  ];

  return (
    <section id="clients" className="pt-20 pb-[250px] bg-black relative">
      <div className="container">
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full px-4">
            <div className="max-w-[1000px] mx-auto mb-12 text-center">
              <h2 className="font-bold text-3xl md:text-7xl text-white mb-4">{texts.title}</h2>
              {/* <p className="font-medium text-lg text-body-color">{texts.description}</p> */}
            </div>
          </div>
          <div className="w-full px-4">
            <div
              className="flex flex-wrap items-center justify-center wow fadeInUp"
              data-wow-delay=".1s"
            >
              {clients.map((client, i) => {
                return (
                  <a
                    href={client.url}
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="
                      flex items-center justify-center max-w-[120px]
                      lg:max-w-[130px]
                      xl:max-w-[150px]
                      2xl:max-w-[160px]
                      mx-3
                      sm:mx-4
                      xl:mx-6
                      2xl:mx-8
                      py-[15px] grayscale
                      hover:grayscale-0
                      opacity-60
                      hover:opacity-100
                      transition
                    "
                    key={`${client.url}-${i}`}
                  >
                    <Image src={client.logo} alt={client.logo} width="1000" height="570" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
