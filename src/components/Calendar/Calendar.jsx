import React from "react";
//
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isToday,
  startOfMonth,
  addDays,
  subDays,
} from "date-fns"; //
//
import { useMemo } from "react"; //
//
//
import { clsx } from "clsx";
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

  const startingDayIndex = getDay(firstDayOfMonth);
  //
  return (
    <div className="container calendar-container">
      <div className="card">
        <div className="card-header">
          <h2 className="text-center">{format(currentDate, "MMMM yyyy")}</h2>
        </div>
        <div className=" calendar-datesAndDays gap-2">
          {/* days of the WEEK */}

          {WEEKDAYS.map((day) => {
            return (
              <div className=" border gap-2" key={day}>
                {day}
              </div>
            );
          })}

          {Array.from({ length: startingDayIndex }).map((_, index) => {
            return <div className="border gap-2" key={`empty-${index}`}></div>;
          })}

          {/* days of the MONTH */}

          {daysInMonth.map((day, index) => {
            return (
              <div
                className={clsx("border gap-2", {
                  today: isToday(day),
                })}
                key={index}
              >
                {format(day, "d")}{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
