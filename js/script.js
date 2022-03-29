function question(event){

     event.preventDefault();
     

    var days = document.querySelector('input[name="quiz"]:checked').value;

    console.log(days);

    if (days ==="Monday"){

        document.getElementById("q1answer").innerHTML ="10/10 correct answer";

    }

    else{

        document.getElementById("q1answer").innerHTML ="0/0 wrong answer";
    }



}