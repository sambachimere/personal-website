import { AboutCircleDecoration } from '../ui/about-circle-decoration';

export const About = ({ texts }) => {
  return (
    <section id="about" className="pt-[145px] pb-[120px] relative z-10 dark:bg-night">
      <div className="container">
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full lg:w-1/2 xl:w-7/12 px-4 mb-8 lg:mb-0">
            <span className="font-bold text-primary d-text-lg md:text-xlud-mb-3">
              {texts.smallTitle}
            </span>
            <h2
              className="
              max-w-[700px] font-bold text-dark text-3xl
              sm:text-4xl
              md:text-title
              leading-tight
              sm:leading-tight
              md:leading-tight
              mb-5
              dark:text-white
            "
            >
              {texts.title}
            </h2>
            {/* <p className="max-w-[570px] font-medium text-base text-body-color">
              {texts.description}
            </p> */}
          </div>
          <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
            <h3 className="font-semibold text-dark text-2xl md:text-3xl mb-6 dark:text-white">
              {texts.mediumTitle}
            </h3>
            <p className="font-medium text-base text-body-color mb-10">{texts.secondDescription}</p>
            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/company/iteru-agency/"
                target="_blank"
                rel="nofollow noreferrer"
                className="w-9 h-9 mr-3 rounded-full flex items-center justify-center border border-[#E5E8F2] text-body-color hover:bg-primary hover:border-primary hover:text-white"
                aria-label="social-link"
                name="social-link"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" className="fill-current">
                  <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60322V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <AboutCircleDecoration />
    </section>
  );
};
