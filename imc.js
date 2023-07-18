function calculaIMC() {
    const peso = +document.getElementById('peso').value;
    const altura = +document.getElementById('altura').value;
    const faixa_etaria = document.querySelector('input[name="faixa-etaria"]:checked').value;
    const imc = +(peso / (altura ** 2)).toFixed(2);
    let resultado = document.getElementById('resultado');
    let classificacao = "";
    const peso_maximo = (25 * (altura ** 2)).toFixed(2);
    const peso_minimo = (18.5 * (altura ** 2)).toFixed(2);
    let classe = " ";

    if(imc < 18.5 && faixa_etaria === 'adulto') {
        classficacao = "Baixo Peso";
    } else if (imc < 24.9 && faixa_etaria === 'adulto') {
        classificacao = "Peso normal";
    } else if (imc < 29.9 && faixa_etaria === 'adulto') {
        classificacao = "Excesso de peso";
    } else if (imc < 34.9 && faixa_etaria === 'adulto') {
        classificacao = "Obsidade de Classe 1";
    }
    else if (imc < 40 && faixa_etaria === 'adulto') {
        classificacao = "Obsidade de Classe 2";
    }
    else if (imc > 40 && faixa_etaria === 'adulto') {
        classificacao = "Obsidade de Classe 3";
    }

    if(imc <= 22 && faixa_etaria === 'idoso') {
        classficacao = "Baixo Peso";
    } else if (imc < 27 && faixa_etaria === 'idoso') {
        classificacao = "Adequado";
    } else if (imc >= 27 && faixa_etaria === 'idoso') {
        classificacao = "Sobrepeso";
    }

    if(imc > 29.9){
        classe = "text-danger"
    }

    resultado.innerHTML = `<p class="${classe}">Resultado <br> ${faixa_etaria === "adulto" ? 'Adulto' : 'Idoso'} ${altura}m ${peso}kg <br> IMC = ${imc} <br> Classificação: ${classificacao} <br> Peso ideal: ${peso_minimo}kg - ${peso_maximo}kg</p>`;
}