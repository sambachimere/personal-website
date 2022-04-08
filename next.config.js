/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // providing the locales supported by your application
    locales: ['en', 'fr'],
    //  default locale used when the non-locale paths are visited
    defaultLocale: 'fr',
  },
};

module.exports = nextConfig;
