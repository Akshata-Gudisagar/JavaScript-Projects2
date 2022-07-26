
    // Get the current date
    let today = new Date();


    // Get the year of the current date
    let currentYear = today.getFullYear();


    // Get the date of the next current
    let currentDate =
        new Date(currentYear, 11, 25);//yy/mm/dd


    // Get the number of milliseconds in 1 day
    let dayMilliseconds =
        1000 * 60 * 60 * 24;


    // Get the remaining amount of days
    //Math.ceil():A number representing the nearest integer when rounding upwards.
    let remainingDays = Math.ceil(
    (currentDate.getTime() - today.getTime()) /
    (dayMilliseconds)
    );


    // Write it to the page
    console.log("There are " + remainingDays +
                " days remaining until cristmass.");


 









