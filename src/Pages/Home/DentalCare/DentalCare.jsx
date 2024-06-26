import picture from "../../../assets/images/hasan.jpg";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const DentalCare = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:p-8 lg:m-8">
          <img src={picture} className="w-full rounded-lg shadow-2xl" />
        </div>
        <div className="lg:w-1/2 lg:p-2 m-2">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
