describe('Select file Methodu', () => {
    it('Select file Methodu Kullanimi', () => {
        cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html');
       // cy.get('#myFile').selectFile('package.json');

       //drag and drop ile
       cy.get('#myFile').selectFile('package.json',{action:"drag-drop"});

    });
});