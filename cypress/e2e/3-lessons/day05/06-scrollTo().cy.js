describe('Eylem Metotlari - scrollTo() Metodu', () => {
    it('scrollTo() Metodu Kullanimi', () => {
        cy.visit('https://www.webdriveruniversity.com/');
        //koordinat ile scroll yapma
        cy.scrollTo(0,2000,{duration:2000});
        cy.wait(2000);

        //Positon degeri ile scroll yapma
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('top',{duration:2000});
        
    });
});