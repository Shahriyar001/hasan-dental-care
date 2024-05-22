import { format } from "date-fns";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
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
          <form className=" grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered "
            />
            <select className="select select-bordered w-full">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered "
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered "
            />
            <input
              type="text"
              placeholder="Type here"
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
