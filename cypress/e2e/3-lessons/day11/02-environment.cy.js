describe('Environment', () => {
    it('baseUrlin environmentde tanimsal kullanilmasi', () => {
        //cy.visit('/');
        cy.visit('/'+ Cypress.env('signin'));
    });
});