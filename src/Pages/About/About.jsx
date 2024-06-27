import DentalImplants from "./DentalImplants/DentalImplants";
import MouthWash from "./Mouthwash/MouthWash";
import Dentistry from "./dentistry/Dentistry";
import OralHealth from "./oralHealth/OralHealth";

const About = () => {
  return (
    <div className="ml-6">
      <Dentistry />
      <OralHealth />
      <MouthWash />
      <DentalImplants />
    </div>
  );
};

export default About;
