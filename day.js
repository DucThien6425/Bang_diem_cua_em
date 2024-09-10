function myFunction() {
    var number = document.getElementById("nhap").value ;
    var day ;

    switch (number) {
        case 1:
            day = "Monday";
            document.getElementById('demo').innerHTML = day;
            break;
        case 2:
            day = "Tuesday";
            document.getElementById('demo').innerHTML = day;
            break;
        case 3:
            day = "Wednesday"
            document.getElementById('demo').innerHTML = day;
            break;
        case 4:
            day = "Thursday";
            document.getElementById('demo').innerHTML = day;
            break;
        case 5:
            day = "Friday";
            document.getElementById('demo').innerHTML = day;
            break;
        case 6:
            day = "Saturday";
            document.getElementById('demo').innerHTML = day;
            break;
        case 7:
            day = "Sunday";
            document.getElementById('demo').innerHTML = day;
            break;
        default:
            day = "Can't find";
            document.getElementById('demo').innerHTML = day;
    }
    
}