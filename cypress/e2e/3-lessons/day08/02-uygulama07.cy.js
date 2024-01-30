describe('Uygulama-07', () => {
    it('Tool Shop - Gecerli verilerle siteye giris yapabilmeli', () => {
        cy.visit('https://practicesoftwaretesting.com/');
        cy.get('[data-test="nav-sign-in"]').click();
        cy.readFile('dosyalar/email.txt').then((email)=>{
            cy.get('#email').type(email)
        });

        cy.readFile('dosyalar/sifre.txt'),then((sifre)=>{
           cy.get('#password').type(sifre)
        });
        cy.get('[value="Login"]').click();

        
    });
});