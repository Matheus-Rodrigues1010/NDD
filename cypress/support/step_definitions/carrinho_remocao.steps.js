import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CarrinhoPage from '../pages/carrinho.page';

const carrinho = new CarrinhoPage();

Given('que o usuário está na página do carrinho', () => {
  carrinho.visitarPaginaDoCarrinho();
});

When('ele clica em {string} no produto {string}', (botao, produto) => {
  carrinho.removerProdutoDoCarrinho(produto, botao);
});

Then('o contador de itens do carrinho deve mostrar {string}', (quantidade) => {
  carrinho.verificarContadorDoCarrinho(quantidade);
});