
const calcular = document.getElementById('calcular');
const limpar = document.getElementById('limpar');


function fatorlucro() {

  const somapostiva = document.getElementById('somapositiva').value;
  const somanegativa = document.getElementById('somanegativa').value;
  const qtdtotal = document.getElementById('qtdtotal').value;
  const qtdpositiva = document.getElementById('qtdpositiva').value;
  const qtdnegativa = document.getElementById('qtdnegativa').value;
  const qtdzerada = document.getElementById('qtdzerada').value;
  const resultado = document.getElementById('resultado');


  const somanegativa2 = Math.abs(somanegativa);
  const qtdtotal2 = Math.abs(qtdtotal);
  const qtdpositiva2 = Math.abs(qtdpositiva);
  const qtdnegativa2 = Math.abs(qtdnegativa);
  const total = parseInt(qtdpositiva2) + parseInt(qtdnegativa2) + parseInt(qtdzerada);

  if (somapostiva !== '' && somanegativa !== '' && qtdtotal !== '' && qtdpositiva !== '' && qtdnegativa !== '' && qtdzerada !== '') {
    if (qtdtotal == total) {
      const valorFatorlucro = ((somapostiva / somanegativa2) * ((qtdpositiva2 / qtdtotal2) / (qtdnegativa2 / qtdtotal2))).toFixed(2);
      var valorFatorlucro2 = valorFatorlucro.toString().replace(".", ",");
      if (valorFatorlucro < 1.00) {
        resultado.textContent = ' Significa que você arrisca R$ 1,00 para ganhar R$ ' + (valorFatorlucro2) + ' centavos. ';
      } else {
        resultado.textContent = ' Significa que você arrisca R$ 1,00 para ganhar R$ ' + (valorFatorlucro2) + ' reais.';
      }
      let classificao = '';

      if (valorFatorlucro < 0.98) {
        classificao = 'Seu operacional não será Lucrativo no longo prazo, Para melhorar precisa aumentar sua acertividade e o risco x retorno das operações'
      }

      else if (valorFatorlucro < 1.3) {
        if ((somapostiva / somanegativa2) > ((qtdpositiva / qtdtotal) / (qtdnegativa / qtdtotal))) {
          classificao = 'Seu operacional já mostra resultados, se melhorar a acertividade já irá terá reultados no longo prazo!'
        } else {
          classificao = 'Seu operacional já mostra resultados, se melhorar o payoff já irá terá reultados no longo prazo!'
        }
      }
      else if (valorFatorlucro < 1.9) {
        if ((somapostiva / somanegativa2) > ((qtdpositiva / qtdtotal) / (qtdnegativa / qtdtotal))) {
          classificao = 'Seu operacional já é consistente e lucrativo no longo prazo, se melhorar acerividade ficará melhor e mais lucrativo!'
        } else {
          classificao = 'Seu operacional já é consistente e lucrativo no longo prazo, se melhorar o payoff das operações ficará melhor e mais lucrativo!'
        }
      }

      else if (valorFatorlucro <= 3) {
        if ((somapostiva / somanegativa2) > ((qtdpositiva / qtdtotal) / (qtdnegativa / qtdtotal))) {
          classificao = 'Seu operacional já é consistente e lucrativo no longo prazo, se melhorar acerividade seu operacional ficará sensacional!'
        } else {
          classificao = 'Seu operacional já é consistente e lucrativo no longo prazo, se melhorar o payoff das operações seu operacional ficará sensacional!'
        }
      }
      else if (valorFatorlucro > 3) {
        if ((somapostiva / somanegativa2) > ((qtdpositiva / qtdtotal) / (qtdnegativa / qtdtotal))) {
          classificao = 'Seu operacional é sensacional, seu payoff está excelente!'
        } else {
          classificao = 'Seu operacional é sensacional, sua acertividade está excelente!'
        }
      }
      resultado2.textContent = ' Isso mostra que ' + (classificao) + '.';
    }
    else {
      alert('Divergência de quantidades, a soma total não está correta!');
    }
  }
  else {
    //resultado.textContent = ' Preencha todos os campos!!!';
    alert('Preencha todos os campos!!!');
  }
}
calcular.addEventListener('click', fatorlucro);

function funclimpar() {
  document.getElementById("somapositiva").value = "";
  document.getElementById("somanegativa").value = "";
  document.getElementById("qtdtotal").value = "";
  document.getElementById("qtdpositiva").value = "";
  document.getElementById("qtdnegativa").value = "";
  document.getElementById("qtdzerada").value = "";
  resultado.textContent = ' ';
  resultado2.textContent = ' ';

}

limpar.addEventListener('click', funclimpar);