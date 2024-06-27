import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MouthWash = () => {
  return (
    <div
      className="hero min-h-screen mt-20"
      // style={{
      //   backgroundImage:
      //     "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpghttps://static.vecteezy.com/system/resources/previews/036/595/008/non_2x/ai-generated-dental-clinic-advertisment-background-with-copy-space-free-photo.jpg)",
      // }}
      style={{
        backgroundImage:
          "url(https://www.laifentech.com/cdn/shop/articles/dental-health-products.webp?v=1708657479)",
      }}
    >
      <div className="hero-overlay bg-cyan-600 bg-opacity-80"></div>

      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <div className="hero h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://dtdental.wpenginepowered.com/wp-content/uploads/2016/11/img4.png"
                className="lg:w-1/2 3/4 rounded-lg"
              />
              <div className="text-right">
                <h1 className="text-5xl font-bold">
                  Oral Hygiene - The Role of Mouthwash
                </h1>
                <p className="py-6 ">
                  Mouthwash enhances oral hygiene by reducing plaque,
                  gingivitis, and bad breath. It often contains fluoride,
                  chlorhexidine, and cetylpyridinium to combat bacteria and
                  promote oral health. Used alongside brushing and flossing, it
                  supports comprehensive oral care
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

export default MouthWash;
