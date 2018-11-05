// DOM variables
let p_openingHours = document.querySelector('#openingHours');

let openingHours = {
    weekdays: '07:00 - 22:00',
    weekends: '08:00 - 23:00'
}

const getOpeningHours = (openingHours) => {
    let openToday;
    let getDay = new Date();
    let dayToday = getDay.getDay();
    if (dayToday == 0 || dayToday > 4) {
        openToday = openingHours.weekends;
    } else {
        openToday = openingHours.weekdays;
    }
    p_openingHours.innerHTML = openToday;

}

getOpeningHours(openingHours);