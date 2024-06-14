// function getTimeOfDay(hour, minutes) {
//     const dayStart = 6;
//     const nightStart = 18;

//     if (hour >= dayStart && hour < nightStart) {
//         return "daytime";
//     } else {
//         return "nighttime";
//     }
// }

// function getDayType(day) {
//     if (day === 0 || day === 6) {
//         return "weekend";
//     } else {
//         return "weekday";
//     }
// }

// function getCurrentTimeInfo() {
//     const currentDate = new Date();
//     const currentHour = currentDate.getHours();
//     const currentMinutes = currentDate.getMinutes();
//     const currentDay = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)

//     return {
//         hour: currentHour,
//         minutes: currentMinutes,
//         day: currentDay
//     };
// }

// const { hour, minutes, day } = getCurrentTimeInfo();
// const timeOfDay = getTimeOfDay(hour, minutes);
// const dayType = getDayType(day);

// alert(`It's ${dayType} ${timeOfDay}. Current time is ${hour}:${minutes}`);