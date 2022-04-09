import React from 'react';
import { useRouter } from 'next/router';
import texts from './assets/texts.json';

import { ThemeProvider } from '../services/ui/theme-context';
import { Navbar } from '../components/ui/navbar';
import { Hero } from '../components/view/hero';
import { About } from '../components/view/about';
import { Services } from '../components/view/services';
import { Portfolio } from '../components/view/portfolio';
import { Clients } from '../components/view/clients';
import { CallToAction } from '../components/view/call-to-action';
import { Team } from '../components/view/team';
import { Pricing } from '../components/view/pricing';
import { Testimonials } from '../components/view/testimonials';
import { Blog } from '../components/view/blog';
import { Contact } from '../components/view/contact';
import { Footer } from '../components/view/footer';
// import { BackTop } from '../components/ui/back-to-top'

const Home = () => {
  const { locale, locales, asPath } = useRouter();

  const [navbarTexts, setNavbarTexts] = React.useState('');
  const [heroTexts, setHeroTexts] = React.useState('');
  const [aboutTexts, setAboutTexts] = React.useState('');
  const [servicesTexts, setServicesTexts] = React.useState('');
  const [portfolioTexts, setPortfolioTexts] = React.useState('');
  const [clientsTexts, setClientsTexts] = React.useState('');
  const [callToActionTexts, setCallToActionTexts] = React.useState('');
  const [teamTexts, setTeamTexts] = React.useState('');
  const [pricingTexts, setPricingTexts] = React.useState('');
  const [testimonialsTexts, setTestimonialsTexts] = React.useState('');
  const [blogTexts, setBlogTexts] = React.useState('');
  const [contactTexts, setContactTexts] = React.useState('');
  const [footerTexts, setFooterTexts] = React.useState('');

  React.useEffect(() => {
    // const { theme, setTheme } = React.useContext(ThemeContext);

    const navbarT = texts.navbar.filter((t) => t.locale === locale);
    const heroT = texts.hero.filter((t) => t.locale === locale);
    const aboutT = texts.about.filter((t) => t.locale === locale);
    const servicesT = texts.services.filter((t) => t.locale === locale);
    const portfolioT = texts.portfolio.filter((t) => t.locale === locale);
    const clientsT = texts.clients.filter((t) => t.locale === locale);
    const callToActionT = texts.callToAction.filter((t) => t.locale === locale);
    const teamT = texts.team.filter((t) => t.locale === locale);
    const pricingT = texts.pricing.filter((t) => t.locale === locale);
    const testimonialsT = texts.testimonials.filter((t) => t.locale === locale);
    const blogT = texts.blog.filter((t) => t.locale === locale);
    const contactT = texts.contact.filter((t) => t.locale === locale);
    const footerT = texts.footer.filter((t) => t.locale === locale);

    setNavbarTexts(navbarT[0]);
    setHeroTexts(heroT[0]);
    setAboutTexts(aboutT[0]);
    setServicesTexts(servicesT[0]);
    setPortfolioTexts(portfolioT[0]);
    setClientsTexts(clientsT[0]);
    setCallToActionTexts(callToActionT[0]);
    setTeamTexts(teamT[0]);
    setPricingTexts(pricingT[0]);
    setTestimonialsTexts(testimonialsT[0]);
    setBlogTexts(blogT[0]);
    setContactTexts(contactT[0]);
    setFooterTexts(footerT[0]);

    console.log('TEXTS ARE : ', heroT[0]);
  }, [locale]);

  return (
    <ThemeProvider>
      <Navbar texts={navbarTexts} />
      <Hero texts={heroTexts} />
      {/* <About texts={aboutTexts} /> */}
      <Services texts={servicesTexts} />
      <Portfolio texts={portfolioTexts} />
      <Clients texts={clientsTexts} />
      <CallToAction texts={callToActionTexts} />
      {/* <Team texts={teamTexts} /> */}
      {/* <Testimonials texts={testimonialsTexts} /> */}
      <Contact texts={contactTexts} />
      <Footer texts={footerTexts} />
      {/* <BackTop /> */}
    </ThemeProvider>
  );
};

export default Home;
