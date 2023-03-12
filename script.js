const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.querySelector('#nome').value;
  const genero = document.querySelector('#genero').value;
  const idade = document.querySelector('#idade').value;
  const rank = document.querySelector('#rank').value;

  const chute = document.querySelector('#chute').value;
  const destreza = document.querySelector('#destreza').value;
  const presenca = document.querySelector('#presenca').value;
  const drible = document.querySelector('#drible').value;
  const inteligencia = document.querySelector('#inteligencia').value;
  const precisao = document.querySelector('#precisao').value;

  const item1 = document.querySelector('#item1').value;
  const item2 = document.querySelector('#item2').value;
  const item3 = document.querySelector('#item3').value;

  const dinheiro = document.querySelector('#dinheiro').value;

  console.log(`
    Nome: ${nome}
    Gênero: ${genero}
    Idade: ${idade}
    Rank: ${rank}

    Atributos:
    Chute: ${chute}
    Destreza: ${destreza}
    Presença: ${presenca}
    Drible: ${drible}
    Inteligência: ${inteligencia}
    Precisão: ${precisao}

    Inventário:
    ${item1}
    ${item2}
    ${item3}

    Carteira: ¥${dinheiro},00
  `);

  form.reset();
});
