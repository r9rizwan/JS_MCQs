function question(event){

     event.preventDefault();
     

    var days = document.querySelector('input[name="quiz"]:checked').value;

    console.log(days);

    var msg1 = "10/10 correct answer";
    var msg2 = "0/0 wrong answer";

    if (days ==="Monday"){

        document.getElementById("q1Answer").innerHTML =msg1;

    }

    else{

        document.getElementById("q1Answer").innerHTML =msg2;
    }



}