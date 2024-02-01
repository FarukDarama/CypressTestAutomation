describe('Custom Commands', () => {
    it('Magento - Arama motoru testi', () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.magentoArama('hut');
    });
});