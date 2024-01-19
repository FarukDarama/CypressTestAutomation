/*
https://www.kitapyurdu.com sitesine git
'Üye Ol' bağlantısına tıkla
Kayıt formunda 'Ad' alanına bir isim yaz ve doğrula
*/

describe('Uygulama-01', () => {
    it('Temel fonk. kullanimi', () => {
      //https://www.kitapyurdu.com sitesine git
      cy.visit('https://www.kitapyurdu.com');  
        //'Üye Ol' bağlantısına tıkla
      cy.get('.register > a').click();
      //Kayıt formunda 'Ad' alanına bir isim yaz ve doğrula
      //cy.get('#cookiescript_accept').click();
      cy.get('#register-name').type('Faruk').should('have.value','Faruk');
    });
});