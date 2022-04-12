/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
function result() {
  let datenow = "sunday";

  let daybefore = "";

  if (datenow == "monday") {
    daybefore = "thursday";
  } else if (datenow == "tuesday") {
    daybefore = "friday";
  } else if (datenow == "wednesday") {
    daybefore = "saturday";
  } else if (datenow == "thursday") {
    daybefore = "sunday";
  } else if (datenow == "friday") {
    daybefore = "monday";
  } else if (datenow == "saturday") {
    daybefore = "tuesday";
  } else {
    daybefore = "wednesday";
  }
  return daybefore;
}

console.log(result());
