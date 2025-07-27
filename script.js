let isWeekend;
let day = "Sundayy";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    isWeekend = false;
    break;
  case "Saturday":
  case "Sunday":
    isWeekend = true;
    break;
  default:
    isWeekeng = "hola";
}

console.log(isWeekend);
