describe('Temel test fonksiyonlari', () => {
    it('Visit(), get(), click(), type(), should() fonk kull.', () => {
        
        cy.visit('URL');
        //visit() herhangi bir siteye gitmek icin kullanilir
        cy.get('locator').click();
        //type()  wie sendKey, data eingebung
        // sholud()  assertion
    });
});