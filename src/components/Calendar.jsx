import React from "react";
//
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isToday,
  startOfMonth,
} from "date-fns"; //
//
import { useMemo } from "react"; //
//
//
////
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//
const WEEKDAYS = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
//
const Calendar = () => {
  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });
  //
  return (
    <div className="calendar-container container">
      <div className="row gx-4">
        <div className="col-4">
          <p className="p-3 fs-5 boorder bg-light">Hello</p>
        </div>
        <div className="col-8">
          <p className="p-3 fs-5 boorder bg-light">Hey</p>
        </div>
        <div className="col-3">
          <p className="p-3 fs-3 boorder bg-light">Hi</p>
        </div>
      </div>
      {/* <h3> Calendar</h3>
      <div className="mb-4 ">
        <h3> {format(currentDate, "MMMM, yyyy")} </h3>
      </div>
      <div className=" container  calendar-body-container ">
        <div className="row row-cols-7  gap-2 no-padding ">
          {WEEKDAYS.map((day) => {
            return (
              <div className="col border border-secondary" key={day}>
                {day}
              </div>
            );
          })}
          {daysInMonth.map((day, index) => {
            return (
              <div
                className="col  border border-secondary p-2 text-center"
                key={index}
              >
                {" "}
                {format(day, "d")}{" "}
              </div>
            );
          })}
        </div>
        <div className="grid  gap-0 no-padding "></div>
      </div> */}
    </div>
  );
};

export default Calendar;
