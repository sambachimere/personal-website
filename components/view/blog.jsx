import Image from 'next/image';

export const Blog = ({ texts }) => {
  const blogItems = [
    {
      blogTitle: texts.blogOneTitle,
      blogDescription: texts.blogOneDescription,
      thumbnail: '/images/news/news-1.jpg',
    },
    {
      blogTitle: texts.blogSecondTitle,
      blogDescription: texts.blogSecondDescription,
      thumbnail: '/images/news/news-2.jpg',
    },
    {
      blogTitle: texts.blogThirdTitle,
      blogDescription: texts.blogThirdDescription,
      thumbnail: '/images/news/news-3.jpg',
    },
  ];

  return (
    <section id="news" className="pt-[120px] pb-20 bg-[#f8f9ff]">
      <div className="container">
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full px-4">
            <div className="max-w-[600px] mx-auto text-center mb-[50px]">
              <span
                className="
                font-semibold text-lg text-primary block mb-2
              "
              >
                {texts.smallTitle}
              </span>
              <h2
                className="
                font-bold text-black text-3xl
                sm:text-4xl
                md:text-[45px]
                mb-5
              "
              >
                {texts.title}
              </h2>
              <p className="font-medium text-lg text-body-color">{texts.description}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {blogItems.map((blogItem, i) => {
            return (
              <div className="w-full lg:w-1/2 xl:w-1/3 px-4" key={`${blogItem.blogTitle}-${i}`}>
                <div
                  className="
                bg-white
                rounded-xl
                overflow-hidden
                mb-10
                shadow-blog
              "
                >
                  <a href="blog-details.html" className="block">
                    <Image src={blogItem.thumbnail} alt="image" width="1000" height="570" />
                  </a>
                  <div className="py-8 px-6 sm:px-11">
                    <h3>
                      <a
                        href="blog-details.html"
                        className="
                      font-semibold text-xl text-black
                      hover:text-primary
                      block mb-3 truncate
                    "
                      >
                        {blogItem.blogTitle}
                      </a>
                    </h3>
                    <p className="font-medium text-body-color text-base mb-4">
                      {blogItem.blogDescription}
                    </p>
                    <a
                      href="blog-details.html"
                      className="
                    font-medium text-sm text-black underline
                    hover:text-primary hover:no-underline
                  "
                    >
                      {texts.blogButtonText}
                    </a>
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
