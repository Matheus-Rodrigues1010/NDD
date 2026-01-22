// Scenario: Filtro de busca de usuários
// Given que o usuário está na tela "/usuarios"
// When ele digita um nome no campo #filtro-nome e pressiona Enter
// Then o sistema deve exibir apenas os usuários correspondentes

describe('Filtro de Usuários', () => {
  it('Deve filtrar usuários por nome', () => {
    const nomeBusca = 'Carlos';
    cy.visit('/usuarios');
    cy.get('#filtro-nome').type(`${nomeBusca}{enter}`);
    cy.get('table').should('contain', nomeBusca); // Assumindo que os nomes ficam em uma tabela/lista
  });
});