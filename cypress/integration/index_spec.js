/* global cy */
it('an user should not have free tickets when is not VIP', () => {
    cy.visit('localhost:3000');
    cy.get('h2').should('have.text', '20€')
});

it('an user should have free tickets when is VIP', () => {
    cy.visit('localhost:3000');
    cy.get('#isVip').click();
    cy.get('h2').should('have.text', '0€')
});