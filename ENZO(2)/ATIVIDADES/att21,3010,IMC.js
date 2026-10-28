let peso = prompt("Digite o seu peso(KG): ")
let altura = prompt("Informe a sua altura(m): ")
gerarRelatorio(peso, altura)

let IMC = calcularIMC(peso, altura)

function calcularIMC(peso, altura){
return peso / (altura * altura)
}

function classificarIMC(IMC){
    if(IMC >= 40.0) {
        alert("Obesidade mortal KKKKSKSKSKSKSKSKS")   
    }else if (IMC <= 39.9 ) {
        alert("OBESAAAAO MENO: " + IMC)
    } else if (IMC <= 35.0) {
        alert("Obezin fi: " + IMC)
    }else if (IMC <= 29.0) {
        alert("OBE SO PSO CE: " + IMC)
    }else if (IMC <= 25.0) {
        alert(" DA PA MIORA NE PAIZAO: " + IMC)
    }else if (IMC < 18.5 ) {
        alert("iiiiia la magrelao mane: " + IMC)
    }
}

function gerarRelatorio(peso, altura) {
    let IMC = calcularIMC(peso, altura)
    classificarIMC(IMC)
}
