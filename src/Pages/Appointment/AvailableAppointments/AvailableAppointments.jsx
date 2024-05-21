import { format } from "date-fns";

const AvailableAppointments = ({ selectedDate }) => {
  return (
    <section className="mt-16">
      <p className="text-center text-secondary font-bold">
        Available Appointment on {format(selectedDate, "PP")}
      </p>
    </section>
  );
};

export default AvailableAppointments;
