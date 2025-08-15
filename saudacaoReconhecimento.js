// saudacaoReconhecimento.js - Reconhecimento flexível de saudações
const saudacoes = [
  'oi', 'opa', 'olá', 'ola', 'boa noite', 'bom dia', 'boa tarde', 'tudo bem', 'tem pizza', 'pizza'
];

function verificarSaudacao(texto) {
  const normalizedText = texto.toLowerCase();
  return saudacoes.some(s => normalizedText.includes(s));
}

module.exports = { verificarSaudacao };