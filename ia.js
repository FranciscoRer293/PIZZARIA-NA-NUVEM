// ia.js - Simulação de integração com IA

/**
 * Interpreta mensagens usando IA (exemplo simples).
 * @param {Array} historico - Histórico formatado da conversa.
 * @returns {Promise<string>}
 */
async function interpretarMensagem(historico) {
  // Aqui você pode integrar com OpenAI, Google Gemini, etc.
  // Exemplo de resposta simples:
  const ultima = historico[historico.length - 1];
  if (ultima && ultima.parts && ultima.parts[0].text) {
    const texto = ultima.parts[0].text.toLowerCase();
    if (texto.includes('horário')) return 'Nosso horário de funcionamento é das 18h às 23h, todos os dias!';
    if (texto.includes('promoção')) return 'Hoje temos promoção: Na compra de 2 pizzas G, ganhe um refrigerante 1L!';
    if (texto.includes('endereço')) return 'Estamos localizados na Rua das Flores, nº 123, Centro.';
    if (texto.includes('vegetariana')) return 'Temos pizza vegetariana sim! Consulte o cardápio para opções.';
    // Adicione mais respostas específicas conforme desejar
  }
  // Resposta padrão para perguntas genéricas
  return 'Não entendi sua dúvida, mas posso te ajudar a fazer um pedido! Digite "menu" para ver as opções.';
}

module.exports = { interpretarMensagem };