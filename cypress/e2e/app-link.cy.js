/// <reference types="cypress" />

describe('@group2 App link tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('App header should be visible', () => {
    cy.get('.App-link').should('be.visible')
  })
})
