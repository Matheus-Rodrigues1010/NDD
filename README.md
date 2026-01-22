# Desafio Técnico - Automação QA (Cypress + Cucumber)

Este repositório contém a resolução do teste técnico de QA, utilizando Cypress para automação de testes e Cucumber para especificações em BDD.

## 🛠️ Tecnologias e Dependências
- **Cypress 13.0.0**: Framework principal.
- **@badeball/cypress-cucumber-preprocessor**: Suporte para arquivos `.feature`.
- **@bahmutov/cypress-esbuild-preprocessor**: Pré-processador para execução rápida dos testes.
- **Node.js**: Ambiente de execução.

## 📂 Estrutura do Projeto
A estrutura foi organizada para suportar tanto testes nativos quanto BDD:
- **e2e/**: Contém os arquivos de teste `.cy.js` (Questões 1-4) e os arquivos `.feature` (Questão 5).
- **support/step_definitions/**: Implementação dos passos (steps) do Cucumber.
- **support/pages/**: Camada de Page Objects para abstração de elementos e ações da Questão 5.
- **support/e2e.js**: Configuração global de suporte do Cypress.

## 🚀 Como Executar

### 1. Instalação
Na raiz do projeto, instale as dependências necessárias:
```bash
npm install
