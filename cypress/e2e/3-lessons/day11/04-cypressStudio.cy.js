describe('Cypress Studio', () => {
    it('Cypress Studio Kullanimi', () => {
        cy
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://practicesoftwaretesting.com/#/');
        cy.get('[data-test="nav-categories"]').click();
        cy.get('[data-test="nav-hand-tools"]').click();
        cy.get('[data-test="product-01HNK0NT56PF03YX7AMF28SW6V"] > .card-img-wrapper > .card-img-top').click();
        cy.get('[data-test="increase-quantity"]').click();
        cy.get('[data-test="increase-quantity"]').click();
        cy.get('[data-test="increase-quantity"]').click();
        cy.get('[data-test="increase-quantity"]').click();
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('[data-test="cart-quantity"]').click();
        cy.get('[data-test="proceed-1"]').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Cypress Studio Kullanimi-2', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://practicesoftwaretesting.com/#/');
        cy.get('[data-test="sort"]').select('name,desc');
        cy.get('[data-test="product-01HNK0NT6KSTSNZFGGD9SNCT18"] > .card-body > [data-test="product-name"]').click();
        cy.get('[data-test="increase-quantity"] > .fa').click();
        cy.get('[data-test="increase-quantity"] > .fa').click();
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('[data-test="nav-home"]').click();
        cy.get('[data-test="category-01HNK0NT4MSPTDWZZ9D9ZXSKEA"]').check();
        cy.get(':nth-child(13) > ul > :nth-child(2) > label').click();
        cy.get('[data-test="category-01HNK0NT4MSPTDWZZ9D9ZXSKEB"]').check();
        cy.get('[data-test="category-01HNK0NT4MSPTDWZZ9D9ZXSKED"]').check();
        cy.get(':nth-child(13) > ul > :nth-child(4) > label').click();
        cy.get('[data-test="category-01HNK0NT4MSPTDWZZ9D9ZXSKEB"]').uncheck();
        cy.get('[data-test="category-01HNK0NT4MSPTDWZZ9D9ZXSKEA"]').uncheck();
        cy.get('[data-test="category-01HNK0NT4MSPTDWZZ9D9ZXSKED"]').uncheck();
        cy.get(':nth-child(4) > .page-link').click();
        /* ==== End Cypress Studio ==== */
    });
});