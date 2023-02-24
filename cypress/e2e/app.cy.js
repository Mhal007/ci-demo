/// <reference types="cypress" />

describe('@group1 App tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('App should be visible', () => {
    cy.get('.App').should('be.visible')
  })
})
