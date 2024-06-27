const ImplantsDentistry = () => {
  return (
    <div className="hero mr-10 bg-white pt-10 pb-10">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://dtdental.wpenginepowered.com/wp-content/uploads/2016/11/img10.jpg"
          className="lg:w-1/2 md:3/4 ml-10 rounded-lg "
        />
        <div className="text-center lg:w-1/2 ml-10">
          {/* <h1 className="text-5xl font-bold">The Role of Dental Implants</h1> */}
          <h1 className="text-4xl">
            <span className="font-bold text-primary"> Implants</span> in
            Dentistry
          </h1>
          <p className="py-6 text-zinc-600 mr-5 text-xl">
            {/* Dental implants are artificial tooth roots made of titanium or
            ceramic, surgically inserted into the jawbone to support prosthetic
            teeth. They offer a permanent solution for missing teeth, enhancing
            oral function and aesthetics. Implants prevent bone loss, maintain
            facial structure, and improve the overall quality of life */}
            <span className="font-bold">Dental implants</span> are artificial
            tooth teeth, <br />
            roots made of titanium or ceramic, surgically inserted into
            <br />
            the jawbone to support prosthetic teeth. They offer
            <br />a permanent solution for missing teeth.
            {/* Implants prevent bone loss and maintain facial structure */}
          </p>
          <button className="btn btn-lg py-5 btn-outline btn-primary  btn-wide">
            PURCHESE THEM
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImplantsDentistry;
