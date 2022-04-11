import EmailForm from '../ui/email-form';

export const CallToAction = ({ texts }) => {
  return (
    <section className="mt-[-160px] bg-white dark:bg-night">
      <div className="container">
        <div
          className="
            bg-primary
            rounded-md
            relative
            overflow-hidden
            z-10
            text-center
            py-[70px]
          "
        >
          <div className="max-w-[770px] mx-auto px-6">
            <h2 className="font-bold text-white text-2xl md:text-[40px] leading-tight mb-10">
              {texts.title}
            </h2>
            <EmailForm texts={texts} />
          </div>

          <div className="absolute bottom-0 left-0 right-0 w-full -z-1">
            <svg
              width="818"
              height="286"
              viewBox="0 0 818 286"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <circle cx="409" cy="409" r="408.5" stroke="url(#paint0_linear_0:1)" />
              <circle cx="409" cy="409" r="349.5" stroke="url(#paint1_linear_0:1)" />
              <defs>
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="-34.5"
                  y1="291.5"
                  x2="851"
                  y2="291.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0.35" />
                  <stop offset="0.218415" stopColor="white" stopOpacity="0" />
                  <stop offset="0.728079" stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" stopOpacity="0.35" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="29.4768"
                  y1="308.45"
                  x2="787.24"
                  y2="308.45"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0.35" />
                  <stop offset="0.218415" stopColor="white" stopOpacity="0" />
                  <stop offset="0.777261" stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" stopOpacity="0.35" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
