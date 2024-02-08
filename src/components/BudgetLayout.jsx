import React from "react";

import { format } from "date-fns";
import { useState } from "react";
import Button from "./Calendar/Button";

// import components
import Calendar from "./Calendar/Calendar";
import Calexander_2 from "./Calendar/Calexander_2";

//
const BudgetLayout = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSetToday = () => setCurrentDate(new Date());

  return (
    <div className="mt-16 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <p>
          <strong>Selected Date: </strong>
          {format(currentDate, "dd LLLL yyyy")}
        </p>

        <Button onClick={handleSetToday}>Today</Button>
      </div>

      <Calexander_2 value={currentDate} onChange={setCurrentDate} />
    </div>
  );
};

export default BudgetLayout;
