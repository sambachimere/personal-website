import Image from 'next/image';

export const Project = ({ image, url, title, description }) => {
  return (
    <div className="w-full md:w-1/2 px-4 item">
      <div className="mb-12">
        <div className="relative group mb-8 overflow-hidden shadow-service border-[0.5px]">
          <Image src={image} alt="image" width="1000" height="570" />
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            // className="glightbox w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full"
          >
            <div className="absolute w-full h-full top-0 left-0 bg-primary bg-opacity-[17%] flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              {/* <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
              </svg> */}
            </div>
          </a>
        </div>
        <h3 className="mt-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={url}
            className="font-semibold text-black dark:text-white hover:text-primary text-xl inline-block mb-3"
          >
            {title}
          </a>
        </h3>
        <p className="font-medium text-base text-body-color">{description}</p>
      </div>
    </div>
  );
};
