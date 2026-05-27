const CONFIG = {
  whatsapp: '5561998331785',
  whatsappDisplay: '(61) 99833-1785',
  email: 'locmais2021@gmail.com',
  address: 'Brasília, DF',
  whatsappDefaultMessage: 'Olá! Gostaria de solicitar um orçamento de andaimes com a LOCMAIS.'
};

function getWhatsAppLink(message) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message || CONFIG.whatsappDefaultMessage)}`;
}

function buildOrcamentoMessage(data) {
  const serviceLabels = {
    tubular: 'Andaime Tubular',
    fachadeiro: 'Andaime Fachadeiro'
  };

  return [
    '*Solicitação de Orçamento - LOCMAIS*',
    '',
    `*Nome:* ${data.name}`,
    `*Telefone:* ${data.phone}`,
    `*E-mail:* ${data.email}`,
    `*Serviço:* ${serviceLabels[data.service] || data.service}`,
    '',
    '*Descrição da necessidade:*',
    data.message
  ].join('\n');
}
