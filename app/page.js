import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Hero from "../components/Hero";
import MainServices from "../components/MainServices";
// import About from "../components/About";
// import Services from "../components/Services";
import AgencyBenefits from "../components/AgencyBenefits";
import Excellence from "../components/Excellence";
import CommitmentSection from "../components/CommitmentSection";
import WhyChooseUs from "../components/WhyChooseUs";
import AccreditationSlider from "../components/AccreditationSlider";
import CounterSection from "../components/CounterSection";
// import Regions from "../components/Regions";
import BlogSection from "../components/BlogSection";
// import CitiesSlider from "../components/CitiesSlider";
import Testimonials from "../components/Testimonials";
import ContactBanner from "../components/ContactBanner";
import Contact from "../components/Contact";
import ClientSuccess from "../components/ClientSuccess";
import Footer from "../components/Footer";
import Script from "../components/Script";
import OurGuards from "../components/OurGuards";


export default function Home() {
  return (
    <>
      <Header />
      <MobileMenu />
      <Hero />
      <MainServices />
      <AgencyBenefits />
      <CommitmentSection />
      {/* <About /> */}
      {/* <Services /> */}
      <Excellence />
      <WhyChooseUs />
      <AccreditationSlider />
      <CounterSection />
      {/* <Regions /> */}
       <Contact />
      {/* <CitiesSlider /> */}
       <BlogSection />
      <Testimonials />
      <ContactBanner />
      <OurGuards />
      <ClientSuccess />
      <Footer />
      <Script />
    </>
  );
}
