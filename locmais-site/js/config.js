const CONFIG = {
  whatsapp: '5561998331785',
  whatsappDisplay: '(61) 99833-1785',
  email: 'locmais2021@gmail.com',
  address: 'Brasilia, DF',
  whatsappDefaultMessage: 'Ola! Gostaria de solicitar um orcamento de andaimes com a LOCMAIS.'
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
    '*Solicitacao de Orcamento - LOCMAIS*',
    '',
    `*Nome:* ${data.name}`,
    `*Telefone:* ${data.phone}`,
    `*E-mail:* ${data.email}`,
    `*Servico:* ${serviceLabels[data.service] || data.service}`,
    '',
    '*Descricao da necessidade:*',
    data.message
  ].join('\n');
}
