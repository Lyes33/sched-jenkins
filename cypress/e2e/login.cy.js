describe('login spec', () => {
  beforeEach(()=>{
      cy.visit('https://www.saucedemo.com/')
  })
  it('login successfuly', () => {
    
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').should('be.visible').and('be.enabled').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  })

it('login failed', () => {

  cy.get('[data-test="username"]').type('serror_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').should('be.visible').and('be.enabled').click()
  cy.get('.error-message-container').should('be.visible')
  cy.url().should('eq', 'https://www.saucedemo.com/')
})
})