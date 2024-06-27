import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const OralHealth = () => {
  return (
    <div
      className="hero min-h-screen"
      // style={{
      //   backgroundImage:
      //     "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpghttps://static.vecteezy.com/system/resources/previews/036/595/008/non_2x/ai-generated-dental-clinic-advertisment-background-with-copy-space-free-photo.jpg)",
      // }}
      style={{
        backgroundImage:
          "url(https://static.vecteezy.com/system/resources/previews/036/595/008/non_2x/ai-generated-dental-clinic-advertisment-background-with-copy-space-free-photo.jpg)",
      }}
    >
      <div className="hero-overlay bg-amber-200 bg-opacity-20"></div>

      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://dtdental.wpenginepowered.com/wp-content/uploads/2016/11/img3.png"
                className="lg:w-1/2 3/4 rounded-lg"
              />
              <div className="">
                <h1 className="text-5xl text-zinc-700 font-bold">
                  Dental Health-Current Research
                </h1>
                <p className="py-6 text-zinc-600">
                  Current research in dental health focuses on innovative
                  treatments for dental caries, periodontal disease, and oral
                  cancers. Studies explore advanced diagnostic tools, genetic
                  influences on oral health, and the impact of oral hygiene on
                  overall well-being, aiming to improve preventive care and
                  treatment outcomes
                </p>
                <PrimaryButton>Get Started</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OralHealth;
