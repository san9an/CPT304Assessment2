const holidaySettings = {
    "async": true,
    "crossDomain": true,
    "url": "https://public-holiday.p.rapidapi.com/2019/US",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "5e8e1342e0mshb1662f656545658p136f0djsn0b9a9d6b0d89",
        "x-rapidapi-host": "public-holiday.p.rapidapi.com"
    }
};

function HolidayCN() {
    holidaySettings.url = "https://public-holiday.p.rapidapi.com/2021/CN"
    $.ajax(holidaySettings).done(function (response) {
        var holidayList = JSON.stringify(response, null, 5);
        console.log(holidayList);
        document.getElementById("holidayList").innerHTML = "holidayList:\n" + holidayList;
    });
}

function HolidayJP() {
    holidaySettings.url = "https://public-holiday.p.rapidapi.com/2021/JP"
    $.ajax(holidaySettings).done(function (response) {
        var holidayList = JSON.stringify(response, null, 10);
        console.log(holidayList);
        document.getElementById("holidayList").innerHTML = "holidayList:\n" + holidayList;
    });
}

function HolidayUS() {
    holidaySettings.url = "https://public-holiday.p.rapidapi.com/2021/US"
    $.ajax(holidaySettings).done(function (response) {
        var holidayList = JSON.stringify(response, null, 5);
        console.log(holidayList);
        document.getElementById("holidayList").innerHTML = "holidayList:\n" + holidayList;
    });
}
