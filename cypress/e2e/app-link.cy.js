/// <reference types="cypress" />

describe('App link tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('App header should be visible', () => {
    cy.get('.App-link').should('be.visible')
  })
})
