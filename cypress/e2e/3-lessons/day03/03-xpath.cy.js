describe('XPath', () => {
    it('XPath ile locate alma', () => {
        cy.visit('https://www.kitapyurdu.com/');
        cy.xpath('//input')
    });
});