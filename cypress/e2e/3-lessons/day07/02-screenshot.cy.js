describe('Ekran Goruntusu Alma', () => {
    it('Bir elementin veya web sayfasinin ekran goruntusunu alma', () => {
        cy.visit('https://www.webdriveruniversity.com/');
        cy.screenshot()
        cy.get('#login-portal').invoke('removeAttr', 'target').click();
        cy.get('.form').screenshot().find('#text').type('Faruk')
        cy.get('.form').screenshot();
    });
});