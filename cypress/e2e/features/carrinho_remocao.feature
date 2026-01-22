Feature: Remoção de produto do carrinho

  Scenario: Remover um produto e atualizar contador
    Given que o usuário está na página do carrinho
    When ele clica em "Remover" no produto "Teclado Mecânico"
    Then o contador de itens do carrinho deve mostrar "0"