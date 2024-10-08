import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero my-10 py-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className=" rounded-lg lg:w-1/2 shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Experience exceptional dental care with our expert team. From cavity
            fillings to teeth whitening, we prioritize your comfort and deliver
            bright, healthy smiles.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
