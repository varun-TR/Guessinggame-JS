

let max=parseInt(prompt("Enter a max number : "));

while(!max)
{
    max=parseInt(prompt("Enter a valid number : "));
}

const random=parseInt(Math.floor((Math.random()* max)) +1);
console.log("random is :"+random);

let guess=parseInt(prompt("Enter the gussing number: "));
let count =1;

while(parseInt(guess)!==random)
{
   
     count++;
    if(guess>random)
    {
        guess=prompt("Too high. try again!");
    }
    else{
        guess=prompt("Too low. try again!");
    }
    if(guess==='q')
    {
        alert("you have been exitted");
        break;
    } 
}
if(parseInt(guess)===random){
    alert(`congrats! you have done it in ${count} attempts`);
}

console.log(`you have done it in ${count} attempts`);



