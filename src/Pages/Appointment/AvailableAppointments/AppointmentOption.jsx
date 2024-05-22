const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;

  const handleClick = () => {
    setTreatment(appointmentOption);
    document.getElementById("booking-modal").showModal();
  };

  return (
    <div className="card shadow-xl">
      <div className="card-body my-6 text-center">
        <h2 className="text-2xl font-bold text-secondary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          {/* <button className="btn btn-primary text-white">
            Book Appointment
          </button> */}
          <button
            disabled={slots.length === 0}
            className="btn  btn-primary text-white"
            onClick={() => handleClick()}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
