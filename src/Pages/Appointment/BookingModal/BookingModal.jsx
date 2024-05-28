import { format } from "date-fns";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name: treatmentName, slots } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking confirmed");
          refetch();
        } else {
          setTreatment(null);
          toast.error(data.message);
        }
      });
    console.log(booking);
  };

  return (
    <>
      <dialog id="booking-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{treatmentName}</h3>
          <form
            onSubmit={handleBooking}
            className=" grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered "
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              defaultValue={user?.displayName}
              disabled
              type="text"
              placeholder="Your Name"
              className="input input-bordered "
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input input-bordered "
            />
            <input
              name="phone"
              type="text"
              required
              placeholder="Phone Number"
              className="input input-bordered "
            />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </dialog>
    </>
  );
};

export default BookingModal;
