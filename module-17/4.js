/***
if you get more than 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
const myScore = 90;
const fScore = 70;
if(myScore > 80){
    if(fScore > 80)
    { 
     console.log("Go for a lunch");
    }
    else if(fScore>=60 && fScore<80){
        console.log("good luck next time");
    }
    else if(fScore>=40 && fScore<60){
        console.log("keep your friend's message unseen");
    }
    else if(fScore<40){
        console.log("block your friend");
    }
}
else{
    console.log("go to home and sleep and act sad");
}