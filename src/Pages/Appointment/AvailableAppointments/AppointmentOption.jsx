import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (user && user?.email) {
      setTreatment(appointmentOption);
      document.getElementById("booking-modal").showModal();
    } else {
      Swal.fire({
        title: "please login or signup first",
        text: "To book an appointment, you have to login first!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login page!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
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
