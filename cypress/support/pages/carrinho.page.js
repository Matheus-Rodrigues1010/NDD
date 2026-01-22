class CarrinhoPage {
  visitarPaginaDoCarrinho() {
    cy.visit('/carrinho');
  }

  removerProdutoDoCarrinho(nomeProduto, textoBotao) {
    // Busca o produto pelo texto e clica no botão Remover dentro do mesmo container
    cy.contains(nomeProduto).parent().contains(textoBotao).click();
  }

  verificarContadorDoCarrinho(valorEsperado) {
    cy.get('#contador-carrinho').should('have.text', valorEsperado);
  }
}

export default CarrinhoPage;