// The clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make the 'past' function return the time converted to milliseconds.
// More examples in the test cases below.

function past(h, m, s){
    //convert hours to milliseconds
    //hours x 3600000
    let millisecondHours = h * 3600000;

    //convert minutes to milliseconds
    //minutes x 60000
    let millisecondMinutes = m * 60000;

    //convert seconds to milliseconds
    //seconds x 1000
    let millisecondSeconds = s * 1000;

    //return the sum of milliseconds
    return millisecondHours + millisecondMinutes + millisecondSeconds;

}

module.exports = {
    past
};
