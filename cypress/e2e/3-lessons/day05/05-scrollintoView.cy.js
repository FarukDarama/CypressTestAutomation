describe('Eylem Metotlari - scrollIntoView() Metodu', () => {
    it('scrollIntoView() Metodu', () => {
        cy.visit('https://www.webdriveruniversity.com/');
        //Hizli scroll
        cy.get('#actions').scrollIntoView();

         //yavas scroll
         cy.get('#contact-us').scrollIntoView({duration:2000});

    });
});