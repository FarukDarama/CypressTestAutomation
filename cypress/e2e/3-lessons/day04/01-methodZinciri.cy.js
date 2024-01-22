// https://automationteststore.com sitesine git
// 'Contact Us' bağlantısına tıkla
// Kayıt formunu tamamla
// Kaydın gerçekleştiğini doğrula

describe('Method Zinciri', () => {
    it('Method Zincir Kullanimi', () => {
        cy.visit('https://automationteststore.com');
        cy.get('.info_links_footer').contains('Contact Us').click();

        cy.get('#ContactUsFrm').within(() => {
            cy.get('#ContactUsFrm_first_name').type('Faruk');//2
            cy.get('#ContactUsFrm_email').type('faruk@gmx.de');//2
            cy.get('#ContactUsFrm_enquiry').type('Ananin ......');
            cy.get('[title="Submit"]').click();
        })

        cy.get('.mb40').find('p').should('exist').and('be.visible').and('have.text', 'Your enquiry has been successfully sent to the store owner!');




    });
});