 describe('Uygulama 02', () => {
    it('Amazon örnegi', () => {
        cy.visit('https://www.amazon.com');
        ////Arama motorunda 'iphone' kelimesini ara
        cy.get('#twotabsearchtextbox').type('iphone');
        cy.get('#nav-search-submit-button').click();

        cy.get('.a-color-state').should('contain','iphone');
    });
 });