const Dentistry = () => {
  return (
    <div>
      <div className="text-center m-5 my-5">
        <h1 className="text-5xl font-bold">
          Pain <span className="text-cyan-500">Free Dentistry</span>
        </h1>
      </div>

      <div className="grid gap-3 lg:p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 ml-8">
        <div className="card card-compact bg-base-100 w-96 border border-1">
          <figure>
            <img
              src="https://dtdental.wpenginepowered.com/wp-content/uploads/2017/01/easy-ways3.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h4 className="card-title"> DENTAL EXPLORERS & DRILL</h4>
            <p className="">
              Dental explorers detect cavities, while drills, invented in 1864,
              efficiently remove decay for restoration procedures
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 border border-1">
          <figure>
            <img
              src="https://dtdental.wpenginepowered.com/wp-content/uploads/2017/01/easy-ways1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h4 className="card-title"> MIRROR, MIRROR ON THE ROD…</h4>
            <p className="">
              once dreaded, has become easier with modern techniques. Dental
              checkups help prevent cavities and maintain oral health.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 border border-1">
          <figure>
            <img
              src="https://dtdental.wpenginepowered.com/wp-content/uploads/2017/01/easy-ways2.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h4 className="card-title"> DENTAL EXTRACTION PROCEDURE</h4>
            <p className="">
              Dental extraction involves removing a tooth from its socket due to
              decay, infection, or overcrowding. Post-care ensures proper
              healing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dentistry;
