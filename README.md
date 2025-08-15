# Chatbot Pizzaria WhatsApp

## Como instalar e rodar

1. Clone este repositório.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o arquivo `.env` com seus dados reais.
4. Crie as pastas `comprovantes/`, `backup_csv/`, `backup_comprovantes/` (caso o bot não crie automaticamente).
5. Rode o bot:
   ```bash
   npm start
   ```
6. Escaneie o QR code com o WhatsApp do número que será o bot.
7. Teste comandos, pedidos, saudações, dúvidas e IA!

## Arquivos principais

- **chatbot_pizzaria_com_broadcast_dinamico.js**: Código principal do bot.
- **ia.js**: Respostas automáticas usando IA (simulada).
- **contatos.txt**: Lista dos clientes que interagiram.
- **pedidos.csv**: Log de todos os pedidos.
- **taxas.json**: Taxas de entrega por bairro.
- **.env**: Configurações sensíveis.
- **package.json**: Dependências do projeto.

## Personalização

- Adapte o cardápio, taxas, promoções e mensagens no arquivo principal.
- Edite `ia.js` para personalizar as respostas automáticas.
- Adicione frases no array do arquivo `saudacaoReconhecimento.js` para ampliar o reconhecimento de saudações.

---