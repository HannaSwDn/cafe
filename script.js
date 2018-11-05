// DOM variables
let p_openingHours = document.querySelector('#openingHours');
let p_address = document.querySelector('#address');
let p_contact = document.querySelector('#phone');
let li1 = document.querySelector('#li1');
let li2 = document.querySelector('#li2');
let li3 = document.querySelector('#li3');
let li4 = document.querySelector('#li4');
let li5 = document.querySelector('#li5');

li4.addEventListener('click', event => {
    p_address.style.color = '#E68F0E';
    setTimeout(function(){ p_address.style.color = 'white'; }, 750);
});

li5.addEventListener('click', event => {
    p_contact.style.color = '#E68F0E';
    setTimeout(function(){ p_contact.style.color = 'white'; }, 750);
})

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