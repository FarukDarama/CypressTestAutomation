describe('Test Aşamaları', () => {
    it('Temel Komutlar', () => {
        cy.visit('https://www.kitapyurdu.com') // Given --->Testr icin on hazirlik asamasi
        cy.contains('Üye Ol').click() //When ---> Eylemi gerceklestirme
        cy.url().should('contain', 'account/register') // Then --> Test dogrulama
    });
});