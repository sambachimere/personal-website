export const BackToTop = () => {
  return (
    <a
      href="javascript:void(0)"
      className="
      hidden
      items-center
      justify-center
      bg-primary
      text-white
      w-10
      h-10
      rounded-md
      fixed
      bottom-8
      right-8
      left-auto
      z-[999]
      hover:shadow-signUp
      transition duration-300
      back-to-top
    "
    >
      <span
        className="
        w-3
        h-3
        border-t
        border-l
        border-white
        rotate-45
        mt-[6px]
      "
      ></span>
    </a>
  );
};
