// Scenario: Recuperação de senha bem-sucedida
// Given que o usuário está na tela de login
// When ele clica em "Esqueci minha senha"
// And preenche o e-mail com "teste@email.com" no campo #email-recuperacao
// And clica no botão "Recuperar"
// Then o sistema exibe "Um link de recuperação foi enviado para seu e-mail."

describe('Recuperação de Senha', () => {
  it('Deve solicitar recuperação de senha com sucesso', () => {
    cy.visit('/login');
    cy.contains('Esqueci minha senha').click();
    cy.url().should('include', '/recuperar-senha');
    cy.get('#email-recuperacao').type('teste@email.com');
    cy.contains('Recuperar').click();
    cy.contains('Um link de recuperação foi enviado para seu e-mail.').should('be.visible');
  });
});