// Scenario: Cadastro de novo usuário
// Given que o usuário está na tela de cadastro "/cadastro"
// When ele preenche os campos #nome, #email e #senha
// And clica no botão "Cadastrar"
// Then o sistema exibe "Cadastro realizado com sucesso."

describe('Cadastro de Usuário', () => {
  it('Deve realizar cadastro com sucesso', () => {
    cy.visit('/cadastro');
    cy.get('#nome').type('João Silva');
    cy.get('#email').type('joao@teste.com');
    cy.get('#senha').type('senha123');
    cy.contains('Cadastrar').click();
    cy.contains('Cadastro realizado com sucesso.').should('be.visible');
  });
});