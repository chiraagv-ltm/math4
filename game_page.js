player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;


document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;

question_turn="player_1";
answer_turn="player_2";
get_answer=document.getElementById("input_check_box").value;

function send(){
    get_word1=document.getElementById("word1").value;
    get_word2=document.getElementById("word2").value;


question_word="<h4 id='word_display'>"+get_word1+" x "+get_word2+"</h4>";
input_box="<br>Answer : <input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word1").value="";
document.getElementById("word2").value="";
answer= parseInt(get_word1) * parseInt(get_word2)
}

function check(){
    if(answer == get_answer){
        if(answer_turn=="player_1"){
            player1_score=player1_score++;
            document.getElementById("player1_score").innerHTML=player1_score;
            document.getElementById("output").innerHTML="";
        }
        else{
            player2_score=player2_score++;
            document.getElementById("player2_score").innerHTML=player2_score;
            document.getElementById("output").innerHTML="";
        }
    }



    if(question_turn=="player_1"){
        question_turn="player_2";
        document.getElementById("player_question").innerHTML="Question Turn - "+player2_name;
    }
    else{
        question_turn="player_1";
        document.getElementById("player_question").innerHTML="Question Turn - "+player1_name; 
    }

    if(answer_turn=="player_1"){
        answer_turn="player_2";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
    }
    else{
        answer_turn="player_1";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player1_name; 
    }

    
}

    


