import Image from 'next/image';

import { TeamPictureDecorations } from '../ui/team-picture-decorations';

export const Team = ({ texts }) => {
  const team = [
    {
      name: texts.nameOne,
      jobTitle: texts.jobTitleOne,
      image: '/images/team/joel-tan.jpeg',
      linkedin: 'https://fr.linkedin.com/in/joeltanwebdev',
    },
    {
      name: texts.nameTwo,
      jobTitle: texts.jobTitleTwo,
      image: '/images/team/abraham-diaw.jpeg',
      linkedin: 'https://fr.linkedin.com/in/abraham-diaw-5a2631174',
    },
    {
      name: texts.nameThree,
      jobTitle: texts.jobTitleThree,
      image: '/images/team/samba.jpeg',
      linkedin: 'https://fr.linkedin.com/in/samba-diaw-098039102',
    },
  ];

  return (
    <section id="team" className="pt-20 lg:pt-[120px] dark:bg-night">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] max-w-[710px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                {texts.smallTitle}
              </span>
              <h2 className=" font-bold text-3xl sm:text-4xl md:text-title text-dark dark:text-white mb-4">
                {texts.title}
              </h2>
              {/* <p className="text-base text-body-color">{texts.subtitle}</p> */}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          {team.map((member, i) => {
            return (
              <div className="w-full md:w-1/2 xl:w-1/4 px-4" key={`${member.name}-${i}`}>
                <div className="max-w-[370px] w-full mx-auto mb-10">
                  <div className="relative rounded-lg overflow-hidden">
                    <Image src={member.image} alt="image" width="1000" height="1220" />
                    <div className="absolute w-full bottom-5 left-0 text-center">
                      <div className="bg-white dark:bg-night relative rounded-lg overflow-hidden mx-5 py-5 px-3">
                        <h3 className="text-base font-semibold text-dark dark:text-white">
                          {member.name}
                        </h3>
                        <div className="flex justify-around items-center">
                          <p className="text-sm text-body-color"> {member.jobTitle}</p>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="nofollow noreferrer"
                            className="w-9 h-9 rounded-full flex items-center justify-center border border-[#E5E8F2] text-body-color hover:bg-primary hover:border-primary hover:text-white"
                            aria-label="social-link"
                            name="social-link"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              className="fill-current"
                            >
                              <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60322V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                            </svg>
                          </a>
                        </div>
                        <TeamPictureDecorations />
                      </div>
                    </div>
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
