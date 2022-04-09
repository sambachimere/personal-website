import { ServiceCardDecorations } from '../ui/service-card-decorations';

export const ServiceCard = ({ children, title, description }) => {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 px-4">
      <div className="bg-primary group hover:bg-primary shadow-service py-10 px-8 rounded-xl relative z-10 overflow-hidden text-center duration-200 mb-8">
        <div className="mx-auto w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-white text-primary">
          {children}
        </div>
        <h3 className="font-bold text-xl sm:text-2xl lg:text-xl 2xl:text-2xl text-white mb-5">
          {title}
        </h3>
        <p className="font-medium text-white leading-relaxed text-md">{description}</p>
        <ServiceCardDecorations />
      </div>
    </div>
  );
};
