describe('Navigation', () => {
    it('Browser da back forward refresh', () => {
       cy.visit('https://www.webdriveruniversity.com/'); //anasayfa
       cy.url().should('include','https://www.webdriveruniversity.com/');

       cy.get('#contact-us').invoke('removeAttr','target').click();//contact us
       cy.url().should('include','Contact-Us');

       cy.go('back');// anasayafa
       cy.url().should('include','https://www.webdriveruniversity.com/');

       cy.go('forward');//contact us
       cy.url().should('include','Contact-Us');

       cy.reload();
       cy.reload(true);

       //reload() icerisinde true ile kullanilirsa belllekteki verileri kullanmadan yenileme yapar

       
    });
});