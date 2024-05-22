import { format } from "date-fns";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    console.log(date, slot, name, email, phone);
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
          <h3 className="font-bold text-lg">{name}</h3>
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
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered "
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input input-bordered "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered "
            />
            <input
              className="btn btn-accent w-full"
              type="text"
              value="submit"
            />
          </form>
        </div>
      </dialog>
    </>
  );
};

export default BookingModal;
