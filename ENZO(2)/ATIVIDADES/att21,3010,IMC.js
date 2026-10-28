let peso = prompt("Digite o seu peso(KG): ")
let altura = prompt("Informe a sua altura(m): ")
gerarRelatorio(peso, altura)

let IMC = calcularIMC(peso, altura)

function calcularIMC(peso, altura){
return peso / (altura * altura)
}

function classificarIMC(IMC){
    if(IMC >= 40) {
        alert("Obesidade mortal KKKKSKSKSKSKSKSKS: " + IMC)   
    }else if (IMC >= 35 ) {
        alert("OBESAAAAO MENO: " + IMC)
    } else if (IMC >= 30) {
        alert("Obezin fi: " + IMC)
    }else if (IMC >= 29.0) {
        alert("OBE SO PSO CE: " + IMC)
    }else if (IMC >= 25) {
        alert(" DA PA MIORA NE PAIZAO: " + IMC)
    }else if (IMC >= 18 ) {
        alert("iiiiia la magrelao mane: " + IMC)
    }else{
        alert("peso normi: " + IMC)
    }
}

function gerarRelatorio(peso, altura) {
    let IMC = calcularIMC(peso, altura)
    classificarIMC(IMC)
}
