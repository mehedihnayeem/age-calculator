import React, { useState } from "react";

export default function CalculateAge() {
  const [date, setDate] = useState("");
  const [birthtDate, setBirthDate] = useState("");

  function handleInputChange(e) {
    setBirthDate(e.target.value);
  }

  function handleChange() {
    const birthDate = new Date(birthtDate);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthDate;
    console.log(ageInMilliseconds);

    if (ageInMilliseconds < 0) {
      setDate("Date should not be in the future");
    } else if (isNaN(ageInMilliseconds)) {
      setDate("Please enter a valid date");
    } else {
      const ageDate = new Date(ageInMilliseconds);
      const ageYear = ageDate.getUTCFullYear() - 1970;
      const ageMonth = ageDate.getUTCMonth();
      const ageDay = ageDate.getUTCDate() - 1;

      setDate(() => {
        return `${ageYear} years, ${ageMonth} months, and ${ageDay} days`;
      });
    }
  }

  return (
    <div className="container">
      <h1 className="title">Age Calculator</h1>
      <p className="subtitle">
        Tract Your Life's Progress: Age in Years, Months, and Days!
      </p>
      <input
        type="date"
        id="date"
        htmlFor="birthDate"
        className="date-input"
        onChange={handleInputChange}
      />
      <button className="age-btn" onClick={handleChange}>
        Calculate Age
      </button>
      <h2 className="result-date">{date}</h2>
    </div>
  );
}
