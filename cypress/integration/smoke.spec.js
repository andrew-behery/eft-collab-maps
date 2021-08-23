/// <reference types="cypress" />

describe('Smoke Test', () => {
  it('can view the home page', () => {
    cy.visit('/');
  });

  it('renders the SketchField', () => {
    cy.get('SketchField');
  });
});
