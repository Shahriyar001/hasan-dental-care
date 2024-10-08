import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import DentalCare from "../DentalCare/DentalCare";
import Features from "../Features/Features";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Features></Features>
      <DentalCare></DentalCare>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
