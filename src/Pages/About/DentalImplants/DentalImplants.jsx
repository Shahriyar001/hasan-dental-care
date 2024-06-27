const DentalImplants = () => {
  return (
    <div className="hero mx-5 bg-white pt-24 pb-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://dtdental.wpenginepowered.com/wp-content/uploads/2016/11/img7-1.jpg"
          className="lg:w-1/2 md:3/4 ml-10 rounded-lg "
        />
        <div className="text-center lg:w-1/2 ml-10">
          {/* <h1 className="text-5xl font-bold">The Role of Dental Implants</h1> */}
          <h1 className="text-4xl">
            The <span className="font-bold text-primary">Role of Dental</span>{" "}
            Implants
          </h1>
          <p className="py-6 text-zinc-600 text-xl">
            <span className="font-bold">Dental implants</span> replace missing
            teeth, <br />
            providing stability and function similar to natural teeth. <br />
            They support crowns, bridges, and dentures, improving <br />
            oral health, aesthetics, and quality of life.
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

export default DentalImplants;
