import { Given } from 'cypress-cucumber-preprocessor/steps';

import TEST_IDS from './testIds';

Given('que eu entro no app', () => {
  cy.visit('/');
});

Given('eu digito uma tarefa com o texto {string}', (texto) => {
  cy.get(`[data-testid^=${TEST_IDS.todoInput}]`)
    .type(texto);
});

Given('eu clico no botão de adicionar tarefa', () => {
  cy.get(`[data-testid^=${TEST_IDS.todoAddButton}]`).click();
});

Given('eu adiciono {int} tarefas', (quantity) => {
  for (let index = 1; index <= quantity; index += 1) {
    cy.get(`[data-testid^=${TEST_IDS.todoInput}]`).type(`Tarefa ${index}`);
    cy.get(`[data-testid^=${TEST_IDS.todoAddButton}]`).click();
  }
});

Given('eu removo a tarefa {int}', (position) => {
  cy.get(`[data-testid^=${TEST_IDS.todoDelButton}]`)
    .eq(position - 1).click();
});
