"use client";

import { useState } from "react";
import { FormControl } from "react-bootstrap";

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date());

  // ✅ Converts a Date object to "YYYY-MM-DD" format for input[type=date]
  const dateObjectToHtmlDateString = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const paddedMonth = month < 10 ? `0${month}` : `${month}`;
    const paddedDay = day < 10 ? `0${day}` : `${day}`;
    return `${year}-${paddedMonth}-${paddedDay}`;
  };

  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>

      {/* ✅ Display the current date */}
      <h3>{startDate.toString()}</h3>
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>

      {/* ✅ Date input */}
      <FormControl
        type="date"
        value={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
      />

      <hr />
    </div>
  );
}
