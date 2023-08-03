const generateHintBtn = document.getElementById('generate-hint-btn');
const hintContainer = document.getElementById('hint-container');
const hintText = document.getElementById('hint-text');

const hints = [
  'Procure por vulnerabilidades no código-fonte da página.',
  'Verifique se existem arquivos ocultos ou comentários relevantes.',
  'A resposta pode estar codificada ou criptografada.',
  'Aperte em "Sim" logo e continue kkkkk',
  'Você aceitar os termos para avançar'
];

function showHint() {
  const randomIndex = Math.floor(Math.random() * hints.length);
  hintText.innerText = hints[randomIndex];
  hintContainer.style.display = 'block';
  
  setTimeout(() => {
    hintContainer.style.display = 'none';
  }, 10000); // 10000 milissegundos = 10 segundos
}

generateHintBtn.addEventListener('click', showHint);
