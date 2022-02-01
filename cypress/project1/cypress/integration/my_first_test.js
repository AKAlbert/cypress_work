///<reference types = "cypress"/>


it('google test', function(){

    cy.visit('www.google.com')
    cy.get('.gLFyf').type('Automation step by step{enter}')
    cy.get('.MUFPAc > :nth-child(2) > a').click()
})