let teste;

function letsplay(){
    let op = ["Rock", "Paper", "Scissor"];
    let random = Math.floor(Math.random() * op.length);
    let teste = op[random];
    console.log("Your oponent played: " + teste);
    return teste;
}

letsplay();

console.log(teste)



