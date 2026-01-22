// Scenario: Exclusão de item na lista
// Given que o usuário está na tela "/tarefas"
// When ele clica no botão "Excluir"
// And confirma a exclusão
// Then a tarefa é removida e exibe "Tarefa excluída"

describe('Lista de Tarefas', () => {
  it('Deve excluir uma tarefa da lista', () => {
    cy.visit('/tarefas');
    cy.contains('Excluir').click();
    // Assumindo confirmação de alerta nativo do navegador
    cy.on('window:confirm', () => true);
    cy.contains('Tarefa excluída').should('be.visible');
  });
});