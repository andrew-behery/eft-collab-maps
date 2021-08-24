/// <reference types="cypress" />

describe('Smoke Test', () => {
  it('can view the home page', () => {
    cy.visit('/');
  });

  it('renders the ReactSketchCanvas', () => {
    cy.get('[data-testid=canvasId]').children();
  });
});
