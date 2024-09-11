const time = document.querySelector(".time");
const date = document.querySelector(".date");

/**
 * @param {Date} date
 */
const formatTime = (date) => {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 12;

  // The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.
  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
};

/**
 * @param {Date} date
 */
const formatDate = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
};

setInterval(() => {
  const now = new Date();

  time.textContent = formatTime(now);
  date.textContent = formatDate(now);
}, 200);
