
        var myDate = new Date();//creates a new date object with the current date and time
        var myDay = myDate.getDay();//. The getDay () method returns the day of the week 
        
        // Array of days.
        var weekday = ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
        console.log("Today is : " + weekday[myDay]);
        console.log("<br/>");
        
        // get hour value.
        var hours = myDate.getHours();
        //tarnary operator
        var ampm = hours >= 12 ? 'PM' : 'AM';
       
        var minutes = myDate.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var myTime = hours + " " + ampm + " : " + minutes +
            " : " + myDate.getMilliseconds();
        console.log("\tCurrent time is : " + myTime);
       