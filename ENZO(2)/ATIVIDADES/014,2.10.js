let numero1 = Number(prompt("Digite o primeiro numero: "))
let numero2 =  Number(prompt("Digite o segundo numero: "))
let operecao = prompt("Informe a operação: \n{+} \n{-} \n{*} \n {/}")


if(operecao == "+") {
    alert( numero1 + numero2)

}
if(operecao == "-") {
    alert( (numero1) - (numero2))

}
if(operecao == "*") {
    alert("O resultado é: " +(numero1) * (numero2))

}
if(operecao == "/") {
    alert("O resultado é: "+ (numero1) / (numero2))

}

