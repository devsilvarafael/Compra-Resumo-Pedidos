let mostraSaldo = document.querySelector('#amount')
let planoAtivo = false;

document.addEventListener('DOMContentLoaded', function () {
  mostraSaldo.innerHTML = `Saldo: R$ ${usuario.recuperaSaldo.toFixed(2).replace('.',',')}`

  document.querySelector('#valorPagar').innerHTML = `R$${assign.recuperaAssinatura}/ano`
})

function payment() 
{
  let usuarioSaldo = usuario.recuperaSaldo;
  let assinatura = assign.recuperaAssinatura;

  //Verificação se há saldo para efetuar assinatura.
  if (usuarioSaldo < assinatura) {

    compraErro = () => {
      let compra = document.getElementById('mensagem');
  
      compra.innerHTML = `<div class="mensagem-erro">
        <p>Você não possui saldo suficiente! =C.<p>
      </div>`

      //Desaparecer após 2 seg
      setTimeout(() => {
        compra.style.display = 'none';
      }, 2000);
    }
    compraErro();

  } else {
    mostraSaldo.innerHTML = `Saldo: R$ ${(usuarioSaldo - assinatura).toFixed(2).replace('.',',')}`;
    planoAtivo = true;

    compraFeita = () => {
      let compra = document.getElementById('mensagem');
  
      compra.innerHTML = `<div class="mensagem-parabens">
        <p>Parabéns! Você adquiriu uma assinatura ANUAL.<p>
      </div>`

      //Desaparecer após 2 seg
      setTimeout(() => {
        compra.style.display = 'none';
      }, 2000);
    }
    compraFeita();
  }

}


