player_1name=localStorage.getItem("player_1");
player_2name=localStorage.getItem("player_2");

player_1_score=0;
player_2_score=0;
document.getElementById("p1").innerHTML=player_1name+" : ";
document.getElementById("p2").innerHTML=player_2name+" : ";

document.getElementById("p1s").innerHTML=player_1_score;
document.getElementById("p2s").innerHTML=player_2_score;

document.getElementById("qt").innerHTML="question turn"+player_1name;
document.getElementById("at").innerHTML="answer turn"+player_2name;

function send(){
    get_word=document.getElementById("i1").value;
    word=get_word.toLowerCase();
    
charAt1=word.charAt(1);
length_divide_2=Math.floor(word.length/2);
charAt2=word.charAt(length_divide_2);

length_minus_1=word.length-1
charat3=word.charAt(length_minus_1);

remove_charAt1=word.replace(charAt1,"*");
remove_charAt2=remove_charAt1.replace(charAt2,"*");
remove_charAt3=remove_charAt2.replace(charAt3,"*");

question_word="<h4 id='word_dispay'>Q"+remove_charAt3+"</h4>";
input_box="<br>Answer : <input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</buuton>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("i1").value="";
}
