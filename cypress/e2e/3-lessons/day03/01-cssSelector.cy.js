describe('CSS Selector', () => {
    it('CSS Selector ile konum belirleme', () => {
        
        cy.visit('https://www.kitapyurdu.com/');
        //tag name
        cy.get('input');
        //id
        cy.get('#search-input');
        //class
        cy.get('.logo-icon');
        //Attribute Value
        cy.get('[name="search_keyword"]');
        //clas value
        // Bunda iki class kullanabiliriz bu ornekte top-menu ve fr ayri classlar
        cy.get('[class="top-menu fr"]');
        //Tag name and Attribute Value
        cy.get('input[name="search_keyword"]');
        //Tag name and Multiple Attribute Value
        cy.get('input[name="search_keyword"][type="text"]');
    });
});