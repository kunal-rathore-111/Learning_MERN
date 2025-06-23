/* Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
 */

function printTime(h, m, s, period) {
    if (h < 10) { h = '0' + h; }
    if (m < 10) { m = '0' + m; }
    if (s < 10) { s = '0' + s; }

    let time = `${h}:${m}:${s} ${period}`;

    console.log(time);
}

setInterval(function () {
    console.clear();
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();


    if (h == 0) {


        printTime(12, m, s, 'AM');
    }

    else if (h > 12) {
        printTime(h - 12, m, s, 'PM');
    }
    else if (h == 12) {
        printTime(h, m, s, 'PM');
    }
    else {
        printTime(h, m, s, 'AM');
    }

}, 1000);