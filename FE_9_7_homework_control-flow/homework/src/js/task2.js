let question = confirm('Do you want to play a game?');
let res = '';
let endNumber = 5;
const first = 10;
let prize = 0;

function playAGame(endNumber,first,prize){
    const second = Math.floor(first/2);
    const thirth = Math.floor(second/2);
    if(question === false){
        res = 'You did not become a millionaire, but can.';
        alert(res);
    }else if(question === true){
        let startNumber = 0;
        const attemps = 3;
        let prizesAtemmpt = [first, second, thirth];
        let guess = false;
        let number = Math.floor(Math.random() * endNumber) + startNumber;
    
        for(let i = 0; i < prizesAtemmpt.length; i++){
            let askNumber = prompt(`Enter a number from 0 to ${endNumber}. 
Atempts left: ${attemps - i}
Total prize: ${prize}$
Possible prize on current attemp: ${prizesAtemmpt[i]}$`);
            if(askNumber === null || askNumber === ''){ 
                return; 
            }else{
                if(+askNumber === number && prizesAtemmpt[i] === first){
                    guess = true;
                    prize += first;
                    res = `Congratulation! Your prize is: ${prize}$.`;
                    break;
                }else if(+askNumber === number && prizesAtemmpt[i] === second){
                    guess = true;
                    prize += second;
                    res = `Congratulation! Your prize is: ${prize}$.`;
                    break;
                }else if(+askNumber === number && prizesAtemmpt[i] === thirth){
                    guess = true;
                    prize += thirth;
                    res = `Congratulation! Your prize is: ${prize}$.`;
                    break;
                }else{
                    res = `Thank you for a game. Your prize is: ${prize}$`;
                }
            }
        }
        alert(res);

        if(guess === false){
            let question2 = confirm('Do you want to play again?');
            if(question2 === true){
                let endNumber = 5;
                const first = 10;
                let prize = 0;
                playAGame(endNumber,first,prize);
            }
        }else{
            let question3 = confirm('Do you want to continue?');
            if(question3 === true){
            playAGame(endNumber * 2 ,first * 3, prize);
            }
        }
    }
}

playAGame(endNumber,first,prize);