/* global cy */
describe('E2E: Free tickets', () => {

    it('should not have free tickets when the user is not VIP', () => {
        cy.visit('localhost:3000');
        cy.get('h2').should('have.text', '20€')
    });

    it('should have free tickets when the user is VIP', () => {
        cy.visit('localhost:3000');
        cy.get('#isVip').click();
        cy.get('h2').should('have.text', '0€')
    });
});
