function myFunction() {
    var number = document.getElementById("nhap").value ;
    var greeting ;
    if (number == 0){
        greeting = "Bạn được không điểm";
        document.getElementById("demo").style.color = "#ff0000";
    }
    else if (number > 0) {
        greeting = "Đó là số dương";
        document.getElementById("demo").style.color = "green";

    }
    else{
        greeting = "Đây là số âm";
        document.getElementById("demo").style.color = "yellow";

    }
    document.getElementById('demo').innerHTML = greeting;
}