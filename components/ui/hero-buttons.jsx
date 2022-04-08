export const HeroButtons = ({ buttonOneText, buttonTwoText }) => {
  return (
    <ul className="flex flex-wrap items-center">
      <li>
        <a
          href="#contact"
          className="py-4 px-10 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-white text-base bg-primary hover:bg-opacity-90 font-normal rounded-full "
        >
          {buttonOneText}
        </a>
      </li>
      <li>
        {/* <a
        href="javascript:void(0)"
        className="
          py-4 px-10
          lg:px-8
          xl:px-10
          inline-flex
          items-center
          justify-center
          text-center
          text-base
          font-normal
          text-body-color
          hover:text-primary
        "
      >
        <span className="mr-2">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="11" fill="#3056D3" />
            <rect
              x="6.90906"
              y="13.3636"
              width="8.18182"
              height="1.63636"
              fill="white"
            />
            <rect x="10.1818" y="6" width="1.63636" height="4.09091" fill="white" />
            <path d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z" fill="white" />
          </svg>
        </span>
        {buttonTwoText}
      </a> */}
      </li>
    </ul>
  );
};
