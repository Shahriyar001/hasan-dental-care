import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { useState } from "react";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header className="my-6">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="chair"
            className="max-w-md ml-6 rounded-lg shadow-2xl"
          />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
