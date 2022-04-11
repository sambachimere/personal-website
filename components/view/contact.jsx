import ContactForm from '../ui/contact-form';

export const Contact = ({ texts }) => {
  return (
    <section id="contact" className="py-[120px] bg-white dark:bg-night">
      <div className="container">
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full px-4">
            <div className="max-w-[600px] mx-auto text-center mb-[50px]">
              <span className="font-semibold text-lg text-primary block mb-2">
                {texts.smallTitle}
              </span>
              <h2 className="font-bold text-dark dark:text-white text-3xl sm:text-4xl md:text-[45px] mb-5">
                {texts.title}
              </h2>
              {/* <p className="font-medium text-lg text-body-color">{texts.subtitle}</p> */}
            </div>
          </div>
        </div>
        <div className="flex justify-center -mx-4">
          <div className="w-full lg:w-9/12 px-4">
            <ContactForm texts={texts} />
          </div>
        </div>
      </div>
    </section>
  );
};
