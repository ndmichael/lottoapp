/*ThankYou for Visiting  This game is Simple 
Guess 3 different numbers inside the input box 
Automatically credited with 20$ for every new account
for every play 5$ is deducted 
guess 1number correct you will added credit of 10$ 
2correct guesses 20$ and 3correct guesses 40$ 
"'ENJOY'"
*/

alert("ThankYou for Visiting \nGuess 3 different digit 1 - 50 \nAutomatically credited with 20$ for every new account \n for every play 5$ is deducted \n1 correct guess 10$\n2correct guesses 20$ and 3correct guesses 40$ \nENJOY");

window.onload = function(){
/** 
** globals
**/

const userName = prompt("Enter Name to Create Account: ") || "avatar"
document.getElementById("account").innerHTML = userName.substr(0,15);


clearBtn = document.getElementById("clearbtn");
playBtn = document.getElementById("playbtn");
var comp_rest = document.getElementById("disp_output");
var details = document.getElementById ("result_details");
var credit_output  = document.getElementById ("cid");
credit = 20
credit_output.innerHTML = credit;

/**
** computer generated answers utility
**/
var comp_answer = function(){
    var rand_arr = []
    while (rand_arr.length < 5){
        let r = Math.floor(Math.random() * 50) + 1;
        if (rand_arr.indexOf(r) === -1){
            rand_arr.push(r);
        } //end of if
    } //end of while
        comp_rest.value = rand_arr ;
        return (rand_arr);
} // end of comp_answer

/**
**     getting users input
**/
function UserValues(){
    var clearBtn, playBtn;
    let userArr = [];
    input1 = document.getElementById("u-np1").value ;
    input2 = document.getElementById ("u-np2").value ;
    input3 = document.getElementById ("u-np3").value ;
    if ((input1 < 1 || input1 > 50) || (input2 < 1 ||  input2 > 50) || ( input3< 1 || input3 > 50)){
        alert("Values should be between 1 to 50");
    }else{
    userArr = [input1, input2, input3];
    userArr = userArr.filter(Boolean);
     validation(userArr);
     }
}
 /**
 ** validate user inputs
 **/
function validation(userArr ){
    if (! userArr.length || userArr === undefined || userArr ===  null){
            alert("input fields Empty");
      }
    else if (userArr.length < 3){
        alert("enter 3digits to have more chances");
    }
    else{
        compare_inputs(userArr );
    }
} // end of validation func

/**
** comparing and extracting matching right answer
**/
function compare_inputs(userArr){
    var result = [];
    var comp = comp_answer();
    arr = userArr ;
        for (i = 0; i < comp.length; i++){
        for (j=0; j < arr.length; j++){
            if (comp[i] == arr[j] ){
                result.push(arr[j]);
                break
            }
        }
    } // outter for
    credit_calc(result) ;
}

/**
** credit calculator
**/
var credit_calc = function(result){
    counter = 0;
    msg2 = "ThankYou for playing  ";
    credit -= 5;
    credit_output.innerHTML = credit;
    if (result.length == 1){
        credit += 10;
        details.innerHTML  = msg2 + " <br /> correct answers are " + result + "<br /> you won " + 10 + "$";
    }
    else if (result.length  == 2){
        credit += 20;
        details.innerHTML  = msg2 + " <br /> correct answers: " + result + "<br /> you won " + 20 + "$";
    }
    else if (result.length == 3){
        credit += 50;
        details.innerHTML  = msg2 + " <br /> correct answers: " + result + "<br /> you won " + 20 + "$";
    }
    else{
        details.innerHTML = " None correct " + msg2 ;
    }
   if (credit <= 0){
        alert(" credit is now zero game over, press PlayAgain \
        button to restart");
        details.innerHTML  = "credit is now zero game over, press <b>PlayAgain</b>  button to restart";
        comp_rest.value  = " ";
        details.innerHTML = " ";
        this.input2.value = " ";
        this.input1.value = " ";
        this.input3.value = " ";
    
        playBtn.disabled = true;
        credit  = 20;
      //  credit_output.innerHTML  = credit;
        
        return
    }  
    

    playBtn.disabled = true;
    credit_output.innerHTML = credit;
    msg2  = " ";
    return
}

var ClearInputs  = function(){
    input1 = document.getElementById("u-np1");
    input2 = document.getElementById ("u-np2");
    input3 = document.getElementById ("u-np3");
    input1.value = " ";
    input2.value = " ";
    input3.value  = " ";    
    comp_rest.value  = " ";
    details.innerHTML  = " ";
    credit_output.innerHTML  = credit;
    playBtn.disabled = false;

}

playBtn.addEventListener('click', UserValues);
clearBtn.addEventListener('click', ClearInputs);

} /* end of window onload **/
