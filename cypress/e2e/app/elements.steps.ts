import { Then } from 'cypress-cucumber-preprocessor/steps';

import TEST_IDS from './testIds';

Then('eu vejo o título {string} na aba do navegador', (title) => {
  cy.title().should('include', title);
});

Then('eu vejo uma lista de tarefas vazia', () => {
  cy.contains('Sem tarefas. Adicione uma!');
});

Then('eu vejo um campo de texto para digitar uma tarefa', () => {
  cy.get(`[data-testid^=${TEST_IDS.todoInput}]`);
});

Then('eu vejo um botão para adicionar tarefas', () => {
  cy.contains('Adicionar tarefa');
});

Then('eu vejo uma tarefa com o texto {string} na lista', (texto) => {
  cy.get(`[data-testid^=${TEST_IDS.todoList}]`)
    .contains(texto);
});

Then('o campo de texto para digitar uma tarefa está vazio', () => {
  cy.get(`[data-testid^=${TEST_IDS.todoInput}]`)
    .should('have.value', '');
});

Then('a tarefa {int} tem o status {string}', (position, status) => {
  cy.get(`[data-testid^=${TEST_IDS.todoList}]`).eq(position - 1)
    .contains(status);
});

Then('devem existir {int} tarefas', (quantity) => {
  cy.get(`[data-testid^=${TEST_IDS.todoList}]`).children()
    .should('have.length', quantity);
});

Then('existe a tarefa {int}', (number) => {
  cy.get(`[data-testid^=${TEST_IDS.todoList}]`)
    .contains(`Tarefa ${number}`);
});

Then('não existe a tarefa {int}', (number) => {
  cy.get(`[data-testid^=${TEST_IDS.todoList}]`)
    .contains(`Tarefa ${number}`)
    .should('not.exist');
});
